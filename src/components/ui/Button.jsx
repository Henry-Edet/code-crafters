const Button = ({ bgClr, textClr, children }) => {
  return (
    <button
      style={{ background: bgClr, color: textClr }}
      className=" text-[1.5rem] text-[white] ring-1 px-[1.5rem] py-[.7rem] rounded-full w-fit "
    >
      {children}
    </button>
  );
};
export default Button;
