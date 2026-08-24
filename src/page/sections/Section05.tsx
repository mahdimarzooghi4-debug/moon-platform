import { Section05A } from "./Section05A";
import { Section05B } from "./Section05B";

export function Section05() {
  return (
    <div className="flex pt-[48px] pr-[120px] pb-[80px] pl-[120px] gap-[32px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] relative z-[73]">
      <Section05A />
      <Section05B />
    </div>
  );
}
