import menu02 from "./../assets/menu02.png";

function Header() {
  return (
    <nav className=" generalPadding">
      <div className="flex justify-between justify-content items-center bg-[var(--black)] text-[var(--white)] rounded-full px-4 py-2 mt-16 w-full">
        <div>
          <b>CC</b> CODE CRAFTERS
        </div>
        <div>
          <img src={menu02} alt="menu button" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
