using Moon.Platform.Api.Modules.AdminManagement;
using SkiaSharp;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class DisplayImageOptimizerTests
{
    private static byte[] CreatePng(int w, int h, bool transparent = false)
    {
        using var surface = SKSurface.Create(new SKImageInfo(w, h));
        surface.Canvas.Clear(transparent ? SKColors.Transparent : SKColors.White);
        using var paint = new SKPaint { Color = SKColors.Red };
        surface.Canvas.DrawRect(0, 0, w / 2f, h / 2f, paint);
        using var image = surface.Snapshot();
        using var data = image.Encode(SKEncodedImageFormat.Png, 100);
        return data.ToArray();
    }

    [Theory]
    [InlineData(DisplayImageKind.News, 2000, 1000, 1280, 640)]
    [InlineData(DisplayImageKind.News, 1000, 2000, 640, 1280)]
    [InlineData(DisplayImageKind.Logo, 800, 400, 384, 192)]
    [InlineData(DisplayImageKind.Logo, 64, 32, 64, 32)]
    public async Task Produces_valid_webp_with_bounded_dimensions_without_upscaling(DisplayImageKind kind,
        int w, int h, int expectedWidth, int expectedHeight)
    {
        var result = await DisplayImageOptimizer.OptimizeAsync(CreatePng(w,h), "image/png", "../../sample.png", kind);
        Assert.NotNull(result);
        Assert.Equal("sample.webp", result.FileName);
        Assert.Equal("image/webp", result.ContentType);
        using var data = SKData.CreateCopy(result.Data);
        using var codec = SKCodec.Create(data);
        Assert.NotNull(codec);
        Assert.Equal(SKEncodedImageFormat.Webp, codec.EncodedFormat);
        Assert.Equal(expectedWidth, codec.Info.Width);
        Assert.Equal(expectedHeight, codec.Info.Height);
        Assert.Equal(1, codec.FrameCount);
    }

    [Fact]
    public async Task Preserves_transparent_logo_background()
    {
        var result = await DisplayImageOptimizer.OptimizeAsync(CreatePng(64,32,true), "image/png", "logo.png", DisplayImageKind.Logo);
        Assert.NotNull(result);
        using var bitmap = SKBitmap.Decode(result.Data);
        Assert.NotNull(bitmap);
        Assert.Equal((byte)0, bitmap.GetPixel(63,31).Alpha);
        Assert.Equal((byte)255, bitmap.GetPixel(1,1).Alpha);
    }

    [Fact]
    public async Task Rejects_fake_mismatched_truncated_and_oversized_uploads()
    {
        var png = CreatePng(64,32);
        Assert.Null(await DisplayImageOptimizer.OptimizeAsync([1,2,3], "image/png", "bad.png", DisplayImageKind.News));
        Assert.Null(await DisplayImageOptimizer.OptimizeAsync(png, "image/jpeg", "bad.jpg", DisplayImageKind.News));
        Assert.Null(await DisplayImageOptimizer.OptimizeAsync(png[..(png.Length/2)], "image/png", "bad.png", DisplayImageKind.News));
        Assert.Null(await DisplayImageOptimizer.OptimizeAsync(new byte[2*1024*1024+1], "image/png", "big.png", DisplayImageKind.Logo));
        Assert.Null(await DisplayImageOptimizer.OptimizeAsync(CreatePng(8193,1), "image/png", "wide.png", DisplayImageKind.News));
    }

    [Fact]
    public async Task Cancellation_is_observed()
    {
        using var cts = new CancellationTokenSource();
        cts.Cancel();
        await Assert.ThrowsAnyAsync<OperationCanceledException>(() =>
            DisplayImageOptimizer.OptimizeAsync(CreatePng(64,32), "image/png", "logo.png", DisplayImageKind.Logo, cts.Token));
    }
}
