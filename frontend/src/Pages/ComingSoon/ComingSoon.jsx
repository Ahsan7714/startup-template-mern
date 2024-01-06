import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addOneCommingSoon, clearState, deleteOneCommingSoon, getAllCommingSoon } from "../../store/reducers/adminReducers";
import toast from "react-hot-toast";


const ComingSoon = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    franchiseName: "",
    franchiseAddress: "",
    email: "",
  });
  const dispatch=useDispatch()
  const {commingSoon, isCoomingSoonDeleted,
    isCoomingSoonAdded,
}=useSelector(state=>state.admin)



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
    dispatch(addOneCommingSoon({name:formData.franchiseName,address:formData.franchiseAddress,email:formData.email}))
  };
  useEffect(() => {
    dispatch(getAllCommingSoon());
  }, [dispatch]);
  
  useEffect(() => {
    if (isCoomingSoonAdded) {
      setFormData({
        franchiseName: "",
        franchiseAddress: "",
        email: "",
      });
      toast.success("Franchise Added Successfully");
    }
    dispatch(clearState());
    dispatch(getAllCommingSoon());

  }, [isCoomingSoonAdded,dispatch]);
  
  useEffect(() => {
    if (isCoomingSoonDeleted) {
      toast.success("Franchise Deleted Successfully");
    }

    
    dispatch(clearState());
    dispatch(getAllCommingSoon());
  
  }, [isCoomingSoonDeleted,dispatch]);
  

const handleDelete=(id)=>{
  dispatch(deleteOneCommingSoon(id))
}

  return (
    <div>
      <Sidebar />
      <div className="ml-[29%] pt-10 mx-32">
        <div className="bg-white p-10 shadow-xl rounded-lg">
          <form onSubmit={handleAddLocation}>
            <p className="text-[23px] text-[#3f691f] font-semibold text-center pb-9">
              Add Coming Soon Franchise
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
                    placeholder="Enter link"
                    className=" outline-none border border-[#00000068]  text-[#000000b8]  bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>

                <button
                    type="submit"
                    className="bg-[#3f691f] h-[46px] mt-7 text-white py-2 px-5 font-semibold rounded-lg border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300"
                  >
                    Add Franchise
                  </button>

              </div>
              <div className="flex justify-between">
              <div className="flex flex-col  mt-8">

                </div>

              </div>

            </div>
          </form>
        </div>
        {/* All locations list */}
        <div className="bg-white shadow-2xl w-full my-10 py-5 px-6 rounded-xl">
          <h1 className="text-[#3f691f] font-semibold text-[24px] pb-6 px-3">
            All Coming Franchises 
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
              {commingSoon?.map((franchise, index) => (
                <tr key={index} className="border-b border-[#00000041] ">
                  <td className="py-4">{franchise.name}</td>
                  <td>{franchise.address}</td>
                  <td>
                    <RiDeleteBin5Fill className="p-[6px] bg-red-600 text-[26px] text-white rounded hover:shadow-lg hover:shadow-red-500/50 cursor-pointer justify-end float-right mr-32" onClick={()=>handleDelete(franchise._id)} />
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

export default ComingSoon;
