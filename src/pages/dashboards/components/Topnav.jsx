import { useEffect, useState } from "react";
import { GrNotification } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { isAuth, isAuthusername } from "../isAuth";

async function Searchbyname(credentials) {
  return fetch("http://nbn-hotel-reservation-backend.clouds.nepalicloud.com/api/hotels", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


 export  function Topnav(){

  const [Hotel_name, setHotel_name] = useState('');
  
 
 
  const handleSubmit = async e => {
   e.preventDefault();
   
   const session = await Searchbyname({
    Hotel_name,
     
   });
  }




    const navigate = useNavigate();
    const email = isAuth();
    const username = isAuthusername();
  
    const logout = () => {
      localStorage.removeItem("accessToken", "email");
      localStorage.removeItem("email");
      localStorage.removeItem("accessToken","username");
      navigate("/mod");
    };
  
    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        navigate("/mod");
      }
    });

   return (
        <>
        
        <div className=" p-5 flex flex-row  shadow-2xl bg-slate-400 ">
            <div className="w-96">
              <form action=" " onSubmit={handleSubmit}>
              <input
                className="m-0 w-96 h-10 rounded border-2 placeholder:text-gray-500 placeholder:text-1xl placeholder:pl-5 placeholder:text-lg"
                type="search"  onChange={e => setHotel_name(e.target.value)}
                placeholder="search"
              />
              </form>
              
            </div>

            <div className=" flex text-lg">
              <p className="p-2"> Home </p>
              <span className="p-2 text-white">
                {" "}
                <GrNotification color="white" size={30} />{" "}
              </span>
              <p className="p-2"> {username} </p>
              <p className="p-2"> {email} </p>

              <input
                type="submit"
                value="Logout"
                className="p-2"
                onClick={logout}
              />
            </div>
          </div>
        </>
    )
}