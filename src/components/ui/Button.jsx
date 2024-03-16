const Button = ({ bgClr, textClr, children }) => {
  return (
    <button
      style={{ background: bgClr, color: textClr }}
      className=" text-[1.2rem] mobile:text-[1.6rem] text-[white] px-[1.5rem] mobile:px-[3rem] py-[.7rem] mobile:py-[.8rem] rounded-full w-fit "
    >
      {children}
    </button>
  );
};
export default Button;
