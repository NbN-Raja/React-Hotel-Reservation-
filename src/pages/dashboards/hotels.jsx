import axios from "axios";
import { GrNotification } from "react-icons/gr";
import { Dash, Sidenav, Table } from "./components/sidenav";
import React, { useEffect, useState } from "react";
// import image from "../images/home.jpg";
import image from "../../images/home.jpg";
import { Link, Navigate, useParams } from "react-router-dom";
import { Topnav } from "./components/Topnav";



export default function ModHotels() {
  const [hotels, setHotels] = React.useState(null);
  const [search, setSearch] = useState('');
  const params = useParams();

  // const id = localStorage.getItem("id");
  // console.log(id);

  // const baseURL = `http://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/hotels/mod/${id}`;
  const id = localStorage.getItem("id");
console.log(id);

let baseURL = "";
if (id) {
  baseURL = `http://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/hotels/mod/${id}`;
} else {
  console.error("ID not found in localStorage");
}


  useEffect(() => {
    
    // Do something with the access token
     
     
  }, []);
  

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setHotels(response.data);
    });
  }, []);



  return (
    <>

<section className="w-full h-screen  flex justify-between">
        <div className="w-56 h-full bg-light-blue-500-100">
          <div className=" bg-slate-300 p-5  w-64 h-full   rounded-l-lg shadow-lg">
            <Sidenav />
          </div>
        </div>
        <div className="w-full h-full bg-blue-gray-100 overflow-x-auto">
          
          <Topnav />

          <div className="text-5xl">
            <h1 className="font-dashboard mt-10 text-black"> Dashboard</h1>
          </div>

         

          {/* Resent Hotel Booked  */}
          <div className="text-dashboard mt-10 bg-orange-100 overflow-x-auto">
            <h1 className="text-dashboard text-2xl mb-5">
              {" "}
              List of Hotels{" "}
            </h1>
            {hotels&&
          hotels.map((hotel) => {
            return (
              <div className="container  border mt-5 bg-gray-300 flex flex-col  rounded bg-blue-gray-50 shadow-lg ">
                <Link to={`/moderator/rooms/${hotel._id}`}>
                  <div className=" mb-10">
                    <div className=" items-center flex">
                      <img className="mr-24 w-96" src={image} alt="image" />
                      <div className="w-[300px]">
                        <h1 className=" bg-blue-gray-200 inline-block w-full p-1 mb-3 text-white ">
                          {" "}
                          APARTMENT{" "}
                        </h1>
                        <p className=" text-2xl font-dashboard tracking-wide">
                          {" "}
                          {hotel.Hotel_name}
                        </p>
                        <h1 className="p-1 text-xs font-semibold  ">
                          {" "}
                          {hotel.Hotel_description}{" "}
                        </h1>
                        <h1 className="p-1 text-xs   ">
                          {" "}
                          {hotel.Hotel_address}{" "}
                        </h1>
                        <div className="flex flex-1">
                          <h1 className="p-1 text-sm"> {hotel.Hotel_email} </h1>
                          <h1 className="p-1 text-sm"> {hotel.Hotel_phone} </h1>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                </Link>
                <div key={hotel.id} className="mr-50 w-40 mb-10 ml-[480px] bg-blue-gray-400">
                        <button className="p-2 hover:bg-white ">  <Link to={`/moderator/update/${hotel._id}`}>Update </Link> </button>
                        <button className="p-2 hover:bg-white"> Delete </button>
                      </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>
    </>
  )
}