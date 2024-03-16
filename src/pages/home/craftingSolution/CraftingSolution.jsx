import "./craftSol.css";

import SEAMLESSIMG from "./../../../assets/colab-Icon.png";
import GROWIMG from "./../../../assets/grow-icon.png";
import EMPOWERIMG from "./../../../assets/empower-icon.png";
import { CraftSolCard } from "./CraftSolCard";

const craftingSolutionsData = [
  {
    image: SEAMLESSIMG,
    header: "Seamless Collaboration",
    text: "Collaborate with passionate individuals in our vibrant software community. Push the boundaries of technology and create impactful solutions.",
  },
  {
    image: GROWIMG,
    header: "Grow Your Network",
    text: "Connect with peers, mentors, and industry experts at workshops and networking events. Learn, grow, and build lasting connections.",
  },
  {
    image: EMPOWERIMG,
    header: "Empowering Diversity",
    text: "Unleash your potential in our inclusive community. Diverse perspectives drive innovation and fuel progress. Make a Difference.",
  },
];

function CraftingSolution() {
  const len = craftingSolutionsData.length - 1;
  // console.log(len);
  return (
    <section className=" CraftSol generalPadding flex flex-col gap-[6rem] text-center py-[4rem] ">
      <div className=" flex flex-col gap-[2rem]">
        <h1 className=" text-[4.8rem] ">
          Crafting solutions, building a better tomorrow with Code Crafters.
        </h1>
        <p className=" ">Level up your skills. Code with confidence</p>
      </div>

      <ul className=" flex flex-col mobile:flex-row mobile:flex-wrap w-full justify-center items-center ring-1 ring-[var(--lightgrey)] rounded-3xl px-[4rem] mobile:px-[2rem] py-[4rem] mobile:py-[8rem]">
        {craftingSolutionsData.map((obj, idx) => (
          <CraftSolCard
            key={idx}
            shouldIncludeLine={idx === len ? false : true}
            content={obj}
          />
        ))}
      </ul>
    </section>
  );
}

export default CraftingSolution;
