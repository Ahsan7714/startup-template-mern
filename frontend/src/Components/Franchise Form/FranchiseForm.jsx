import React, { useState } from "react";
import bg from "../../assets/bg-x.png";

const FranchiseForm = () => {
  const [state, setState] = useState({
    name: "",
    phone_no: "",
    email_: "",
    city: "",
    current_occupation: "",
    net_worth: "",
    preferred_location: "",
    liquid_assests: "",
    address: "",
    reference: "",
    notes: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className=" relative mb-[24%] md:mb-[30%] lg:mb-[10%]">
      <div className="bg-[#87a972] text-white w-[70%] h-[100vh] flex justify-end rounded-e-[20px]">
        <div className=" py-20 lg:px-32 text-center">
          <h1 className="text-[35px]">Interested in Franchising?</h1>
          <p className="text-[20px]">Contact us below</p>
        </div>
      </div>
      <div className="absolute top-[30%] lg:top-[40%] left-[6%] lg:left-[15%]">
        <img src={bg} alt="" className="h-[95vh]  rounded-xl  lg:w-full" />
        <div className="absolute top-0">
          <form onSubmit={submit} className="px-8 py-10 flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
                type="text"
                name="name"
                id="name"
                onChange={inputHandle}
                value={state.name}
                placeholder="Full Name"
                className=" text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
                type="text"
                name="phone_no"
                id="phone_no"
                onChange={inputHandle}
                value={state.phone_no}
                placeholder="Phone #"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
                type="text"
                name="email_"
                id="email_"
                onChange={inputHandle}
                value={state.email_}
                placeholder="Email address"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
                type="text"
                name="city"
                id="city"
                onChange={inputHandle}
                value={state.city}
                placeholder="City/State of Residence"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
                type="text"
                name="current_occupation"
                id="current_occupation"
                onChange={inputHandle}
                value={state.current_occupation}
                placeholder="Current Occupation"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
                type="text"
                name="net_worth"
                id="net_worth"
                onChange={inputHandle}
                value={state.net_worth}
                placeholder="Net Worth"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
                type="text"
                name="liquid_assests"
                id="liquid_assests"
                onChange={inputHandle}
                value={state.liquid_assests}
                placeholder="Liquid assests"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
                type="text"
                name="preferred_location"
                id="preferred_location"
                onChange={inputHandle}
                value={state.preferred_location}
                placeholder="Preferred Location"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
                type="text"
                name="address"
                id="address"
                onChange={inputHandle}
                value={state.address}
                placeholder="Provide an address(if applicable)"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
                type="text"
                name="reference"
                id="reference"
                onChange={inputHandle}
                value={state.reference}
                placeholder="How did you hear about us?"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col  gap-5 ">
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="5"
                onChange={inputHandle}
                value={state.notes}
                placeholder="Notes"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-full rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F] resize-none"
              ></textarea>
              <button className="bg-[#3f691f] text-white w-full rounded-[5px] py-2 text-[14px]">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;
