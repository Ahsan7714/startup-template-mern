import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, clearState, deleteLocation, getAllLocations } from "../../store/reducers/adminReducers";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";


const FranchiseLocation = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email:"",
    openTime: "",
    closingTime: "",
    thirdPartyLink: "",
  });

  

const dispatch=useDispatch()
const {locations,isLocationAdded,isLocationDeleted,loading,error}=useSelector(state=>state.admin)

  // Event handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for "Add Location" button click
  const handleAddLocation = (e) => {
    e.preventDefault();
    dispatch(addLocation(formData))
  };


  const deleteLocationFromHere = (id) => {
    dispatch(deleteLocation(id))
    toast.success("Location deleted successfully")
  };
useEffect(() => {
  if(isLocationAdded){
    setFormData({
      name: "",
      address: "",
      email:"",
      openTime: "",
      closingTime: "",
      thirdPartyLink: "",
      image:"dummy"
    })
    toast.success("Location added successfully")
  }
}, [isLocationAdded])
useEffect(() => {
  
  dispatch(getAllLocations())
}
, [isLocationDeleted,isLocationAdded,dispatch])

useEffect(() => {
  if(error){
    toast.error(error)
  }
  dispatch(clearState())
}, [error,dispatch])
if(loading){
  return <Loader/>
}
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
                    htmlFor="name"
                    className="text-[#000000e4] text-[16px]"
                  >
                    Franchise Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise name"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address"
                    className="text-[#000000e4] text-[16px]"
                  >
                    Franchise Address
                  </label>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter address"
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
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter link"
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
              <div className="flex flex-col  mt-8">
                  <button
                    type="submit"
                    className="bg-[#3f691f] text-white py-2 px-5 font-semibold rounded-lg border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300"
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
              {locations?.map((franchise, index) => (
                <tr key={index} className="border-b border-[#00000041] ">
                  <td className="py-4">{franchise.name}</td>
                  <td>{franchise.address}</td>
                  <td>
                    <RiDeleteBin5Fill className="p-[6px] bg-red-600 text-[26px] text-white rounded hover:shadow-lg hover:shadow-red-500/50 cursor-pointer" onClick={()=>deleteLocationFromHere(franchise._id)} />
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