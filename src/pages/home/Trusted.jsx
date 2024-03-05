import NEU from "./../../assets/near-east-logo.png";

function Trusted() {
  return (
    <section className=" generalPadding flex flex-col gap-[2rem] text-center py-[4rem]">
      <figure className=" h-[11rem] flex justify-center ">
        <img className=" h-full " src={NEU} alt="near east university" />
      </figure>
      <div>
        <h1>Trusted by Near East University</h1>
        <p className=" text-[var(--purple)]">
          With the backing of Near East University, we champion a mission to
          empower aspiring engineers through collaborative innovation and
          unwavering support
        </p>
      </div>
    </section>
  );
}

export default Trusted;
