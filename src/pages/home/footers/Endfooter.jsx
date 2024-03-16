// import beCool from "./../../../assets/do-cool-things.png";
import { useState } from "react";
import envelope from "./../../../assets/Icon Wrapper.png";
import "./../../../pages/home/footers/footer.css";
import { Button } from "../../../components";

const EmailSection = () => {
  return (
    <section className=" bg-transparent text-center text-[var(--white)] flex flex-col gap-[2rem] generalPadding h-[70vh]">
      <div className=" footer h-full flex flex-col gap-[2rem] justify-end items-center py-[2rem] px-[2rem] rounded-3xl">
        <figure className=" flex items-center justify-center w-full">
          <img src={envelope} alt="notification envelope" className="overlay" />
        </figure>
        <h2 className=" text-[2rem]">Do cool things with us</h2>
        <p className=" text-[1.2rem]">
          Stay in the loop with updates from our team and community. Once a
          month.
        </p>
        <EmailForm />
        <p>
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
    if (email.trim() === " ") {
      console.error("Email cannot be empty.");
      // You can display an error message or take other actions for invalid input
    } else {
      console.log("Email submitted:", email);

      // Clear the input after submission
      setEmail("");
    }
  };
  return (
    <form
      className=" flex flex-col justify-center items-center gap-[2rem] w-full"
      onSubmit={() => handleSubmit()}
    >
      <input
        className=" h-[4.8rem] w-full rounded-2xl px-[2rem] py-[1.5rem] text-[1.4rem]"
        type="email"
        id="emailInput"
        placeholder="Enter your email..."
        value={email}
        onChange={handleEmailChange}
        required
      />
      <Button bgClr={"var(--blue)"}>Join Us</Button>
    </form>
  );
};
