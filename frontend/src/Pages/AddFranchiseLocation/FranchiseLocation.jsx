import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { RiDeleteBin5Fill } from "react-icons/ri";


const FranchiseLocation = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    franchiseName: "",
    franchiseAddress: "",
    longitude: "",
    latitude: "",
    openTime: "",
    closingTime: "",
    thirdPartyLink: "",
    email: "",
  });
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (file) {
      // Check if the selected file is an image
      const isImage = file.type.startsWith("image/");

      if (isImage) {
        // Check if the file size is less than or equal to 200KB
        const maxSizeKB = 200;
        if (file.size <= maxSizeKB * 1024) {
          setSelectedFile(file);
        } else {
          alert("Please choose an image with a size less than or equal to 200KB.");
        }
      } else {
        alert("Please choose a valid image file.");
      }
    }
  };
  const [franchiseList, setFranchiseList] = useState([
    {
      name: "Franchise 1",
      address: "Street no 4 Calefornia,America ",
    },
    {
        name: "Franchise 1",
        address: "Street no 4 Calefornia,America ",
      },    {
        name: "Franchise 1",
        address: "Street no 4 Calefornia,America ",
      },    {
        name: "Franchise 1",
        address: "Street no 4 Calefornia,America ",
      },
    // Add more dummy data as needed
  ]);

  // Event handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for "Add Location" button click
  const handleAddLocation = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can perform additional actions here, like sending the data to the server.
  };

  return (
    <div>
      <Sidebar />
      <div className="ml-[29%] pt-10 mx-32">
        <div className="bg-white p-10 shadow-xl rounded-lg">
          <form onSubmit={handleAddLocation}>
            <p className="text-[23px] text-[#3f691f] font-semibold text-center pb-9">
              Add Franchise Location
            </p>
            <div className="flex flex-col gap-7">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="franchiseName"
                    className="text-[#000000e4] text-[16px]"
                  >
                    Franchise Name
                  </label>
                  <input
                    type="text"
                    name="franchiseName"
                    required
                    value={formData.franchiseName}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise name"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="franchiseAddress"
                    className="text-[#000000e4] text-[16px]"
                  >
                    Franchise Address
                  </label>
                  <input
                    type="text"
                    required
                    name="franchiseAddress"
                    value={formData.franchiseAddress}
                    onChange={handleInputChange}
                    placeholder="Enter address"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="longitude" className="text-[#000000e4] text-[16px]">
                    Location (Longitude)
                  </label>
                  <input
                    type="number"
                    name="longitude"
                    required
                    value={formData.longitude}
                    onChange={handleInputChange}
                    placeholder="Enter longitude"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="latitude" className="text-[#000000e4] text-[16px]">
                    Location (Latitude)
                  </label>
                  <input
                    type="number"
                    name="latitude"
                    required
                    value={formData.latitude}
                    onChange={handleInputChange}
                    placeholder="Enter latitude"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="openTime" className="text-[#000000e4] text-[16px]">
                    Franchise Open Time
                  </label>
                  <input
                    type="time"
                    name="openTime"
                    required
                    value={formData.openTime}
                    onChange={handleInputChange}
                    placeholder="Enter open time"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="closingTime"
                    className="text-[#000000e4] text-[16px]"
                  >
                    Franchise Closing Time
                  </label>
                  <input
                    type="time"
                    name="closingTime"
                    required
                    value={formData.closingTime}
                    onChange={handleInputChange}
                    placeholder="Enter close time"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
              </div>
              <div className="flex justify-between">
              <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="thirdPartyLink"
                    className="text-[#000000e4] text-[16px]"
                  >
                    Franchise Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise Email"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="thirdPartyLink"
                    className="text-[#000000e4] text-[16px]"
                  >
                    Third Party link
                  </label>
                  <input
                    type="text"
                    name="thirdPartyLink"
                    required
                    value={formData.thirdPartyLink}
                    onChange={handleInputChange}
                    placeholder="Enter link"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>

              </div>
              <div className="flex justify-between">
              <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-[#000000e4] text-[16px]">
                Add Franchise Picture
              </label>
              <div className="relative">
                <button className="cursor-pointer bg-white shadow-xl h-[42px] px-3 rounded-lg text-[15px]">
                  Choose Picture
                </button>
                <input
                  type="file"
                  className="absolute left-0 top-0 outline-none border text-[1px] text-white rounded-md w-[150px] py-3 placeholder:text-[#000000b8] opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
              </div>
            </div>
              <div className="flex flex-col  mt-8">
                  <button
                    type="submit"
                    className="bg-[#3f691f] text-white py-2 px-8 font-semibold rounded-lg border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300"
                  >
                    Add Location
                  </button>
                </div>

              </div>

            </div>
          </form>
        </div>
        {/* All locations list */}
        <div className="bg-white shadow-2xl w-full my-10 py-5 px-6 rounded-xl">
          <h1 className="text-[#3f691f] font-semibold text-[24px] pb-6 px-3">
            All Franchises locations
          </h1>
          <table className="w-full  text-center ">
            <thead className="text-[16px]">
              <tr>
                <th className="py-6">Franchise Name</th>
                <th>Adress</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-[14px]  rounded-lg ">
              {franchiseList.map((franchise, index) => (
                <tr key={index} className="border-b border-[#00000041] ">
                  <td className="py-4">{franchise.name}</td>
                  <td>{franchise.address}</td>
                  <td>
                    <RiDeleteBin5Fill className="p-[6px] bg-red-600 text-[26px] text-white rounded hover:shadow-lg hover:shadow-red-500/50 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FranchiseLocation;
