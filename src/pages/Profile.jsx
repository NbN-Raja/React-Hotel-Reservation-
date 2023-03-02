import React from "react";
import image from "../images/home.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





export default function Profile() {

  const navigate=useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("accessToken")){
      navigate('/home')
    }
  })

  return (
    <>
      <div className="w-full h-full  rounded-t-lg ">
        <div className="flex flex-row xl:justify-start  p-10">
          <div className=" flex-initial mt-10 h-auto  2xl:mr-20">
            <img className="  w-60 h-48 " src={image}  alt="bg" />

            <button className="p-1 mt-5 ml-5 text-center text-white box-border border-2 "> Edit Profile </button>

          </div>
          <div className=" flex-initial p-10">
            <div className="text-3xl  p-1 xl:text-6xl">
                <p> Nabin Raj Chhetri </p>
            </div>
            <div className="text-sm font-nav p-1">
                <p> Ratnanagar-1 Bakulahar </p>
            </div>
            <div className="mt-5 p-1">
                <p> nabin45@gmail.com</p>
            </div>


          </div>

        </div>


        <div className="flex flex-row ">
        <div className="flex flex-row xl:justify-start p-10">
          <div className=" flex-initial mt-10 h-auto border-r-loginbg  2xl:mr-20">
            

           

          </div>
          <div className=" flex-initial p-10">
            


          </div>

        </div>
        </div>
      </div>
    </>
  );
}
