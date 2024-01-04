import React, { useState } from "react";
import FranchiseForm from "../../Components/Franchise Form/FranchiseForm";

const Franchise = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
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
    <div className="flex flex-col gap-20 my-32">
      <div className="flex flex-col items-center">
        <h1 className="text-[#3f691f] text-[45px] font-semibold mx-6 text-center">
          Login to your franchise account
        </h1>
        <form
          onSubmit={submit}
          className="flex flex-col gap-4 py-20 justify-center items-center"
        >
          <h1 className="mr-[88%] text-[18px] text-[#3f691f]">Login</h1>
          <input
            type="text"
            name="email"
            id="email"
            onChange={inputHandle}
            value={state.email}
            placeholder="Email Address"
            className="border border-[#c4c4c4] px-4 py-2 w-[300px] lg:w-[400px] sm:w-[500px] rounded-[5px] outline-none text-[#3f691f] placeholder-[#3f691f]"
          />
          <input
            type="password"
            name="password"
            id="password"
            onChange={inputHandle}
            value={state.password}
            placeholder="Password"
            className="border border-[#c4c4c4] px-4 py-2 w-[300px] lg:w-[400px] sm:w-[500px] rounded-[5px] outline-none text-[#3f691f] placeholder-[#3f691f]"
          />
          <button className="bg-[#3f691f] text-white w-[300px] lg:w-[400px] sm:w-[500px] py-2 rounded-[5px] hover:bg-[#6bb532d9] text-[16px] ">
            Login
          </button>
          <p className="text-[#4F4F4F]">Forgot password?</p>
        </form>
      </div>
      <FranchiseForm/>
    </div>
  );
};

export default Franchise;
