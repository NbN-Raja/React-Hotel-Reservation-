import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import About from "./pages/About";

import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Mod from "./pages/Mod";
import Profile from "./pages/Profile";
// import ModProfile from "./pages/dashboards/Home";



import  "./index.css"
import ModProfile from "./pages/dashboards/Home";
import ModHotels from "./pages/dashboards/hotels";
import Createhotels from "./pages/dashboards/Createhotels";
import Hotels from "./pages/Hotels";
import Modrooms from "./pages/dashboards/modrooms";
import Updatehotels from "./pages/dashboards/Updatehotels";



function App() {
  return (
    <>
      <Router>
        <AppHeader />
        
        {/* Break For The  */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
        
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/rooms/:id" element={<Rooms/>} />
          <Route path="/profile" element={<Profile/>} />

          {/* Dashboard Routes */}
          <Route path="/mod" element={<Mod/>} />
          <Route path="/moderator/profile/" element={<ModProfile />} />
          <Route path="/moderator/hotels/" element={<ModHotels />} />
          <Route path="/moderator/create/" element={<Createhotels />} />
          <Route path="/moderator/rooms/:id" element={<Modrooms />} />
          <Route path="/moderator/update/:id" element={<Updatehotels />} />

          <Route path="/admin" element={<Admin/>} />
         

        </Routes>
        <Footer/>
      </Router>
      </>
  );
}

export default App;


