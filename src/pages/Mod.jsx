import React, { useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from "react-router-dom";

const url = "https://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/auth/signin"



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
 

export default function Mod( {}) {
  const navigate = useNavigate();
  const params = useParams();


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async e => {
  e.preventDefault();
  
  const session = await LoginUser({
    username,
    password
  });
  // setToken(token);

  console.log("TOKEN",session)
  localStorage.setItem("accessToken",session.accessToken)
  localStorage.setItem("email",session.email)
  localStorage.setItem("username",session.username)
  localStorage.setItem("id",session.id)
  navigate(`/moderator/profile/`)

}

const logout = () => {
  localStorage.removeItem('accessToken',);
  localStorage.removeItem('username',);
  localStorage.removeItem('email',);
  localStorage.removeItem('id',);
 
};



  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="">
          
        </div>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
           Moderator Login  Sign in
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                for="Username"
                className="block text-sm font-semibold text-gray-800"
              >
                Username
              </label>
              <input
                type="username" onChange={e => setUsername(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password" 
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password" onChange={e => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button  type='submit'  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
             <input type="submit" onClick={logout} value="Submit" />
            </div>
          </form>

          
        </div>
      </div>
    </>
  );
  
}

Mod.propTypes = {
  setToken: PropTypes.func.isRequired
}