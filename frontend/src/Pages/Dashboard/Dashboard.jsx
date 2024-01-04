import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { MdAccountCircle } from "react-icons/md";

const Dashbaord = () => {
  const [franchiseData, setFranchiseData] = useState({
    name: "",
    email: "",
    phone: "",
    ownerName: "",
    password:'',
  });
  const [franchiseList, setFranchiseList] = useState([
    {
      name: "Franchise 1",
      email: "franchise1@example.com",
      phone: "1234567890",
      ownerName: "Owner 1",
    },
    {
      name: "Franchise 2",
      email: "franchise2@example.com",
      phone: "9876543210",
      ownerName: "Owner 2",
    },
    ,
    {
      name: "Franchise 2",
      email: "franchise2@example.com",
      phone: "9876543210",
      ownerName: "Owner 2",
    },,
    {
      name: "Franchise 2",
      email: "franchise2@example.com",
      phone: "9876543210",
      ownerName: "Owner 2",
    },
    // Add more dummy data as needed
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFranchiseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddFranchise = () => {
    console.log("Franchise Data:", franchiseData);
    // You can perform additional actions here, like sending the data to the server.
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-[82%] gap-9 mb-8 ml-[20%]">
        <div className="flex justify-between bg-[#3f691f] shadow-xl py-4 px-4 mx-10 mt-5 rounded-lg">
          <input
            type="text"
            placeholder="search"
            className="outline-none border border-white bg-transparent text-white placeholder:text-white px-3 py-1 w-[160px] rounded-lg"
          />
          <div className="flex items-center gap-2 text-white">
            <p className="text-[20px] font-semibold">Admin</p>
            <MdAccountCircle className="text-[30px]" />
          </div>
        </div>
        {/* add form */}
        <div className="bg-[white] w-[92%] mx-10 rounded-xl shadow-xl pb-8">
          <p className="text-[#3f691f] text-[20px] font-bold px-8 py-6">
            Add a new Franchise
          </p>
          <div className="flex flex-col justify-center items-center">
            <form action="" className="flex flex-col gap-10">
              <div className="flex gap-16">
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="" className="text-[#000000e4] text-[16px]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={franchiseData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise name"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="" className="text-[#000000e4] text-[16px]">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={franchiseData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise email"
                    className=" outline-none border text-[#000000b8] border-[#00000068] bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
              </div>
              <div className="flex flex-1 gap-16">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#000000e4] text-[16px]">
                    Phone{" "}
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={franchiseData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise phone number"
                    className=" outline-none border text-[#000000b8] border-[#00000068] bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="" className="text-[#000000e4] text-[16px]">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={franchiseData.ownerName}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise owner name"
                    className=" outline-none border  border-[#00000068] text-[#000000b8] bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
              </div>
              <div className="flex flex-1 gap-16">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#000000e4] text-[16px]">
                   Create Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    value={franchiseData.password}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise password"
                    className=" outline-none border text-[#000000b8] border-[#00000068] bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 mt-8">
                <button
                type="button"
                onClick={handleAddFranchise}
                className="bg-[#3f691f] text-white py-2  px-3 font-semibold rounded-lg w-[150px] border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300 "
              >
                Add Franchise
              </button>
                </div>
              </div>

            </form>
          </div>
        </div>
        {/* franchise table */}
        <div className="bg-white shadow-2xl w-[92%] mx-10 py-5 px-6 rounded-xl">
          <h1 className="text-[#3f691f] font-semibold text-[24px] pb-6 px-3">Franchises</h1>
          <table className="w-full text-center">
            <thead className="text-[16px]">
              <tr>
              <th className="py-6">Name</th>
        <th >Email</th>
        <th >Number</th>
        <th> Owner Name</th>

              </tr>
            </thead>
            <tbody className="text-[14px] my-10 pb-8 rounded-lg">
              {franchiseList.map((franchise, index) => (
                <tr key={index} >
                  <td className="py-3">{franchise.name}</td>
                  <td>{franchise.email}</td>
                  <td>{franchise.phone}</td>
                  <td>{franchise.ownerName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
