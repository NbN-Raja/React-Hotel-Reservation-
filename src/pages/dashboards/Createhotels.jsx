import axios from "axios";
import { GrNotification } from "react-icons/gr";
import { Dash, Sidenav, Table } from "./components/sidenav";
import React, { useEffect, useState } from "react";
// import image from "../images/home.jpg";

import { useParams } from "react-router-dom";
import { Topnav } from "./components/Topnav";

import PropTypes from "prop-types";
const id = localStorage.getItem("id");
console.log(id);


  



export default function Createhotels() {
  const [setHotels] = React.useState(null);
  const params = useParams();

  const [Hotel_name, setHotel_name] = useState("");
  const [Hotel_description, setHotel_description] = useState("");
  const [Hotel_address, setHotel_address] = useState("");
  const [Hotel_phone, setHotel_phone] = useState("");
  const [Hotel_image, setHotel_image] = useState("");
  const [Hotel_email, setHotel_email] = useState("");


  async function CreateUser(credentials) {
    return fetch(`https://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/hotels/create/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
     
      body: JSON.stringify({
        Hotel_name,
    Hotel_description,
    Hotel_address,
    Hotel_phone,
    Hotel_image,
    Hotel_email,
      })
    })
      .then(data => data.json())
  
   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const session = await CreateUser({
      Hotel_name: Hotel_name,
      Hotel_description: Hotel_description,
      Hotel_address: Hotel_address,
      Hotel_phone: Hotel_phone,
      Hotel_image: Hotel_image,
      Hotel_email: Hotel_email,
    });
  };

  

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken", "id");
  //   // Do something with the access token
  //   params.id = accessToken;
  //   console.log(accessToken);
  // }, []);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setHotels(response.data);
  //   });
  // }, []);

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
            <h1 className="font-dashboard mt-10 text-black"> Create Hotels</h1>
          </div>

          {/* Create Hotels */}
          <section>
            <div className="container p-4">
              <div className="header">
                <p> Create Your Hotels</p>
                <form action="" onSubmit={handleSubmit}>
                  <div className="p-4">
                    <label> Hotel Name </label>
                    <input
                      type="text" onChange={e => setHotel_name(e.target.value)}
                      name="hotelname"
                      placeholder="Name Your Hotels"
                    />
                  </div>
                  <div className="p-4">
                    <label> Hotel Description </label>
                    <textarea
                      name="hotel_description" onChange={e => setHotel_description(e.target.value)}
                      id=""
                      cols="15"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="p-4">
                    <label> Hotel Address </label>
                    <input
                      type="text" onChange={e => setHotel_address(e.target.value)}
                      name="Hotel_address"
                      placeholder="address Your Hotels"
                    />
                  </div>
                  <div className="p-4">
                    <label> Hotel Email </label>
                    <input
                      type="email" onChange={e => setHotel_email(e.target.value)}
                      name="hotel_email"
                      placeholder="email Your Hotels"
                    />
                  </div>
                  <div className="p-4">
                    <label> Hotel Phone </label>
                    <input
                      type="phone" onChange={e => setHotel_phone(e.target.value)}
                      name="hotel_phone"
                      placeholder="Phone Your Hotels"
                    />
                  </div>
                  {/* <div className="p-4">
                    <label> Hotel Image </label>
                    <input
                      type="file" onChange={e => setHotel_image(e.target.value)}
                      name="hotel_image"
                      placeholder="Name Your Hotels"
                    />
                  </div> */}
                  <div className="p-4">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}


