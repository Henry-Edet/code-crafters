import menu02 from './../assets/menu02.png';

function Header() {
  return <nav className=" ring-1 bg-black text-white rounded-full px-2 py-2 mt-16">
      <div className='flex justify-between justify-content items-center'>
        <div>
          <b>CC</b>  CODE CRAFTERS
        </div>
          <div>
            <img src={menu02} alt="menu button" />
          </div>
      </div>
    </nav>;
}

export default Header;
