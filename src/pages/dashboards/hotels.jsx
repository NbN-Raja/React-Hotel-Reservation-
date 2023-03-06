import axios from "axios";
import { GrNotification } from "react-icons/gr";
import { Dash, Sidenav, Table } from "./components/sidenav";
import React, { useEffect } from "react";
// import image from "../images/home.jpg";

import { Link, Navigate, useParams } from "react-router-dom";
import { Topnav } from "./components/Topnav";



export default function ModHotels() {
  const [hotels, setHotels] = React.useState(null);
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
            {hotels &&
          hotels.map((hotel) => {
            return (
              <div className="container bg-gray-300 rounded bg-blue-gray-50 shadow-lg ">
                <Link to={`/moderator/rooms/${hotel._id}`}>
                  <div className="flex flex-col justify-center mb-10">
                    <div className="w-96 items-center flex">
                      {/* <img className="mr-24" src={image} alt="image" /> */}
                      <div className="w-96">
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
                      <div key={hotel.id} className="mr-50 w-full"></div>
                    </div>
                    {/* <div className="w-96 p-2 mt-8">
                        
                      </div> */}
                  </div>
                </Link>
              </div>
            );
          })}
          </div>
        </div>
      </section>
    </>
  )
}