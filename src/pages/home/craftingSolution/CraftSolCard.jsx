export function CraftSolCard({ content, shouldIncludeLine = false }) {
  return (
    <li
      className={` flex flex-col justify-center items-center gap-[2rem] w-[full] mobile:w-[20rem] py-[8rem] border-[var(--lightgrey)] ${
        shouldIncludeLine && "border-b-2"
      } `}
    >
      <figure className=" flex flex-col gap-[1.5rem]">
        <img
          className=" object-contain h-[2.5rem]"
          src={content.image}
          alt="logo"
        />
        <h1>{content.header}</h1>
      </figure>
      <p className=" ">{content.text}</p>
    </li>
  );
}
