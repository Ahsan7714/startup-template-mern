import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addDrinksToMenu, clearState, deleteDrinksFromMenu, getAllOwnFranchiseDrinks, getAllOwnFranchiseSeries } from "../../store/reducers/franchiseReducer";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";


const AddDrinks = () => {
  const [seriesId, setSeriesId] = useState("")
  const [drinkName, setDrinkName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);


const dispatch=useDispatch()
const {allOwnFranchiseSeries,allOwnFranchiseDrinks,isDrinkAdded,isDrinkDeleted,error,loading}=useSelector(state=>state.franchise)


const handleSeriesChange = (e) => {
  setSeriesId(e.target.value); // Fix: Use setSeriesId to update seriesId
};
 
  const handleNameChange = (e) => {
    setDrinkName(e.target.value);
  };

  const handleFileChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setSelectedFile(reader.result); // Store the file itself
        setImagePreview(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleAddSeries = (e) => {
    e.preventDefault();

    if (drinkName === "") {
      alert("Please enter a drink name.");
      return;
    }
    if (!selectedFile) {
      alert("Please choose an image for the drink.");
      return;
    }
    dispatch(addDrinksToMenu({name:drinkName,seriesId:seriesId,image:selectedFile}))
  };
useEffect(() => {
  dispatch(getAllOwnFranchiseSeries())
  dispatch(getAllOwnFranchiseDrinks())
}, [dispatch])


useEffect(() => {
  if (isDrinkAdded) {
    setDrinkName("");
    setSelectedFile(null);
    setImagePreview(null)
    toast.success("Drink Added Successfully");
  dispatch( clearState())
  dispatch(getAllOwnFranchiseDrinks())

  }
}
, [isDrinkAdded,dispatch]);

useEffect(() => {
  if (isDrinkDeleted) {
    toast.success("Drink Deleted Successfully");
  dispatch( clearState())
  dispatch(getAllOwnFranchiseDrinks())

  }
}
, [isDrinkDeleted,dispatch]);

const handleDelete=(id)=>{
  dispatch(deleteDrinksFromMenu(id))
  
}

useEffect(() => {
  if (error) {
    toast.error(error);
  dispatch( clearState())
  }
}
, [error,dispatch]);
if(loading){
  return <Loader/>
}
  return (
    <div>
      <Sidebar />
      <div className="ml-[24%] py-10 font-[Garet]">
        <div className="bg-white shadow-lg w-[90%] rounded-lg p-10">
          <h1 className="text-[#3f691f] text-[20px] font-bold pb-3">
            Add New Drink
          </h1>
          <form className="flex flex-col py-5 justify-between">
            <div className="flex   justify-between">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-[#000000e4] text-[16px]">
                Drink Name
              </label>
              <input
                type="text"
                placeholder="Enter drink name"
                name="drink_name"
                value={drinkName}
                onChange={handleNameChange}
                className="outline-none border text-[#000000b8] border-[#00000068] bg-white rounded-md w-[330px] py-2 px-2 placeholder:text-[#000000b8]"
              />
            </div>
            {/* Series dropdown */}
            <div className="flex flex-col gap-3">
                <label htmlFor="">Select Series</label>
            <select
                  name="series_name"
                  onChange={handleSeriesChange}
                  value={seriesId}
                  className="outline-none border text-[#000000b8] border-[#00000068] bg-white rounded-md w-[160px] h-[43px]  px-2 placeholder:text-[#000000b8]"
                >
                  <option value="" disabled>Select Series</option>
                  {allOwnFranchiseSeries.map((drink, index) => (
                    <option key={index} value={drink._id}>
                      {drink.name}
                    </option>
                  ))}
                </select>
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
              {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Series Preview"
                    className=" w-[150px] h-[100px] object-cover rounded-md"
                  />
                )}
            </div>
            </div>
            <div className="flex justify-between">

            <button
              className="bg-[#3f691f] text-white py-2 px-3 font-semibold rounded-lg h-[42px] mt-7 w-[150px] border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300"
              onClick={(e)=>handleAddSeries(e)}
            >
              Add Drink
            </button>
            </div>

          </form>
        </div>
        <div className="my-20 bg-white shadow-lg w-[92%] p-10 rounded-lg">
          <h1 className="text-[#3f691f] text-[24px] font-bold pb-8">
            All Drinks
          </h1>
          <div>
          <div className="">
  <div className="grid grid-cols-2 gap-8 ml-20">
    {allOwnFranchiseDrinks &&
      allOwnFranchiseDrinks?.map((drink, index) => {
        return (
          <div key={index} className="flex flex-col  pt-3 items-center border border-[#00000027] w-[250px] rounded-xl h-[360px] relative">
               <RiDeleteBin5Fill className="p-[3px] py-[6px] absolute -right-2 -top-2 bg-red-600 text-[27px] text-white rounded hover:shadow-lg hover:shadow-red-500/50 cursor-pointer" onClick={(e)=>handleDelete(drink._id)}/>
            <div>
              <img
                src={`${drink?.image}`}
                alt={`${drink?.image}`}
                className="h-[300px] object-cover"
              />
            </div>
            <div className="drink_card_title my-4">
              <h3 className=" text-[18px] capitalize">{drink.name}</h3>
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

export default AddDrinks;
