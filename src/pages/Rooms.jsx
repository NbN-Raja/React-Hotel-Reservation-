import React from "react";
import image from "../images/home.jpg";
import axios from "axios";

import { Link, useParams } from "react-router-dom";

export default function Rooms() {
  const params = useParams();
  const [rooms, setRooms] = React.useState(null);
  const baseURL = `http://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/rooms/getbyid/${params.id}`;

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
          <h1 className="text-5xl font-serif text-dark">
            {" "}
            List of Hotels Rooms Here here
          </h1>
        </div>
      </div>

      {rooms &&
        rooms.map((room) => {
          return (
            <div className="container">
              <Link to={`/rooms/${room._id}`}>
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
                    </h1>
                  </div>
                  <div className="w-96 p-2 mt-8">
                    <h1 className="p-2 text-2xl text-deep-orange-900">
                      {" "}
                      RS: {room.Room_price}{" "}
                    </h1>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      CheckOut
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
}
