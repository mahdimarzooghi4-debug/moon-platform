import React from "react";
import "./index.css";
import { Article172Part01 } from "./parts/Article172Part01";
import { Article172Part02 } from "./parts/Article172Part02";
import { Article172Part03 } from "./parts/Article172Part03";
import { Article172Part04 } from "./parts/Article172Part04";
import { Article172Part05 } from "./parts/Article172Part05";
import { Article172Part06 } from "./parts/Article172Part06";
import { Article172Part07 } from "./parts/Article172Part07";

export default function MahArticle172Guide() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <Article172Part01 />
      <Article172Part02 />
      <Article172Part03 />
      <Article172Part04 />
      <Article172Part05 />
      <Article172Part06 />
      <Article172Part07 />
    </div>
  );
}
