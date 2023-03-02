import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Mod from "./pages/Mod";
import Profile from "./pages/Profile";
import Modprofle from "./pages/dashboards/mod/Home";
import  "./index.css"


function App() {
  return (
    <>
      <Router>
        <AppHeader />
        
        {/* Break For The  */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/rooms/:id" element={<Rooms/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/mod" element={<Mod/>} />
          <Route path="/mod/home" element={<Modprofle/>} />
          <Route path="/profile" element={<Profile/>} />

        </Routes>
        <Footer/>
      </Router>
      </>
  );
}

export default App;
