import React, { useState } from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import stripesbg from '../../assets/Stripesbg.png'
import Carasoul from "../../Components/Contact-carasoul/Carasoul";



const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
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
    <div className=" flex flex-col">
      <div className="flex  items-center justify-center py-8">
<Carasoul/>

      </div>
      <div>
        <img
          src={stripesbg}
          alt=""
          className="relative h-[80vh] lg:h-[120vh] w-full"
        />
        <form
          onSubmit={submit}
          className="flex flex-col items-center   gap-14 absolute top-[45%] sm:top-[40%] lg:top-[75%] px-[10%] sm:left-[18%] lg:left-[20%]"
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
            <button className="bg-[#3f691f] text-white w-[300px] lg:w-[500px] sm:w-[500px] py-2 rounded-[5px] hover:bg-[#6bb532d9] text-[16px]">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
