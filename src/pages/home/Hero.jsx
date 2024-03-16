import * as Components from "./../../components/index";
import HEROIMG from "./../../assets/sec-hero-img.png";

const ourStats = [
  { number: "50", text: "New members per month" },
  { number: "42", text: "Active Members" },
  { number: "5", text: "Projects" },
];

function Hero() {
  return (
    <section className=" bg-transparent text-center flex flex-col justify-center items-center gap-[2rem] mobile:gap-[3rem] generalPadding py-[3rem] max-w-[100rem] ">
      <h1 className=" ">Learn, code, connect. Become a Code Crafter.</h1>
      <div className=" flex flex-col gap-[.5rem] mobile:gap-[1.5rem]">
        <p className=" text-[1.2rem] mobile:text-[1.6rem]">
          Unlock your potential, unlock the future. Code with us.
        </p>

        <div className=" flex justify-center items-center gap-[3rem] w-full ">
          <Components.Button bgClr={"var(--black"} textClr={"white"}>
            Signup
          </Components.Button>
          <Components.Button bgClr={"var(--blue)"} textClr={"white"}>
            Contact Us
          </Components.Button>
        </div>
      </div>
      <figure className=" h-[24.5rem] mobile:h-[26rem] sm:h-[42rem] w-full overflow-hidden rounded-3xl mobile:rounded-[30rem] mt-0 mobile:mt-[2rem] ">
        <img
          className=" object-cover h-full w-full ring-1 ring-red-800"
          src={HEROIMG}
          alt="hero-img"
        />
      </figure>

      {/* membership & active members with number of projects below */}

      <ul className=" flex flex-col gap-[5rem] justify-normal mobile:justify-between mobile:hidden md:flex md:flex-row ring-1 ring-[var(--lightgrey)] bg-[var(--white)] px-[5rem] py-[2rem] rounded-2xl text-[var(--lightBlue)]  ">
        {ourStats.map((obj, idx) => (
          <li key={idx} className=" flex flex-col h-fit ">
            <h1 className=" text-[4.8rem]">{obj.number}</h1>
            <p className=" text-[1.6rem] mobile:text-[2.4rem]">{obj.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Hero;
