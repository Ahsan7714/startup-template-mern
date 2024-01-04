import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

const Request = () => {
  const [showModal, setShowModal] = useState(false);

  // Dummy data for franchise requests
  const franchiseRequests = [
    {
      id: 1,
      name: "Aqib Nawan Khan",
      email: "google1231@gmail.com",
      contact: "0218321383",
    },
    {
      id: 1,
      name: "Aqib Nawan Khan",
      email: "google1231@gmail.com",
      contact: "0218321383",
    },
    {
      id: 1,
      name: "Aqib Nawan Khan",
      email: "google1231@gmail.com",
      contact: "0218321383",
    },
    {
      id: 1,
      name: "Aqib Nawan Khan",
      email: "google1231@gmail.com",
      contact: "0218321383",
    },
    // Add more dummy data objects as needed
  ];

  const handleEyeClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Sidebar />
      <div className="ml-[22%] pt-5">
        <p className="text-[30px] font-bold text-[#3f691f] py-10">
          Franchise Requests
        </p>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex justify-center gap-32 bg-[#3f691f] text-white text-[18px] py-3 mb-5 w-[75%] mx-auto rounded-xl">
            <p>Name</p>
            <p>Email</p>
            <p>Contact</p>
            <p>Action</p>
          </div>
          {franchiseRequests.map((request) => (
            <div
              key={request.id}
              className="flex justify-center gap-20 text-center text-[16px] py-3 w-[75%] mx-auto rounded-xl border border-[#0000003d]"
            >
              <p>{request.name}</p>
              <p>{request.email}</p>
              <p>{request.contact}</p>
              <div className="flex gap-2">
                <FaEye
                  className="p-[6px] bg-[#96c93d] text-[26px] text-white rounded hover:shadow-lg hover:shadow-[#96c93d] cursor-pointer"
                  onClick={handleEyeClick}
                />
                <RiDeleteBin5Fill className="p-[6px] bg-red-600 text-[26px] text-white rounded hover:shadow-lg hover:shadow-red-500/50 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Details Model */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-7 rounded-md w-[50%]">
            {/* Modal content */}
            <div className="flex flex-col gap-4">
              <p className="text-[25px] text-[#3f691f] font-semibold pb-5 text-center">
                Details
              </p>
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between">
                  <p className="text-[18px] font-semibold">Full Name </p>
                  <p>Aqib</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Email</p>
                  <p>Aqib@gamil.com</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Current Occupation</p>
                  <p>Business man</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Net worth</p>
                  <p>50 million</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Liquid assests</p>
                  <p>unkowm</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Predered location</p>
                  <p>SansFransisco</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="text-[18px] font-semibold">Address</p>
                  <p>House no 4 burj khalifa</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Reference</p>
                  <p>Social Media</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex  gap-4">
                  <p className="text-[18px] font-semibold">Notes :</p>
                  <p>Hope you will contact n as i am very instrusted in your brand</p>
                </div>
              </div>
            </div>
            <button onClick={handleCloseModal} className="bg-[#3f691f] text-white  rounded-lg px-3 py-1 text-sm mt-5">Close </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
