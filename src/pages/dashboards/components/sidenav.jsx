import { Link } from "react-router-dom";

export function Sidenav() {
  return (
    <>
      <h1 className=" font-dashboard  text-black text-4xl"> Moderator </h1>
      <ul className="text-black mt-20">
        <li className="p-2 font-dashboard text-2xl shadow-sm "> Dashboard</li>
        <li className="p-2 font-dashboard text-2xl shadow-sm"> <Link to="/moderator/hotels"> Hotels</Link>   </li>
        <li className="p-2 font-dashboard text-2xl shadow-sm"> <Link to="/moderator/create/"> Add Hotel </Link> </li>
        <li className="p-2 font-dashboard text-2xl shadow-sm"> Get All</li>
      </ul>
    </>
  );
}
export function Table() {
  return (
    <>
      <table class="table-auto w-full bg-white rounded-t-2xl shadow-2xl overflow-scroll">
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
              </tbody>
            </table>
    </>
  );
}


export function Dash(){
    return(
        <>
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
        </>
    )
}


// List Of Hotels Pages


