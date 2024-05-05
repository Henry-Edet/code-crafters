import React from "react";
import Hero from "./Hero";
import { CraftSol, EmailSection, LatestBlog, Mission, Trusted } from ".";
// import Hero from "./Hero";
// import { CraftSol, EmailSection, LatestBlog, Mission, Trusted } from ".";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center gap-[2rem] mobile:gap-[4rem] md:gap-[6rem]">
      <Hero />
      <CraftSol />
      <Mission />
      <Trusted />
      <LatestBlog />
      <EmailSection />
    </div>
  );
}
