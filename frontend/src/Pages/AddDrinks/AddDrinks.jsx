import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";


const AddDrinks = () => {
  const [seriesName, setSeriesName] = useState("");
  const [drinkName, setDrinkName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSeriesChange = (e) => {
    setSeriesName(e.target.value);
  };
  const drinks=[
    {
        name:"Puffle Waffle",
        image:"puffle waffle"
                },
    {
        name:"Milk Tea",
        image:"milk tea"
    },
    {
        name:"Cheese Cream",
        image:"cheese cream"
    },
    {
        name:"Fresh Fruit Tea",
        image:"fresh fruit tea"
    },
    {
        name:"Stormy",
        image:"stormy"
    },
    {
        name:"Yakult",
        image:"yakult"
    },
    {
        name:"Pure milk",
        image:"pure milk"
    },
    {
        name:"Tea",
        image:"tea"
    },
    {
        name:"Coffee",
        image:"coffee"
    },{
        name:"Blended",
        image:"blended"
    }
]

  const handleNameChange = (e) => {
    setDrinkName(e.target.value);
  };

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

  const handleAddSeries = () => {
    console.log("Drink Name:", drinkName);
    console.log("Series Name:", seriesName);
    console.log("Selected File:", selectedFile);
    // Add your logic to send the data to the server or perform any other actions
  };

  return (
    <div>
      <Sidebar />
      <div className="ml-[24%] py-10">
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
                  value={seriesName}
                  onChange={handleSeriesChange}
                  className="outline-none border text-[#000000b8] border-[#00000068] bg-white rounded-md w-[160px] h-[43px]  px-2 placeholder:text-[#000000b8]"
                >
                  <option value="" disabled>Select Series</option>
                  {drinks.map((drink, index) => (
                    <option key={index} value={drink.name}>
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
            </div>
            </div>
            <div className="flex justify-between">

            <button
              className="bg-[#3f691f] text-white py-2 px-3 font-semibold rounded-lg h-[42px] mt-7 w-[150px] border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300"
              onClick={handleAddSeries}
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
    {drinks &&
      drinks?.map((drink, index) => {
        return (
          <div key={index} className="flex flex-col  pt-3 items-center border border-[#00000027] w-[250px] rounded-xl h-[360px] relative">
               <RiDeleteBin5Fill className="p-[3px] py-[6px] absolute -right-2 -top-2 bg-red-600 text-[27px] text-white rounded hover:shadow-lg hover:shadow-red-500/50 cursor-pointer" />
            <div>
              <img
                src={`../images/${drink?.image}.png`}
                alt={`./images/${drink?.image}.png`}
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

export default AddDrinks;
