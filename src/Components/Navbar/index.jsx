import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBox, faChevronDown, faComment, faEnvelope, faHome, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import arise from "../../assets/arise.png";
import { Link } from "react-router-dom";
import "./index.css";
import "animate.css";
import { useState } from "react";

const Navbar = () => {

  const [navbarTable, setNavbarTable] = useState(false);
  
  const toggleNavbarTable = () => {
    setNavbarTable(!navbarTable);
  };
  
  const animationClass = navbarTable ? "animate__fadeIn" : "animate__fadeOut";
  
  return (
    <div className="navbar-container">
      <div className="contact-details-stripe-container h-12 bg-slate-900 w-full fixed z-10">
        <div className="contact-details-stripe flex gap-8 items-center justify-center h-full">
          <p className="text-white text-sm font-poppins">
            <FontAwesomeIcon icon={faPhone} className="mr-3" />
            9910061322
          </p>
          <p className="text-white text-sm font-poppins">
            <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
            info@innovance.co.in
          </p>
        </div>
      </div>
      <div className="navbar h-24 w-full flex justify-between bg-gray-100 fixed z-10 top-12">
        <div className="logo-container flex items-center h-full ml-6 md:ml-10 lg:ml-16">
          <Link to="/">
            <img src={arise} alt="logo" className="h-18" />
          </Link>
        </div>
        <div className="nav-items hidden sm:block mr-4 md:mr-20 lg:mr-28">
          <ul className="flex items-center gap-8 justify-center h-full">
            <li className="nav-item">
              <Link to="/" className="nav-link hover:text-slate-700">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link hover:text-slate-700">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item relative group our-products-dropdown">
              <div className="nav-link flex items-center hover:text-slate-700 cursor-pointer">
                OUR PRODUCTS <FontAwesomeIcon icon={faChevronDown} className="text-xs"/>
              </div>
              <div className="absolute w-64 hidden group-hover:block animate__animated animate__fadeIn bg-gray-100 z-10 rounded">
                <Link to="/agricultural-pumps" className="dropdown-item block hover:text-slate-800 mt-11 border-b border-gray-400 mb-2">AGRICULTURAL PUMP</Link>
                <Link to="/industrial-pumps" className="dropdown-item block hover:text-slate-800 border-b border-gray-400 mb-2">INDUSTRIAL PUMP</Link>
                <Link to="/residential-pumps" className="dropdown-item block hover:text-slate-800 border-b border-gray-400">RESIDENTIAL PUMP</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link hover:text-slate-700">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden block">  
          <button className="h-full mr-6" onClick={toggleNavbarTable}>
            <FontAwesomeIcon icon={faBars} className="text-2xl text-slate-900"/>
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-slate-900" />
      {navbarTable && (
        <div className={`sm:hidden block animate__animated ${animationClass} mt-36 mb-[-144px]`}>
          <ul className="flex flex-col items-center gap-3 justify-center h-full">
            <li className="nav-item">
              <Link to="/" className="nav-link flex items-baseline gap-1 hover:text-slate-700 mt-4">
              <FontAwesomeIcon icon={faHome} className="text-xs"/> HOME
              </Link>
            </li>
            <hr className="bg-gray-100 w-full" />
            <li className="nav-item">
              <Link to="/about" className="nav-link flex items-baseline gap-1 hover:text-slate-700">
              <FontAwesomeIcon icon={faUser} className="text-xs"/> ABOUT US
              </Link>
            </li>
            <hr className="bg-gray-100 w-full" />
            <li className="nav-item">
              <Link to="/products" className="nav-link flex items-baseline gap-1 hover:text-slate-700">
              <FontAwesomeIcon icon={faBox} className="text-xs"/> OUR PRODUCTS
              </Link>
            </li>
            <hr className="bg-gray-100 w-full" />
            <li className="nav-item">
              <Link to="/contact" className="nav-link flex items-baseline gap-1 hover:text-slate-700">
              <FontAwesomeIcon icon={faComment} className="text-xs"/> CONTACT US
              </Link>
            </li>
            <hr className="bg-gray-100 w-full" />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;