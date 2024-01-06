import React, { useEffect, useState } from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import stripesbg from "../../assets/Stripesbg.png";
import Carasoul from "../../Components/Contact-carasoul/Carasoul";
import { useDispatch, useSelector } from "react-redux";
import { addContactUs, clearState } from "../../store/reducers/userReducer";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { isAdded, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      isAdded &&
      state.name !== "" &&
      state.email !== "" &&
      state.message !== ""
    ) {
      toast.success("Message Sent Successfully");
      setState({
        name: "",
        email: "",
        message: "",
      });
      dispatch(clearState());
    }
  }, [isAdded, state, dispatch]);

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(addContactUs(state));
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" flex flex-col mb-10">
      <div className="flex  items-center justify-center py-8">
        <Carasoul />
      </div>
      <div className="h-[70vh] lg:h-[100vh]">
        <img
          src={stripesbg}
          alt=""
          className="relative   lg:h-[100vh] w-full"
        />
        <form
          onSubmit={submit}
          className="relative flex flex-col items-center justify-center gap-14  left-1/2   transform -translate-x-1/2 -translate-y-full lg:pb-20 pb-10 lg:-translate-y-full"
        >
          <h1 className="text-[#3f691f] text-[40px] font-extrabold ">
            CONTACT US
          </h1>
          <div className="flex flex-col gap-8 ">
            <input
              type="text"
              name="name"
              id="name"
              onChange={inputHandle}
              value={state.name}
              required
              placeholder="Full Name"
              className="border border-[#c4c4c4] px-3 py-2 w-[300px] lg:w-[500px] sm:w-[500px] xl:w[600px] rounded-[5px] outline-none text-[#929292]"
            />
            <input
              type="text"
              name="email"
              id="email"
              onChange={inputHandle}
              value={state.email}
              placeholder="Email"
              className="border border-[#c4c4c4] px-4 py-2 w-[300px] lg:w-[500px] sm:w-[500px] rounded-[5px] outline-none text-[#929292]"
            />
            <textarea
              name="message"
              id="message"
              onChange={inputHandle}
              value={state.message}
              cols="10"
              rows="5"
              placeholder="Message"
              className="border border-[#c4c4c4] px-4 py-2 w-[300px] lg:w-[500px] sm:w-[500px] rounded-[5px] resize-none outline-none text-[#929292]"
            ></textarea>
            <button className="bg-[#3f691f] text-white w-[300px] lg:w-[500px] sm:w-[500px] py-3 rounded-[5px] hover:bg-[#6bb532d9] text-[16px]  shadow-md transition-transform transform-gpu active:scale-95">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
