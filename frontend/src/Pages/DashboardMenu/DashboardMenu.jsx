import React, { useEffect, useState } from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getAllOwnFranchiseSeries, getOwnMenu } from '../../store/reducers/franchiseReducer';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';

const DashboardMenu = () => {
  const {ownMenu,loading} = useSelector(state => state.franchise)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOwnMenu())
  }, [dispatch])
   

  const [selectedSeries, setSelectedSeries] = useState(null);

  const handleSeriesClick = (series) => {
    setSelectedSeries(series);
  };

  const handleBackClick = () => {
    setSelectedSeries(null);
  };

  if(loading){
    return <Loader/>
  }
  return (
    <div>
      <Sidebar />
      <div className='ml-[27%]'>
        <div>
          <div className='bg-white shadow-lg w-[90%] p-10 rounded-lg'>
            {selectedSeries ? (
              <div>
                <div className='flex justify-between pb-10 items-center'>
                <h2 className='text-[#3f691f] text-[24px] font-bold '>
                  Drinks of {selectedSeries?.name}
                </h2>
                <button
                    onClick={handleBackClick}
                    className=' bg-[#3f691f] flex items-center gap-2 text-white py-2 px-2 font-semibold rounded-lg h-[42px] w-[150px] border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300'
                  ><IoMdArrowRoundBack />
                    Back to Menu
                  </button>
                </div>
               
                <div className='grid grid-cols-2 gap-8 ml-20'>
                  {
                    selectedSeries?.drinks?.length === 0 ? <h1 className='text-center text-xl mx-auto w-full  mt-20'>No Drinks ,To add drinks Click Here <Link className='text-[#3f691f] underline' to={"/dashboard/add-drinks/"}>Drinks</Link></h1>:
                    selectedSeries.drinks.map((subSeries, index) => (
                    <div
                      key={index}
                      className='flex flex-col pt-3 items-center border border-[#00000027] w-[250px] rounded-xl h-[360px] relative'
                    >
                      <div>
                        <img
                          src={`${subSeries?.image}`}
                          alt={`${subSeries?.image}`}
                          className='h-[300px] object-cover'
                        />
                      </div>
                      <div className='drink_card_title mt-2'>
                        <h3>{subSeries.name}</h3>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            ) : (
              <div>
                <h1 className='text-[#3f691f] text-[24px] font-bold pb-8'>
                  All Series
                </h1>
                <div className='grid grid-cols-2 gap-8 ml-20'>
                  {ownMenu &&
                    ownMenu?.series?.length === 0 ? <h1 className='text-center text-xl mx-auto w-full  mt-20'>No Series ,To add Series Click Here <Link className='text-[#3f691f] underline' to={"/dashboard/addseries/"}>Series</Link></h1>:
                    
                    ownMenu?.series?.map((series, index) => (
                    <div
                      key={index}
                      className={`flex flex-col pt-3 items-center border ${
                        selectedSeries === series
                          ? 'border-[#3f691f]'
                          : 'border-[#00000027]'
                      } w-[250px] rounded-xl h-[360px] relative cursor-pointer`}
                      onClick={() => handleSeriesClick(series)}
                    >
                      <div>
                        <img
                          src={`${series?.image}`}
                          alt={`./images/${series?.image}`}
                          className='h-[300px] object-cover'
                        />
                      </div>
                      <div className='drink_card_title mt-2'>
                        <h3>{series.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
