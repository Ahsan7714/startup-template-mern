import React from 'react';
import popup from '../../../public/images/popup.png'

const Popup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <img src={popup} alt="" className='relative' />
      <div className="bg-transparent p-6 rounded-md  absolute">
        <p>This is a popup!</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
