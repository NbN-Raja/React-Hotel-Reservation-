import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Sidenav } from "./components/sidenav";
import { Topnav } from "./components/Topnav";
import image from "../../images/home.jpg";

export default function Modrooms(){
    const params = useParams();
    const [rooms, setRooms] = React.useState(null);
    const baseURL = `http://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/rooms/getbyid/${params.id}`;
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setRooms(response.data);
        console.log(response.data);
      });
    }, );

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
          <div className="text-dashboard mt-10  overflow-x-auto">
            <h1 className="text-dashboard text-2xl mb-5">
              {" "}
              List of Hotels Rooms{" "}
            </h1>
            {rooms &&
        rooms.map((room) => {
          return (
            <div className="container">
                <div className="flex border   mb-10 shadow-lg ml-10">
                  
                  <div key={room.id} className="mr-40">
                   
                    <h1 className=" text-4xl font-dashboard tracking-wide uppercase">
                      {" "}
                      {room.Room_type}
                    </h1>

                    <div className="p-2 text-sm w-auto">
                      Features:
                      {" "}
                      {room.Room_amenities}{" "}
                    </div>
                    <div className="p-2 text-sm w-auto">
                      Capacity:
                      {" "}
                      {room.Room_capacity}{" "}
                    </div>
                    <div className="p-2 text-sm w-auto">
                      AC:
                      {" "}
                      {room.Room_ac}{" "}
                    </div>
                    <div className="p-2 text-sm w-auto">
                      Food:
                      {" "}
                      {room.Room_foodservices}{" "}
                    </div>
                    <h1 className="p-2 text-2xl text-deep-orange-900">
                      {" "}
                      RS: {room.Room_price}{" "}
                    </h1>
                  </div>
                  <div className=" w-96 mr-10 bg-hero-pattern	">
                    <img className="" src={Image} alt="image" />
                  </div>
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