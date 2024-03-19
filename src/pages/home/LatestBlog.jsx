import { Button } from "../../components";
import WORKSHOP from "./../../assets/workshop-img.png";
import SEMINAR from "./../../assets/webinar-img.png";
import { ContactusNViewall } from "../../components/ui/ContactusNViewall";

const latestBlogData = [
  { image: WORKSHOP, buttonTXT: "HealthCare", header: "Workshop" },
  { image: SEMINAR, buttonTXT: "Blockchain", header: "Seminar" },
];

function LatestBlogCard({ content }) {
  return (
    <li className=" flex flex-col justify-center gap-[2rem] w-full ring-1 ring-[var(--lightgrey)] px-[2rem] py-[2rem] rounded-3xl">
      <figure className=" w-full h-[22rem] rounded-3xl overflow-hidden">
        <img
          className=" h-full w-full object-cover"
          src={content.image}
          alt="workshop"
        />
      </figure>
      <Button bgClr={"var(--blue)"} textClr={"var(--white)"}>
        {content.buttonTXT}
      </Button>
      <div className=" flex justify-between items-center">
        <h2 className=" text-[2rem]">{content.header}</h2>
        <button className=" text-[1.6rem] border-[var(--black)] border-b-2 pl-[3rem] ">
          Attend
        </button>
      </div>
    </li>
  );
}

function LatestBlog() {
  return (
    <section className=" generalPadding flex flex-col gap-[2rem] text-center py-[4rem] w-full">
      <h1 className=" text-[4.8rem]">From Our Latest Blogs</h1>
      <ul className=" flex md:flex-row flex-col gap-[6rem] justify-center items-center rounded-3xl py-[2rem] px-[2rem]">
        {latestBlogData.map((obj, idx) => {
          return <LatestBlogCard key={idx} content={obj} />;
        })}
      </ul>
      <ContactusNViewall />
    </section>
  );
}

export default LatestBlog;
