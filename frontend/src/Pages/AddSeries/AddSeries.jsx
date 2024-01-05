import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addSeriesToMenu, clearState, deleteSeriesFromMenu, getAllOwnFranchiseSeries } from "../../store/reducers/franchiseReducer";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";


const AddSeries = () => {
  const [seriesName, setSeriesName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
const {allOwnFranchiseSeries,isSeriesAdded,isSeriesDeleted,error,loading}=useSelector(state=>state.franchise)
const dispatch=useDispatch()

  const handleNameChange = (e) => {
    setSeriesName(e.target.value);
  };

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

  const handleAddSeries = (e) => {
    if (seriesName === "") {
      toast.error("Please enter a series name.");
      return;
    }
    if (!selectedFile) {
      toast.error("Please choose an image for the series.");
      return;
    }
    e.preventDefault();
   dispatch(addSeriesToMenu({name:seriesName,image:selectedFile}))
  };
useEffect(() => {
  dispatch(getAllOwnFranchiseSeries())
}, [dispatch])

useEffect(() => {
  if (isSeriesAdded) {
    setSeriesName("");
    setSelectedFile(null);
    toast.success("Series Added Successfully");
  dispatch( clearState())
  dispatch(getAllOwnFranchiseSeries())

  }
}, [isSeriesAdded,dispatch]);

const handleDelete=(id)=>{
  dispatch(deleteSeriesFromMenu(id))
}
useEffect(() => {
  if (isSeriesDeleted) {
    toast.success("Series Deleted Successfully");
  dispatch( clearState())
  dispatch(getAllOwnFranchiseSeries())

  }
}, [isSeriesDeleted,dispatch]);

useEffect(() => {
  if (error) {
    toast.error(error);
  dispatch( clearState())
  }
}
, [error,dispatch]);
if(loading) return(<Loader/>)
  return (
    <div>
      <Sidebar />
      <div className="ml-[24%] py-10">
        <div className="bg-white shadow-lg w-[90%] rounded-lg p-10">
          <h1 className="text-[#3f691f] text-[20px] font-bold pb-3">
            Add New Series
          </h1>
          <form className="flex py-5 gap-10">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-[#000000e4] text-[16px]">
                Series Name
              </label>
              <input
              required
                type="text"
                placeholder="Enter name"
                name="series_name"
                value={seriesName}
                onChange={handleNameChange}
                className="outline-none border text-[#000000b8] border-[#00000068] bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-[#000000e4] text-[16px]">
                Series Picture
              </label>
              <div className="relative">
                <button className="cursor-pointer bg-white shadow-xl h-[42px] px-3 rounded-lg text-[15px]">
                  Choose Picture
                </button>
                <input
                required
                  type="file"
                  className="absolute left-0 top-0 outline-none border text-[1px] text-white rounded-md w-[150px] py-3 placeholder:text-[#000000b8] opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <button
              className="bg-[#3f691f] text-white py-2 px-3 font-semibold rounded-lg h-[42px] mt-8 ml-10 w-[150px] border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300"
              onClick={(e)=>handleAddSeries(e)}
            >
              Add Series
            </button>
          </form>
        </div>
        {/* All series cards */}
        <div className="my-10 bg-white shadow-lg w-[90%] p-10 rounded-lg">
          <h1 className="text-[#3f691f] text-[24px] font-bold pb-8">
            All Series
          </h1>
          <div>
          <div className="">
  <div className="grid grid-cols-2 gap-8 ml-20">
    {loading?<Loader/> :   allOwnFranchiseSeries &&
      allOwnFranchiseSeries?.map((drink, index) => {
        return (
          <div key={index} className="flex flex-col  pt-3 items-center border border-[#00000027] w-[250px] rounded-xl h-[360px] relative">
               <RiDeleteBin5Fill className="p-[3px] py-[6px] absolute -right-2 -top-2 bg-red-600 text-[27px] text-white rounded hover:shadow-lg hover:shadow-red-500/50 cursor-pointer" onClick={()=>handleDelete(drink._id)} />
            <div>
              <img
                src={`${drink?.image}`}
                alt={`${drink?.image}`}
                className="h-[300px] object-cover"
              />
            </div>
            <div className="drink_card_title mt-2">
              <h3>{drink.name}</h3>
            </div>
          </div>
        );
      })}
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSeries;
