import React from "react";
import image from "../images/home.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { isAuth, isAuthid, isAuthusername } from "../components/auth";
import axios from "axios";



export default function Profile() {

  


  const email = isAuth();
  const username = isAuthusername();
  const id = isAuthid();
  const firstname= localStorage.getItem("firstname")
  const lastname= localStorage.getItem("lastname")
  const address= localStorage.getItem("address")
  const phone= localStorage.getItem("phone")
  const gender= localStorage.getItem("gender")
  const navigate=useNavigate();

 

  useEffect(()=>{
    if(!localStorage.getItem("accessToken")){
      navigate('/home')
    }
  })

  return (
    <>
     <h1> Your Profile Details</h1>
      <div className="w-full h-full  rounded-t-lg ">
       
        <div className="flex flex-row xl:justify-start  p-10">
       
          <div className=" flex-initial mt-10 h-auto  2xl:mr-20">
            <img className="  w-60 h-48 " src={image}  alt="bg" />

            

          </div>
          <div className=" flex-initial p-10">
            <div className="text-3xl  p-1 xl:text-6xl">
            {firstname}  {lastname}
            </div>
            <div className="text-sm font-nav p-1">

            <p> {email}</p>
            </div>
            <div className="mt-5 p-1">
                <h1> Address: <span className="text-sm font-nav"> {address} </span> </h1>
                <h1> Phone No: <span className="text-sm font-nav"> {phone} </span> </h1>
                <h1> Username: <span className="text-sm font-nav"> {username} </span> </h1>
                <h1> Gender: <span className="text-sm font-nav"> {gender} </span> </h1>
               
                
                
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
