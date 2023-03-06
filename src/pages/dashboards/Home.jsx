import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuth, isAuthusername } from "./isAuth";
import { useEffect } from "react";
import { GrNotification } from "react-icons/gr";
import { Dash, Sidenav, Table } from "./components/sidenav";
import { Topnav } from "./components/Topnav";



export default function ModProfile() {
  const navigate = useNavigate();
  const email = isAuth();
  const username = isAuthusername();

  const logout = () => {
    localStorage.removeItem("accessToken", "email");
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken","username");
    navigate("/mod");
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/mod");
    }
  });

  return (
    <>
      <section className="w-full h-screen  flex justify-between">
        <div className="w-56 h-full bg-light-blue-500-100">
          <div className=" bg-slate-300 p-5  w-64 h-full   rounded-l-lg shadow-lg">
            <Sidenav />
          </div>
        </div>
        <div className="w-full h-full bg-blue-gray-100 overflow-x-auto">

          {/* Top nav here  */}
          {/* <div className="-m-5 p-5 flex flex-row justify-center shadow-2xl bg-slate-400 ">
            <div className="w-96">
              <input
                className="w-96 h-10 rounded border-2 placeholder:text-gray-500 placeholder:text-1xl placeholder:pl-5 placeholder:text-lg"
                type="search"
                placeholder="search"
              />
            </div>

            <div className=" flex text-lg">
              <p className="p-2"> Home </p>
              <span className="p-2 text-white">
                {" "}
                <GrNotification color="white" size={30} />{" "}
              </span>
              <p className="p-2"> {username} </p>
              <p className="p-2"> {email} </p>

              <input
                type="submit"
                value="Logout"
                className="p-2"
                onClick={logout}
              />
            </div>
          </div> */}

          <Topnav />

          <div className="text-5xl">
            <h1 className="font-dashboard mt-10 text-black"> Dashboard</h1>
          </div>

          <Dash />

          {/* Resent Hotel Booked  */}
          <div className="text-dashboard mt-10 bg-orange-100 overflow-x-auto">
            <h1 className="text-dashboard text-2xl mb-5">
              {" "}
              List of Recent Room Booked{" "}
            </h1>
            <Table />
          </div>
        </div>
      </section>
    </>
  );
}
