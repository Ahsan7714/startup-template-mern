import React, { useEffect, useState } from "react";
import bg from "../../assets/bg-x.png";
import { useDispatch, useSelector } from "react-redux";
import { clearState, sendFranchiseRequest } from "../../store/reducers/userReducer";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import './FranchiseForm.css'

const FranchiseForm = () => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    occupation: "",
    netWorth: "",
    preferredLocation: "",
    liquidAssets: "",
    howHear: "",
    notes: "",
    address:""
  });
  const dispatch = useDispatch();
  const { isAdded, loading } = useSelector((state) => state.user);
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
useEffect(() => {
  if (isAdded && state.name !== "" && state.email_ !== "" && state.phone_no !== "") {
    toast.success("Message Sent Successfully");
    setState({
      name: "",
    phone: "",
    email: "",
    city: "",
    occupation: "",
    netWorth: "",
    preferredLocation: "",
    liquidAssets: "",
    address: "",
    howHear: "",
    notes: "",
    });
    dispatch(clearState());
  }
}, [isAdded, state, dispatch]);


  const submit = (e) => {
    e.preventDefault();
    dispatch(sendFranchiseRequest(state));
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="f-container">
      <div className="bg-[#87a972] text-white lg:w-[60%] lg:h-[60vh]  flex justify-end rounded-e-[20px] f-container-a">
        <div className=" py-20 lg:px-32 text-center">
          <h1 className="text-[35px]">Interested in Franchising?</h1>
          <p className="text-[20px]">Contact us below</p>
        </div>
      </div>
      <div className="f-container-b">
        {/* <img src={bg} alt="" className="w-[95%]" /> */}
        <div className="f-container-b1">
          <form onSubmit={submit} className="px-8 pt-10 flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
              required
                type="text"
                name="name"
                id="name"
                onChange={inputHandle}
                value={state.name}
                placeholder="Full Name"
                className=" text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3  w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
              required
                type="text"
                name="phone"
                id="phone_no"
                onChange={inputHandle}
                value={state.phone_no}
                placeholder="Phone #"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
              required
                type="text"
                name="email"
                id="email_"
                onChange={inputHandle}
                value={state.email}
                placeholder="Email address"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
              required
                type="text"
                name="city"
                id="city"
                onChange={inputHandle}
                value={state.city}
                placeholder="City/State of Residence"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
              required
                type="text"
                name="occupation"
                id="current_occupation"
                onChange={inputHandle}
                value={state.occupation}
                placeholder="Current Occupation"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
              required
                type="text"
                name="netWorth"
                id="net_worth"
                onChange={inputHandle}
                value={state.netWorth}
                placeholder="Net Worth"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
              required
                type="text"
                name="liquidAssets"
                id="liquid_assests"
                onChange={inputHandle}
                value={state.liquidAssets}
                placeholder="Liquid assests"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
              required
                type="text"
                name="preferredLocation"
                id="preferred_location"
                onChange={inputHandle}
                value={state.preferredLocation}
                placeholder="Preferred Location"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <input
              required
                type="text"
                name="address"
                id="address"
                onChange={inputHandle}
                value={state.address}
                placeholder="Provide an address(if applicable)"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-2 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
              <input
              required
                type="text"
                name="howHear"
                id="reference"
                onChange={inputHandle}
                value={state.howHear}
                placeholder="How did you hear about us?"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3 w-[300px] lg:w-[350px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"
              />
            </div>
            <div className="flex flex-col  gap-5 ">
              <textarea
              required
                name="notes"
                id="notes"
                cols="30"
                rows="5"
                onChange={inputHandle}
                value={state.notes}
                placeholder="Notes"
                className="text-[14px] border-[1px] border-[#BDBDBD] px-4 py-3 w-full rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F] resize-none"
              ></textarea>
              <button className="bg-[#3f691f] text-white w-full rounded-[5px] py-3 text-[14px]">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;
