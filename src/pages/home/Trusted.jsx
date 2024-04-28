import NEU from "./../../assets/near-east-logo.png";

function Trusted() {
  return (
    <section className=" bg-transparent generalPadding flex flex-col justify-center items-center gap-[2rem] text-center py-[4rem]">
      <figure className=" order-1 mobile:order-2 md:order-1 h-[11rem] flex justify-center ">
        <img className=" h-full " src={NEU} alt="near east university" />
      </figure>
      <div className=" order-2 mobile:order-1 md:order-2 max-w-[80rem]">
        <h1 className=" header">Trusted by Near East University</h1>
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
