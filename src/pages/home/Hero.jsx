import * as Components from "./../../components/index";
import HEROIMG from "./../../assets/Hero-img.png";

function Hero() {
  return (
    <section className=" text-center flex flex-col gap-[2rem] generalPadding">
      <h1 className=" generalPadding ">
        Learn, code, connect. Become a Code Crafter.
      </h1>
      <div className=" flex flex-col gap-[.5rem]">
        <p className=" text-[1.5rem]">
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
      <figure className=" h-[24.5rem] overflow-hidden rounded-3xl ">
        <img
          className=" object-cover h-full w-full ring-1 ring-red-800"
          src={HEROIMG}
          alt="hero-img"
        />
      </figure>
    </section>
  );
}

export default Hero;
