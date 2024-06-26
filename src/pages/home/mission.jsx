import * as Components from "../../components/ui/index";
import empower from "./../../assets/empower-img.png";

function Mission() {
  return (
    <section className=" text-center flex flex-col gap-[2rem] generalPadding py-[4rem]">
      <div className=" flex flex-col md:flex-row items-center py-[3rem] px-[2rem] ring-1 ring-[var(--lightgrey)] rounded-2xl ">
        <div className=" flex flex-col gap-[3rem] px-[2rem] h-full w-full md:w-[50%] ">
          <div className=" flex justify-center items-center text-[var(--lightBlue)] px-[1.5rem] rounded-full bg-silver w-[17rem] h-[2.5rem]">
            <p className=" text-[1.2rem]">Our Mission Statement</p>
          </div>
          <figure className=" block mobile:hidden w-full h-[20.7rem]">
            <img
              src={empower}
              alt="people holding hands"
              className="w-full h-full object-cover rounded-3xl"
            />
          </figure>
          <h2 className="text-[2rem] mobile:text-[3.6rem] text-left">
            Empowering the world through transformative technology solutions
          </h2>
          <p className=" text-[var(--someshadeofgrey)] text-left">
            Our mission is to empower aspiring engineers through collaboration,
            innovation, and support. We strive to create a nurturing environment
            where every member can thrive and make a positive impact. With a
            commitment to mentorship, skill-building, and diversity, we aim to
            cultivate the next generation of tech leaders. Through our
            collective efforts, we aspire to leave a lasting legacy of
            innovation and excellence in the software engineering field.
            Together, we are driven by a shared vision of shaping a brighter
            future through technology.
          </p>
          <div className=" flex justify-start items-center gap-[2rem]">
            <a className=" text-[1.5rem]" href="https://github.com/Henry-Edet">
              Signup
            </a>
            <Components.Button bgClr={"var(--blue)"} textClr={"var(--white)"}>
              Contact Us
            </Components.Button>
          </div>
        </div>
        <figure className=" hidden md:flex h-full w-[50%] ">
          <img src={empower} className=" h-full w-full" alt="empower" />
        </figure>
      </div>
    </section>
  );
}

export default Mission;
