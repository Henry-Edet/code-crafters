// import beCool from "./../../../assets/do-cool-things.png";
import { useState } from "react";
import envelope from "./../../assets/Icon Wrapper.png";
// import "./../../../pages/home/footers/footer.css";
import { Button } from "../../components/ui";

const EmailSection = () => {
  return (
    <section className=" bg-transparent text-center text-customWhite flex flex-col gap-[2rem] generalPadding h-[47rem] mobile:h-[40rem] lg:h-[51.9rem] w-full">
      <div className=" footer bg-contain h-full flex flex-col gap-[2rem] justify-end items-center py-[2rem] px-[2rem] rounded-3xl">
        <figure className=" flex items-center justify-center w-full">
          <img src={envelope} alt="notification envelope" className="overlay" />
        </figure>
        <h2 className=" text-[2rem] mobile:text-[4.8rem] ">
          Do cool things with us
        </h2>
        <p className="  text-[1.2rem]">
          Stay in the loop with updates from our team and community. Once a
          month.
        </p>
        <EmailForm />
        <p className=" ">
          You agree to join our newsletter
          <br /> by clicking “Join Us.”
        </p>
      </div>
    </section>
  );
};

export default EmailSection;

// this function holds the email format
const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);

    // Clear the input after submission
    setEmail("");
  };
  return (
    <form
      className=" flex flex-col mobile:flex-row justify-center items-center gap-[2rem] w-[70%] text-grayishBlue "
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className=" h-[4.8rem] w-full mobile:w-[70%] rounded-2xl px-[2rem] py-[1.5rem] text-[1.4rem]"
        type="email"
        id="emailInput"
        placeholder="Enter your email..."
        value={email}
        onChange={handleEmailChange}
        required
      />
      <div>
        <Button bgClr={"var(--blue)"}>Join Us</Button>
      </div>
    </form>
  );
};
