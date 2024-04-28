import { Button } from "..";

export function ContactusNViewall() {
  return (
    <div className=" flex justify-center items-center md:hidden gap-[2rem]">
      <Button bgClr={"var(--blue)"} textClr={"var(--white)"}>
        Contact Us
      </Button>
      <Button bgClr={"var(--white)"} textClr={"var(--black)"}>
        View all {">"}
      </Button>
    </div>
  );
}
