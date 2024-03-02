import HEROIMG from "./../assets/Hero-img.png";

const Button = ({ bgClr, textClr, children }) => {
  return (
    <button
      style={{ background: bgClr, color: textClr }}
      className=" text-[1.5rem] text-[white] ring-1 px-[1.5rem] py-[.7rem] rounded-full "
    >
      {children}
    </button>
  );
};

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
          <Button bgClr={"var(--black"} textClr={"white"}>
            Signup
          </Button>
          <Button bgClr={"var(--blue)"} textClr={"white"}>
            Contact Us
          </Button>
        </div>
      </div>
      <figure className=" h-[24.5rem] overflow-hidden rounded-3xl ">
        <img
          className=" object-cover h-full w-full"
          src={HEROIMG}
          alt="hero-img"
        />
      </figure>
    </section>
  );
}

export default Hero;
