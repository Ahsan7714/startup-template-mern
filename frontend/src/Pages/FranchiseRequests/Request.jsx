import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaClosedCaptioning, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearState, deleteRequest, getAllFranchiseRequests } from "../../store/reducers/adminReducers";
import { MdOutlineClose } from "react-icons/md";
import toast from "react-hot-toast";

const Request = () => {
  const [showModal, setShowModal] = useState(false);
const dispatch=useDispatch()
const {allRequests,loading,isDeleted} = useSelector(state => state.admin)
  useEffect(() => {
    dispatch(getAllFranchiseRequests())
  }, [dispatch])

  const handleEyeClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if(isDeleted){
      toast.success("Request Deleted Successfully");
      dispatch(getAllFranchiseRequests())
      clearState()
    }
  }, [dispatch,isDeleted])

const handleDelete=(id)=>{
  dispatch(deleteRequest(id))
}

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
          {
            loading ? <h1 className="text-xl">Loading...</h1> :
           allRequests?.length<1 ? <h1 className="text-xl">No Requests Available</h1>: 
            allRequests?.map((request) => (
            <div
              key={request.id}
              className="flex justify-center gap-20 text-center text-[16px] py-3 w-[75%] mx-auto rounded-xl border border-[#0000003d]"
            >
              <p>{request.name}</p>
              <p>{request.email}</p>
              <p>{request.phone}</p>
              <div className="flex gap-2">
                <FaEye
                  className="p-[6px] bg-[#96c93d] text-[26px] text-white rounded hover:shadow-lg hover:shadow-[#96c93d] cursor-pointer"
                  onClick={handleEyeClick}
                />
                <RiDeleteBin5Fill className="p-[6px] bg-red-600 text-[26px] text-white rounded hover:shadow-lg hover:shadow-red-500/50 cursor-pointer" onClick={()=>handleDelete(request._id)}/>
              </div>

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
                  <p className="text-[18px] font-semibold">Full Name </p>
                  <p>{request.name}</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Email</p>
                  <p>{request.email}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Current Occupation</p>
                  <p>{request.occupation}</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Net worth</p>
                  <p>{request.netWorth}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Liquid assests</p>
                  <p>{request.liquidAssets}</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Prefered location</p>
                  <p>{request.preferredLocation}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="text-[18px] font-semibold">Address</p>
                  <p>{request.address}</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[18px] font-semibold">Reference</p>
                  <p>{request.preferredLocation}</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex  gap-4">
                  <p className="text-[18px] font-semibold">Notes :</p>
                  <p>{request.notes}</p>
                </div>
              </div>
            </div>
            <button onClick={handleCloseModal} className="text-[#3f691f]   absolute top-1 right-10 text-3xl mt-5"><MdOutlineClose/> </button>
          </div>
        </div>
      )}

            </div>

            
          ))}
        </div>
      </div>
      {/* Details Model */}
          </div>
  );
};

export default Request;
