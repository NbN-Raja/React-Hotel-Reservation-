import React from "react";
import image from "../images/home.jpg";
import axios from "axios";

import { Link } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const baseURL =
  "http://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/hotels";

export default function Home() {
  const [hotels, setHotels] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setHotels(response.data);
    });
  }, []);

  return (
    <>
    


<div class="">
  <div class="w-full  h-screen shadow-2xl overflow-hidden relative">
    <img className="absolute inset-0 h-full w-full object-cover"  src={image} alt="img" />
    <div class="absolute inset-0 bg-gray bg-opacity-60"></div>
    <div class="flex h-full items-center justify-center relative">
        <h1 className="text-5xl font-base text-navname tracking-wider"> TIMES FOR  <span className="text-loginbg">RELAXING </span> YOUR MIND</h1>
    </div>
  </div>
</div>


         

      <div className="container mx-10 p-10 w-auto bg-slate-100 ">
        <div className="text-center pb-10">
          <h1 className="text-5xl font-serif text-dark">
            {" "}
            List of Hotels here
          </h1>
        </div>

        {hotels &&
          hotels.map((hotel) => {
            return (
              <div className="container bg-gray-300 rounded bg-blue-gray-50 shadow-lg ">
              <Link to={`/rooms/${hotel._id}`}>
                <div className="flex flex-col justify-center mb-10">
                  <div className="w-96 items-center flex">
                    <img className="mr-24" src={image} alt="image"  />
                    <div className="w-96">
                        <h1 className=" bg-blue-gray-200 inline-block w-full p-1 mb-3 text-white "> APARTMENT </h1>
                        <p className=" text-2xl font-dashboard tracking-wide"> {hotel.Hotel_name}</p>
                        <h1 className="p-1 text-xs font-semibold  "> {hotel.Hotel_description} </h1>
                        <h1 className="p-1 text-xs   "> {hotel.Hotel_address} </h1>
                        <div className="flex flex-1">
                        <h1 className="p-1 text-sm"> {hotel.Hotel_email} </h1>
                        <h1 className="p-1 text-sm"> {hotel.Hotel_phone} </h1>
                    </div>
                    </div>
                    <div key={hotel.id} className="mr-50 w-full"> 
                   
                        
                        </div>
                        
                     </div>
                      {/* <div className="w-96 p-2 mt-8">
                        
                      </div> */}
                </div>
              </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
