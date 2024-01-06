import React, { useEffect, useState } from "react";
import FranchiseForm from "../../Components/Franchise Form/FranchiseForm";
import { useDispatch, useSelector } from "react-redux";
import { clearState, login } from "../../store/reducers/franchiseReducer";
import Loader from "../../Components/Loader/Loader";
import toast from "react-hot-toast";

const Franchise = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const {isLogin,loading,error} = useSelector(state => state.franchise)
  
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
useEffect(() => {
  if (isLogin && state.email !== "" && state.password !== "") {
    setState({
      email: "",
      password: "",
    });
    toast.success("Login Successfully");
    dispatch(clearState());
  }else if(error){
    toast.error(error)
    dispatch(clearState());
  }
}, [isLogin, state, dispatch,error]);

  const submit = (e) => {
    e.preventDefault();
    dispatch( login(state))
  };
  if(loading){
    return <Loader/>
  }
  return (
    <div className="flex flex-col gap-20 my-32">
      <div className="flex flex-col items-center">
        <h1 className="text-[#3f691f] text-[45px] font-semibold text-center">
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
