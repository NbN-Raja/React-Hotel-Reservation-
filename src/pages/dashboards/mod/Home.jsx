import React from "react";
import { useNavigate } from "react-router-dom";
import {isAuth} from './isAuth'
import { useEffect } from "react";



async function LoginUser(credentials) {
  return fetch('https://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())

 }



export default function Home() {
  const navigate = useNavigate();
  const email=isAuth();

  const logout = () => {
    localStorage.removeItem('accessToken','email');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    navigate("/mod")

  };

  useEffect(()=>{
    if(!localStorage.getItem("accessToken")){
      navigate('/mod')
    }
  })
  
  return (

    
    <>
      <section>
        <div className="container flex flex-row justify-between p-2 h-full w-full">
          <div className=" bg-slate-300 p-5  w-64 h-full   rounded-l-lg shadow-lg">
            <h1 className=" font-dashboard  text-black text-4xl">
              {" "}
              Moderator{" "}
            </h1>
            <ul className="text-black mt-20">
              <li className="p-2 font-dashboard text-2xl shadow-sm "> Dashboard</li>
              <li className="p-2 font-dashboard text-2xl shadow-sm"> Hotels</li>
              <li className="p-2 font-dashboard text-2xl shadow-sm"> Add Hotel</li>
              <li className="p-2 font-dashboard text-2xl shadow-sm"> Get All</li>
            </ul>
          </div>

          <div className="p-5 flex-initial w-full rounded-r-lg bg-dark">
            <div className="-m-5 p-5 flex flex-row justify-between shadow-2xl bg-slate-400 ">
              <div className="w-96">
                <input className="w-96 h-10 rounded border-2 placeholder:text-gray-500 placeholder:text-1xl placeholder:pl-5 placeholder:text-lg" type="search" placeholder="search" />
              </div>

              <div className=" flex text-lg">
                <p className="p-2"> Home </p>
                <p className="p-2"> Bell </p>
                <p className="p-2"> Profile </p>
                <p className="p-2"> {email} </p>
                
                <input  type="submit" value="Logout" className="p-2" onClick={logout} /> 
              
                
              </div>
            </div>

            <div className="text-5xl">
              <h1 className="font-dashboard mt-10 text-black"> Dashboard</h1>
            </div>

            <div className=" grid gap-x-8 gap-y-4 grid-cols-4 mt-10 ">
              <div className="p-2  border-spacing-2 border-l-4 border-black h-16">
                <h1 className="text-1xl font-text"> Total Hotels </h1>
                <p className="text-left text-red-500"> 15</p>
              </div>
              <div className="p-2  border-spacing-2 border-l-4 border-black h-16">
                <h1 className="text-1xl font-text"> Total Rooms </h1>
                <p className="text-left text-red-500"> 20</p>
              </div>
              <div className="p-2  border-spacing-2 border-l-4 border-black h-16">
                <h1 className="text-1xl font-text"> Total Booked </h1>
                <p className="text-left text-red-500"> 5</p>
              </div>
              <div className="p-2  border-spacing-2 border-l-4 border-black h-16">
                <h1 className="text-1xl font-text"> Total Canceled </h1>
                <p className="text-left text-red-500"> 50</p>
              </div>
            </div>

            {/* Resent Hotel Booked  */}
            <div className="text-dashboard mt-10 bg-orange-100">
              <h1 className="text-dashboard text-2xl mb-5"> List of Recent Room Booked </h1>
            
            <table class="table-auto w-full bg-white rounded-t-2xl shadow-2xl">
              <thead>
                <tr className="">
                  <th className="">ID</th>
                  <th className="">Username</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Entry_date </th>
                  <th>Exit_date </th>
                  <th>Room_type</th>
                  <th>Hotel_id</th>
                  <th>price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-white p-5">
                  <td></td>
                  <td className="p-5">Nabin Raj </td>
                  <td className="p-5">Ra Na Pa-1 Bakulahar</td>
                  <td className="p-5">nabin@gmail.com</td>
                  <td className="p-5">9865022904</td>
                  <td className="p-5">2022-12-10</td>
                  <td className="p-5">2022-12-22</td>
                  <td className="p-5">Single</td>
                  <td className="p-5">134654789</td>
                  <td className="p-5">500</td>
                  <td className="p-5">Processing</td>
                </tr>
                <tr className="border border-white p-5">
                  <td></td>
                  <td className="p-5">Nabin Raj </td>
                  <td className="p-5">Ra Na Pa-1 Bakulahar</td>
                  <td className="p-5">nabin@gmail.com</td>
                  <td className="p-5">9865022904</td>
                  <td className="p-5">2022-12-10</td>
                  <td className="p-5">2022-12-22</td>
                  <td className="p-5">Single</td>
                  <td className="p-5">134654789</td>
                  <td className="p-5">500</td>
                  <td className="p-5">Processing</td>
                </tr>
                <tr className="border border-white p-5">
                  <td></td>
                  <td className="p-5">Nabin Raj </td>
                  <td className="p-5">Ra Na Pa-1 Bakulahar</td>
                  <td className="p-5">nabin@gmail.com</td>
                  <td className="p-5">9865022904</td>
                  <td className="p-5">2022-12-10</td>
                  <td className="p-5">2022-12-22</td>
                  <td className="p-5">Single</td>
                  <td className="p-5">134654789</td>
                  <td className="p-5">500</td>
                  <td className="p-5">Processing</td>
                </tr>
                <tr className="border border-white p-5">
                  <td></td>
                  <td className="p-5">Nabin Raj </td>
                  <td className="p-5">Ra Na Pa-1 Bakulahar</td>
                  <td className="p-5">nabin@gmail.com</td>
                  <td className="p-5">9865022904</td>
                  <td className="p-5">2022-12-10</td>
                  <td className="p-5">2022-12-22</td>
                  <td className="p-5">Single</td>
                  <td className="p-5">134654789</td>
                  <td className="p-5">500</td>
                  <td className="p-5">Processing</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
