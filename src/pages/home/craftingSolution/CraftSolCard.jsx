export function CraftSolCard({ content, shouldIncludeLine = false }) {
  return (
    <li
      className={` flex flex-col justify-center items-center gap-[2rem] w-[full] mobile:w-[30%] mx-w-[35rem] h- py-[8rem] mobile:py-0 mobile:px-[2rem] border-[var(--lightgrey)] ${
        shouldIncludeLine
          ? "border-b-2 mobile:border-b-0 mobile:border-r-2"
          : ""
      } `}
    >
      <div className="flex flex-col gap-[1.5rem]">
        <figure className=" flex justify-center items-center ">
          <img
            className=" object-contain h-[2.5rem]"
            src={content.image}
            alt="logo"
          />
        </figure>
        <h2 className=" w-full text-[2.4rem]">{content.header}</h2>
      </div>
      <p className=" ">{content.text}</p>
    </li>
  );
}
