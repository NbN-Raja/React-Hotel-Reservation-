import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";





async function LoginUser(credentials) {


  return fetch('http://localhost:8080/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    

 }
 
 

export default function Login( {setToken}) {
  const navigate = useNavigate();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [message, setmessage] = useState('');



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
  localStorage.setItem("firstname",session.firstname)
  localStorage.setItem("lastname",session.lastname)
  localStorage.setItem("address",session.address)
  localStorage.setItem("phone",session.phone)
  localStorage.setItem("gender",session.gender)
  localStorage.setItem("provider",session.provider)
  navigate("/profile")

}


// const logout = () => {
//   localStorage.removeItem('accessToken','email','username');
//   setIsLoggedin(false);
//   navigate("/")
// };
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="">
        </div>
        
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
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
                type="password"
                onChange={e => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>
         
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href className="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
           
          </p>
        </div>
      </div>
    </>
  );
  
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}