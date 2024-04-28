import menu02 from "./../../assets/menu02.png";
import * as Components from "./index";

function Header() {
  return (
    <nav className=" generalPadding w-full ">
      <div className="flex justify-between justify-content items-center bg-[var(--black)] text-[var(--white)] rounded-full px-[2rem] py-4 mt-16 w-full">
        <div className="text-[1rem] mobile:text-[1.5rem] sm:text-[1.9rem] lg:text-[2.1rem]">
          <b className="">CC</b> CODE CRAFTERS
        </div>
        <div>
          <ul className=" md:flex hidden items-center gap-[2rem] text-[1.8rem] mr-[2.5rem]">
            <li>About Us</li>
            <li>Skills</li>
            <li>Newsletter</li>
            <li>
              <Components.Button bgClr={"var(--blue)"} textClr={"white"}>
                Contact Us
              </Components.Button>
            </li>
          </ul>
          <figure className=" block md:hidden ">
            <img src={menu02} alt="menu button" />
          </figure>
        </div>
      </div>
    </nav>
  );
}

export default Header;
