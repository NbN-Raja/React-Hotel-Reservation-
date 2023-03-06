import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";


export default function AppHeader() {
  const [dropdown, setDropDown]=useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    
  }, [isLoggedin])
  

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedin(false);
  };

  return (
    <>
      {/* Navigation Bar Here  */}
      <header className="bg-green body-font p-2  bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <svg
            width="61"
            height="43"
            viewBox="0 0 61 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1547 32.1588L28.5501 10.4861L23.2237 9.62774L17.869 31.3001L23.1547 32.1588ZM34.9784 37.6884L52.1888 20.5729L47.9955 17.7927L30.7852 34.9082L34.9784 37.6884ZM29.5752 34.2892L40.8578 14.155L35.902 12.354L24.6463 32.477L29.5752 34.2892ZM60.8819 28.6498L57.6025 25.1432L36.028 38.5188L39.3074 42.0253L60.8819 28.6498ZM16.5157 31.3122L16.3179 9.21443L10.9455 9.26253L11.1433 31.3603L16.5157 31.3122ZM5.72903 35.7955L5.45253 4.9139L21.6915 4.7685L21.6519 0.348949L-2.82563e-05 0.542809L0.355611 40.2636L22.0076 40.0697L21.968 35.6502L5.72903 35.7955Z"
              fill="#7EF506"
            />
          </svg>

          <Link
            to="/"
            span
            className="ml-3 text-2xl font-white font-inter font text-navname font-bold leading-9"
          >
            Hotel Reservation System
          </Link>

          <nav className="md:ml-auto ml-10 flex flex-wrap items-center leading-7 justify-center text-navname font-semibold text-2xl">
            <Link to="/" className="mr-10 hover:text-gray-900 text-xl ">
              Home
            </Link>
            <Link to="/about" className="mr-10 text-xl relative">
              <span className="peer">About </span>
              <div className="hover:opacity-100 hover:visible peer-hover:opacity-100 peer-hover:visible opacity-0 invisible absolute -left-3 top-[18px] w-60  bg-blue-300 p-4  z-30 text-white   h-32">
                <ul className="">
                <li > <Link to ="/profile">Profile </Link> </li>
                <li > <Link to ="/contact">Setting </Link> </li>
                   <li> Logout</li>
                </ul>

              </div>
            </Link>
            <Link to="/hotels" className="mr-10 text-xl ">
              Hotels
            </Link>
            <Link to="/contact" className="mr-10 text-xl ">
              Contact
            </Link>
            <Menu>

           
            {localStorage.getItem("accessToken")? (
            <>
            
              <MenuHandler>
            <Button variant="gradient" >  {localStorage.getItem("username")}</Button>
           </MenuHandler>
             <MenuList>
               <MenuItem> <Link to="/profile"> Profile</Link></MenuItem>
               <MenuItem> <Link to="/settings"> Settings</Link> </MenuItem>
               <MenuItem onClickCapture={logout}>  Logout</MenuItem>
             </MenuList>
              {/* <Link to="/login" className="mr-10 text-xl relative">
              <span className="peer">About </span>
              <div className="hover:opacity-100 hover:visible peer-hover:opacity-100 peer-hover:visible opacity-0 invisible absolute -left-3 top-[18px] w-60  bg-blue-300 p-4  z-30 text-white   h-32">
                <ul className="">
                <li > <Link to ="/profile">Profile </Link> </li>
                <li > <Link to ="/contact">Setting </Link> </li>
                   <li> Logout</li>
                </ul>

              </div>
            </Link> */}

             </>
             
                     ) : (
                      <Link to="/login">Login</Link>
                      )}
                     
            </Menu>
            {/* <div className="mr-10 text-xl flex relative">
              <span onMouseEnter={()=>setDropDown(true) } onMouseLeave={()=>setDropDown(false)}>Contact</span>
              <div className={`z-30 absolute top-10 h-0 w-40 opacity-0 bg-red-400 text-white transition-all duration-500 ${dropdown && 'h-30 opacity-100 h-30'}`}>
                  <li><a href="">Home</a></li>
                  <li><a href="">Contact Us</a></li>
                  <li><a href="">Register</a></li>
              </div>
            </div> */}
          </nav>
        </div>
      </header>
    </>
  );
}

