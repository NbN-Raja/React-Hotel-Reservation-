import React, { useState } from "react";
import image from "../images/home.jpg";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import { Book } from "../components/book";

async function ReserverHOtels(credentials) {
  return fetch(
    "https://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/hotelres/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  ).then((data) => data.json());
}

export default function Checkout() {
  const params = useParams();
  const [rooms, setRooms] = React.useState(null);
  const baseURL = `http://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/rooms/checkout/${params.id}`;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, seFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [entrydate, setEntrydate] = useState("");
  const [exitdate, setExitdate] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [hotelid, setHotelid] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const session = await ReserverHOtels({
      username,
      password,
      firstname,
      lastname,
      entrydate,
      exitdate,
      phone,
      price,
      hotelid,
    });
  };
  // localhstorage get itesms

  const lusername = localStorage.getItem("username");
  const lfirstname = localStorage.getItem("firstname");
  const llastname = localStorage.getItem("lastname");
  const lemail = localStorage.getItem("email");
  const lphone = localStorage.getItem("Phone");

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRooms(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <section className=""></section>
      <div className="container">
        <div className="bg-hero-pattern"></div>
        <div className="text-center pb-10">
          <h1 className="text-5xl font-serif text-dark"> Check Out</h1>
        </div>
      </div>

      {rooms &&
        rooms.map((room) => {
          return (
            <div className="container">
              
                <div className="container flex flex-row justify-center mb-10 shadow-lg ml-10">
                  <div className=" w-96 mr-10">
                    <img className="" src={image} alt="image" />
                  </div>
                  <div key={room.id} className="mr-40">
                    <h1 className=" bg-blue-gray-300 mt-10 w-full p-1 mb-3 text-white ">
                      {" "}
                      APARTMENT{" "}
                    </h1>
                    <h1 className=" text-4xl font-dashboard tracking-wide uppercase">
                      {" "}
                      {room.Room_type}
                    </h1>

                    <h1 className="p-2 text-sm w-auto">
                      {" "}
                      {room.Room_amenities}{" "}
                      <h1 className="p-2 text-2xl text-deep-orange-900">
                        {" "}
                        RS: {room.Room_price}{" "}
                      </h1>
                    </h1>
                  </div>
                  <div className="w-96 p-4 mt-8">
                    <form action="" onSubmit={handleSubmit}>
                      <div className="">
                        Username:{" "}
                        <input type="text" onChange={e => setUsername(e.target.value)} value={lusername} />
                      </div>
                      <div className="">
                        firstname{" "}
                        <input
                          type="text"
                          onChange={e => seFirstname(e.target.value)}
                          value={lfirstname}
                        />
                      </div>
                      <div className="">
                        lastname{" "}
                        <input type="hidden"  onChange={e => setLastname(e.target.value)} value={llastname} />
                      </div>
                      <div className="">
                        email <input type="text" onChange={e => setEmail(e.target.value)} value={lemail} />
                      </div>
                      <div className="">
                        phone <input type="text"onChange={e => setPhone(e.target.value)} value={lphone} />
                      </div>
                      <div className="">
                        Entry Date: <input type="date" onChange={e => setEntrydate(e.target.value)} />
                      </div>
                      <div className="">
                        Exit Date: <input type="date" onChange={e => setExitdate(e.target.value)}/>
                      </div>

                      <div className="">
                        Hotel_id{" "}
                        <input type="text" onChange={e => setHotelid(e.target.value)} value={room.hotel_id} />
                      </div>
                      <div className="">
                        Room_price{" "}
                        <input
                          type="text"
                          onChange={e => setPrice(e.target.value)}
                          value={room.Room_price}
                        />
                      </div>
                      {/* <button class=" mt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Pay Now
                      </button> */}
                      <button
                     
                        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      >
                        Book Room
                      </button>
                    </form>

                    <div className=""></div>
                  </div>
                </div>
            
            </div>
          );
        })}
    </>
  );
}
