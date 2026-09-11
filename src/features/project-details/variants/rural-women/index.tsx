import "./index.css";
import { Section01 } from "./sections/Section01";
import { Section02 } from "./sections/Section02";
import { Section03 } from "./sections/Section03";
import { Section04 } from "./sections/Section04";
import { Section05 } from "./sections/Section05";
import { Section06 } from "./sections/Section06";
import { Section07 } from "./sections/Section07";
import { Section08 } from "./sections/Section08";

export default function MahProjectRuralWomen() {
  return (
    <div dir="ltr" className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
    </div>
  );
}
