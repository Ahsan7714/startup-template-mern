import React, { useEffect, useState } from 'react';
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import * as XLSX from 'xlsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNewsLetter,deleteAllNewsLetter, clearState } from "../../store/reducers/adminReducers";
import toast from 'react-hot-toast';

const AllNewsletter = () => {
  const dispatch = useDispatch();
  const {newsletters,isAllNewslettersDeleted}=useSelector(state=>state.admin)

  // Fetch all newsletters when the component mounts
  useEffect(() => {
    dispatch(getAllNewsLetter());
    clearState();
  }, [dispatch]);
  console.log('newsletterList:', newsletters); // Add this line

  const downloadExcel = () => {
    
    const worksheet = XLSX.utils.json_to_sheet(newsletters);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Newsletter');
    XLSX.writeFile(workbook, 'newsletter.xlsx');

    // After downloading, delete all newsletters
    dispatch(deleteAllNewsLetter());
    dispatch(getAllNewsLetter());
    toast.success('All newsletters deleted successfully');
  };
  useEffect(() => {
    if(isAllNewslettersDeleted){
      dispatch(getAllNewsLetter());
    }
  }, [dispatch,isAllNewslettersDeleted])

  return (
    <div>
      <Sidebar />
      <div className="ml-[35%] pt-5">
        <div className="bg-white shadow-2xl w-[70%] my-10 py-5 px-6 rounded-xl">
          <h1 className="text-[#3f691f] font-semibold text-[24px] pb-6 px-3">
            NewsLetter Emails
          </h1>
          <table className="w-full text-center">
            <thead className="text-[16px]">
              <tr>
                <th className="py-6">Id</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="text-[14px] rounded-lg">
              {
                newsletters?.length===0 ? <tr className="border-b border-[#00000041]"><td className="py-4">No data found</td></tr>:
                newsletters?.map((item, index) => (
                <tr key={index} className="border-b border-[#00000041]">
                  <td className="py-4">{item._id}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8">
            <button
              onClick={downloadExcel}
              className="bg-[#3f691f] text-white py-2 px-5 font-semibold rounded-lg border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300"
            >
              Download Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNewsletter;
