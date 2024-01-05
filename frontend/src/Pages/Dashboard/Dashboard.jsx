import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { MdAccountCircle, MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addFranchise, clearState, deleteFranchise, getAllFranchises } from "../../store/reducers/adminReducers";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Dashbaord = () => {
  const [showModal, setShowModal] = useState(false);
  const handleEyeClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [franchiseData, setFranchiseData] = useState({
    name: "",
    email: "",
    phone: "",
    owner_name: "",
    address:'',
    password:'',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const {allFranchises,loading,isFranchiseAdded,error,isFranchiseDeleted} = useSelector(state => state.admin)
 


  
  useEffect(() => {
    dispatch(getAllFranchises())
  }, [dispatch])
  const handleFileChange = (e) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      if (reader.readyState === 2) {
        // setAvatarPreview(reader.result);
        setSelectedFile(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
useEffect(() => {
  if(isFranchiseDeleted){
    toast.success("Franchise Deleted Successfully")
    dispatch(getAllFranchises())
    dispatch(clearState())
  }
}, [isFranchiseDeleted,dispatch])


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFranchiseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddFranchise = () => {
    console.log("Franchise Data:", franchiseData);
    const data={
      email:franchiseData.email,
      password:franchiseData.password,
      franchise:{
        name:franchiseData.name,
        phone:franchiseData.phone,
        owner_name:franchiseData.owner_name,
        address:franchiseData.address,
        image:selectedFile
      }
    }
    dispatch(addFranchise(data));
  };

  const handleDelete=(id)=>{
    dispatch(deleteFranchise(id))
  }

  useEffect(() => {
    if (isFranchiseAdded) {
      setFranchiseData({
        name: "",
        email: "",
        phone: "",
        owner_name: "",
        address: "",
        password: "",
      });
      setSelectedFile(null);
      toast.success("Franchise Added Successfully");
      dispatch(getAllFranchises());
      dispatch(clearState());
    }
  }, [isFranchiseAdded, dispatch]);
  
useEffect(() => {
  if(error){
    toast.error(error);
    dispatch(clearState());
  }
}, [error,dispatch])



  if (loading) {
    return <Loader/>;
  }

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
                    Phone Number
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
                    name="owner_name"
                    value={franchiseData.owner_name}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise owner name"
                    className=" outline-none border  border-[#00000068] text-[#000000b8] bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
              </div>
              <div className="flex flex-1 gap-16">
              <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#000000e4] text-[16px]">
                   Franchise Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={franchiseData.address}
                    onChange={handleInputChange}
                    placeholder="Enter Franchise address"
                    className=" outline-none border text-[#000000b8] border-[#00000068] bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
                  />
                </div>
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

              </div>
              <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-[#000000e4] text-[16px]">
                Drink Picture
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
              <div className="flex flex-1 flex-col gap-2 ">
                <button
                type="button"
                onClick={handleAddFranchise}
                className="bg-[#3f691f] text-white py-2  px-3 font-semibold rounded-lg w-[150px] border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300 "
              >
                Add Franchise
              </button>
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
        <th>
          Actions
        </th>

              </tr>
            </thead>
            <tbody className="text-[14px] my-10 pb-8 rounded-lg">
            
              {
                loading ?<div className="flex items-center justify-center w-full"><h1 className="text-center mx-auto  w-fit ">...</h1></div> :
                
                
                allFranchises?.map((single, index) => {
               return (
                <tr key={index} className="border-b border-[#0000001b]">
                  <td className="py-5">{single?.franchise.name}</td>
                  <td>{single?.email}</td>
                  <td>{single?.franchise.phone}</td>
                  <td>{single?.franchise.owner_name}</td>
                  <td className="flex justify-center gap-2">
                    <button className="bg-[#3f691f] text-white py-2  px-3 font-semibold rounded-lg mt-2 border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300 ">
                      <FaEye onClick={()=>handleEyeClick()} />
                    </button>
                    <button className="bg-[#3f691f] text-white py-2  px-3 font-semibold rounded-lg mt-2 border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300 ">
                      <RiDeleteBin5Fill onClick={()=>handleDelete(single._id)}/>
                    </button>
                  </td>
                  {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-7 rounded-md w-[50%] relative">
            {/* Modal content */}
            <div className="flex flex-col gap-4">
              <p className="text-[25px] text-[#3f691f] font-semibold pb-5 text-center">
                Details
              </p>
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between">
                  <p className="text-[18px] font-semibold">Franchise Name </p>
                  <p>{single.franchise.name}</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Email</p>
                  <p>{single.email}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">address</p>
                  <p>{single.franchise.address}</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Phone</p>
                  <p>{single.franchise.phone}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Owner Name</p>
                  <p>{single.franchise.owner_name}</p>
                </div>
               
              </div>
             
              <div className="flex flex-col ">
                <div className="flex  gap-4 align-middle items-center">
                  <p className="text-[18px] font-semibold">Note :</p>
                  <h1 className="">These are the general details of client, for more information you can contact the with email</h1>
                </div>
              </div>
            </div>
            <button onClick={handleCloseModal} className="text-[#3f691f]   absolute top-1 right-10 text-3xl mt-5"><MdOutlineClose/> </button>
          </div>
        </div>
      )}

                </tr>
              )
              }
              )
              
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;