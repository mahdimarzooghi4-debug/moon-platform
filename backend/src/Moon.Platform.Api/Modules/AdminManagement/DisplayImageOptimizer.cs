using SkiaSharp;

namespace Moon.Platform.Api.Modules.AdminManagement;

public enum DisplayImageKind { News, Logo }
public sealed record OptimizedDisplayImage(string FileName, string ContentType, byte[] Data);

/// <summary>Only for replaceable public display images. Never use for evidence or attachments.</summary>
public static class DisplayImageOptimizer
{
    private const int MaxInputSide = 8192;
    private const long MaxInputPixels = 24_000_000;
    private static readonly SemaphoreSlim Slots = new(2, 2);
    public static async Task<OptimizedDisplayImage?> OptimizeAsync(byte[] input, string contentType,
        string fileName, DisplayImageKind kind, CancellationToken cancellationToken = default)
    {
        // Existing endpoint byte limits remain in force; enforce them here as well.
        var (maxBytes, maxSide, targetBytes) = kind switch
        {
            DisplayImageKind.News => (8 * 1024 * 1024, 1280, 100 * 1024),
            DisplayImageKind.Logo => (2 * 1024 * 1024, 384, 30 * 1024),
            _ => throw new ArgumentOutOfRangeException(nameof(kind))
        };
        if (input.Length == 0 || input.Length > maxBytes) return null;
        await Slots.WaitAsync(cancellationToken);
        try
        {
            cancellationToken.ThrowIfCancellationRequested();
            using var data = SKData.CreateCopy(input);
            using var codec = SKCodec.Create(data);
            if (codec is null) return null;
            var actualType = codec.EncodedFormat switch
            {
                SKEncodedImageFormat.Jpeg => "image/jpeg",
                SKEncodedImageFormat.Png => "image/png",
                SKEncodedImageFormat.Webp => "image/webp",
                _ => null
            };
            if (actualType is null || !string.Equals(contentType, actualType, StringComparison.OrdinalIgnoreCase))
                return null;
            var info = codec.Info;
            if (info.Width <= 0 || info.Height <= 0 || info.Width > MaxInputSide || info.Height > MaxInputSide ||
                (long)info.Width * info.Height > MaxInputPixels || codec.FrameCount > 1)
                return null;
            // APNG may be exposed as a single frame by some native decoders.
            if (actualType == "image/png" && !IsStaticPng(input)) return null;
            using var colorSpace = SKColorSpace.CreateSrgb();
            var decodeInfo = new SKImageInfo(info.Width, info.Height, SKColorType.Rgba8888, SKAlphaType.Premul, colorSpace);
            using var bitmap = new SKBitmap(decodeInfo);
            if (codec.GetPixels(decodeInfo, bitmap.GetPixels()) != SKCodecResult.Success) return null;
            cancellationToken.ThrowIfCancellationRequested();
            var origin = codec.EncodedOrigin;
            var swap = origin is SKEncodedOrigin.LeftTop or SKEncodedOrigin.RightTop or SKEncodedOrigin.RightBottom or SKEncodedOrigin.LeftBottom;
            var ow = swap ? info.Height : info.Width;
            var oh = swap ? info.Width : info.Height;
            var scale = Math.Min(1.0, maxSide / (double)Math.Max(ow, oh));
            var width = Math.Max(1, (int)Math.Round(ow * scale));
            var height = Math.Max(1, (int)Math.Round(oh * scale));
            using var surface = SKSurface.Create(new SKImageInfo(width, height, SKColorType.Rgba8888, SKAlphaType.Premul, colorSpace));
            if (surface is null) throw new InvalidOperationException("Image surface allocation failed.");
            var canvas = surface.Canvas;
            canvas.Clear(SKColors.Transparent);
            canvas.Scale(width / (float)ow, height / (float)oh);
            ApplyOrientation(canvas, origin, info.Width, info.Height);
            using var source = SKImage.FromBitmap(bitmap);
            canvas.DrawImage(source, 0, 0, new SKSamplingOptions(SKFilterMode.Linear, SKMipmapMode.None));
            using var image = surface.Snapshot();
            // Re-encoding decoded pixels removes source EXIF/GPS metadata.
            // Prefer lossless logo encoding, fall back to bounded lossy encoding only
            // when necessary. Targets are advisory; do not force unreadable images.
            int[] qualities = kind == DisplayImageKind.Logo ? [100, 90, 85] : [85, 78];
            byte[]? best = null;
            foreach (var quality in qualities)
            {
                cancellationToken.ThrowIfCancellationRequested();
                using var encoded = image.Encode(SKEncodedImageFormat.Webp, quality);
                if (encoded is null || encoded.Size == 0) throw new InvalidOperationException("WebP encoding failed.");
                var bytes = encoded.ToArray();
                if (best is null || bytes.Length < best.Length) best = bytes;
                if (best.Length <= targetBytes) break;
            }
            if (best is null || best.Length > maxBytes) return null;
            // Always store the re-encoded display derivative, never raw upload metadata.
            var stem = Path.GetFileNameWithoutExtension(Path.GetFileName(fileName.Replace('\\', '/')));
            if (string.IsNullOrWhiteSpace(stem)) stem = "image";
            if (stem.Length > 235) stem = stem[..235];
            return new(stem + ".webp", "image/webp", best);
        }
        finally { Slots.Release(); }
    }

    private static bool IsStaticPng(ReadOnlySpan<byte> bytes)
    {
        if (bytes.Length < 8 || !bytes[..8].SequenceEqual(new byte[] {137,80,78,71,13,10,26,10})) return false;
        var offset = 8;
        while (bytes.Length - offset >= 12)
        {
            var size = System.Buffers.Binary.BinaryPrimitives.ReadUInt32BigEndian(bytes[offset..]);
            if (size > (uint)(bytes.Length - offset - 12)) return false;
            var type = bytes.Slice(offset + 4, 4);
            if (type.SequenceEqual("acTL"u8)) return false;
            if (type.SequenceEqual("IEND"u8)) return size == 0 && offset + 12 == bytes.Length;
            offset += checked((int)size + 12);
        }
        return false;
    }

    private static void ApplyOrientation(SKCanvas canvas, SKEncodedOrigin origin, int w, int h)
    {
        switch (origin)
        {
            case SKEncodedOrigin.TopLeft: break;
            case SKEncodedOrigin.TopRight: canvas.Translate(w, 0); canvas.Scale(-1, 1); break;
            case SKEncodedOrigin.BottomRight: canvas.Translate(w, h); canvas.RotateDegrees(180); break;
            case SKEncodedOrigin.BottomLeft: canvas.Translate(0, h); canvas.Scale(1, -1); break;
            case SKEncodedOrigin.LeftTop: canvas.RotateDegrees(90); canvas.Scale(1, -1); break;
            case SKEncodedOrigin.RightTop: canvas.Translate(h, 0); canvas.RotateDegrees(90); break;
            case SKEncodedOrigin.RightBottom: canvas.Translate(h, w); canvas.RotateDegrees(90); canvas.Scale(-1, 1); break;
            case SKEncodedOrigin.LeftBottom: canvas.Translate(0, w); canvas.RotateDegrees(-90); break;
            default: throw new InvalidOperationException("Unsupported image orientation.");
        }
    }
}
