import React from "react";
import image from "../images/home.jpg";
import axios from "axios";

import { Link } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import {Search,TopHotels} from "../components/Search";


const baseURL =
  "https://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/hotels";

export default function Home() {
  

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


<Search/>
<TopHotels/>

         

      
    </>
  );
}
