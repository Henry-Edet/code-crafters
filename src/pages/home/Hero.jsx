import * as Components from "./../../components/index";
import HEROIMG from "./../../assets/Hero-img.png";

function Hero() {
  return (
    <section className=" text-center flex flex-col gap-[2rem] generalPadding ring-1 py-[3rem]">
      <h1 className=" ">Learn, code, connect. Become a Code Crafter.</h1>
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

      {/* membership & active members with number of projects below */}

      <div className="ring-1 ring-[var(--lightgrey)] rounded-2xl text-[var(--lightBlue)] ">
        <h2 className=" text-[2rem]">50</h2>
        <p className=" text-[1.6rem]">New members per month</p>
        <hr className="w-[50%] m-auto" />
        <h2 className=" text-[2rem]">42</h2>
        <p className=" text-[1.6rem]">Active users</p>
        <hr className="w-[50%] m-auto" />
        <h2 className=" text-[2rem]">5</h2>
        <p className=" text-[1.6rem]">Projects</p>
      </div>
    </section>
  );
}

export default Hero;
