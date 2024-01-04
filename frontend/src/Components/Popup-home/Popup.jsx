import React,{useState,useEffect} from "react";
import popup from "../../../public/images/popup.png";
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addNewsLetter } from "../../store/reducers/newsLetterReducers";


const Popup = ({ onClose }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const handleSubscribe = async (e) => {
    e.preventDefault();
    console.log(email);
  
    try {
      // Dispatch the addNewsLetter action with the email
      const response = await dispatch(addNewsLetter({ email }));
  
      // Check if the response indicates success
      if (response.payload && response.payload.success) {
        // Show success toast
        toast.success('Successfully subscribed');
      } else {
        // Show error toast if the response does not indicate success
        toast.error('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      // Show error toast if an exception occurs
      toast.error('Failed to subscribe. Please try again.');
    }
  };
 

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <img src={popup} alt="" className="relative h-[40vh] lg:h-fit rounded-xl lg:rounded-3xl px-2 lg:px-0" />
      <IoClose className="absolute top-[32%] lg:top-[10%] right-[5%] lg:right-[26%] text-[24px] text-[#3f691f] cursor-pointer"  onClick={onClose}/>
      <div className="p-6  rounded-md  absolute flex flex-col gap-6 justify-center items-center">
        <p className="text-[#3f691f] text-[30px] lg:text-[40px] font-bold font-sans text-center">
          Join our newsletter
        </p>
        <p className="lg:text-[18px] w-[90%] text-center">
          For the latest launches, exclusive promotions, and insider news!
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col gap-8">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          className="text-[14px]  border-[1px] border-[#BDBDBD] px-4 py-3 w-[80%] lg:w-[400px] sm:w-[500px] rounded-[4px] outline-none text-[#4F4F4F] placeholder-[#4F4F4F]"

          />
        <button className="bg-[#3f691f] text-white py-3  px-3 font-semibold rounded-lg w-[80%] lg:w-[400px] border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300 "
           type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
