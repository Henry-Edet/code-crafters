const Button = ({ bgClr, textClr, children }) => {
  return (
    <button
      style={{ background: bgClr, color: textClr }}
      className=" text-[1.5rem] text-[white] px-[1.5rem] py-[.7rem] rounded-full "
    >
      {children}
    </button>
  );
};
export default Button;
