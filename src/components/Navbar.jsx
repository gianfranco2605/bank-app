import { useState } from "react";

import { logo1, close, menu } from "../assets";
import { navLinks } from '../constans';

const Navbar = () => {
  // HAMBURGER STATE
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex items-center justify-center">
      <img src={logo1} alt="navasbank" className="w-[60px] h-[60px]"  />
      <h2 className="m-3 text-gradient">Navas Bank</h2>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* HAMBURGER */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
           src={toggle ? close : menu} 
           alt="menu"
           className="w-[28px] h-[28px] object-contain"
           onClick={() => setToggle((prev) => !prev)}
           />

           <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            {/* MOBILE NAVBAR */}
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
           </ul>

           </div>
      </div>
    </nav>
  )
}

export default Navbar