import React, { useState } from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar';
import { IoMdArrowRoundBack } from "react-icons/io";

const DashboardMenu = () => {
    const seriesData = [
        {
          name: "Puffle Waffle",
          image: "puffle waffle",
          subSeries: [
            { name: "Chocolate Puffle", image: "chocolate-puffle" },
            { name: "Strawberry Puffle", image: "strawberry-puffle" },
            { name: "Vanilla Puffle", image: "vanilla-puffle" },
          ],
        },
        {
          name: "Milk Tea",
          image: "milk tea",
          subSeries: [
            { name: "Classic Milk Tea", image: "milk tea" },
            { name: "Boba Milk Tea", image: "boba-milk-tea" },
            { name: "Honey Milk Tea", image: "honey-milk-tea" },
          ],
        },
        {
          name: "Cheese Cream",
          image: "cheese cream",
          subSeries: [
            { name: "Blueberry Cheese Cream", image: "blueberry-cheese-cream" },
            { name: "Matcha Cheese Cream", image: "matcha-cheese-cream" },
            { name: "Mango Cheese Cream", image: "mango-cheese-cream" },
          ],
        },
        {
          name: "Fresh Fruit Tea",
          image: "fresh fruit tea",
          subSeries: [
            { name: "Mixed Fruit Tea", image: "mixed-fruit-tea" },
            { name: "Watermelon Fruit Tea", image: "watermelon-fruit-tea" },
            { name: "Pineapple Fruit Tea", image: "pineapple-fruit-tea" },
          ],
        },
        {
          name: "Stormy",
          image: "stormy",
          subSeries: [
            { name: "Citrus Stormy", image: "citrus-stormy" },
            { name: "Berry Stormy", image: "berry-stormy" },
            { name: "Passionfruit Stormy", image: "passionfruit-stormy" },
          ],
        },
        {
          name: "Yakult",
          image: "yakult",
          subSeries: [
            { name: "Original Yakult", image: "original-yakult" },
            { name: "Strawberry Yakult", image: "strawberry-yakult" },
            { name: "Mango Yakult", image: "mango-yakult" },
          ],
        },
        {
          name: "Pure Milk",
          image: "pure milk",
          subSeries: [
            { name: "Whole Milk", image: "whole-milk" },
            { name: "Skimmed Milk", image: "skimmed-milk" },
            { name: "Chocolate Milk", image: "chocolate-milk" },
          ],
        },
        {
          name: "Tea",
          image: "tea",
          subSeries: [
            { name: "Green Tea", image: "green-tea" },
            { name: "Black Tea", image: "black-tea" },
            { name: "Herbal Tea", image: "herbal-tea" },
            { name: "Chai Tea", image: "chai-tea" },
            { name: "Oolong Tea", image: "oolong-tea" },
          ],
        },
        {
          name: "Coffee",
          image: "coffee",
          subSeries: [
            { name: "Latte", image: "latte" },
            { name: "Cappuccino", image: "cappuccino" },
            { name: "Espresso", image: "espresso" },
            { name: "Mocha", image: "mocha" },
            { name: "Americano", image: "americano" },
          ],
        },
        {
          name: "Blended",
          image: "blended",
          subSeries: [
            { name: "Fruit Blended", image: "fruit-blended" },
            { name: "Coffee Blended", image: "coffee-blended" },
            { name: "Chocolate Blended", image: "chocolate-blended" },
          ],
        },
      ];
      

  const [selectedSeries, setSelectedSeries] = useState(null);

  const handleSeriesClick = (series) => {
    setSelectedSeries(series);
  };

  const handleBackClick = () => {
    setSelectedSeries(null);
  };

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
                  Drinks of {selectedSeries.name}
                </h2>
                <button
                    onClick={handleBackClick}
                    className=' bg-[#3f691f] flex items-center gap-2 text-white py-2 px-2 font-semibold rounded-lg h-[42px] w-[150px] border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300'
                  ><IoMdArrowRoundBack />
                    Back to Menu
                  </button>
                </div>
               
                <div className='grid grid-cols-2 gap-8 ml-20'>
                  {selectedSeries.subSeries.map((subSeries, index) => (
                    <div
                      key={index}
                      className='flex flex-col pt-3 items-center border border-[#00000027] w-[250px] rounded-xl h-[360px] relative'
                    >
                      <div>
                        <img
                          src={`../images/${subSeries?.image}.png`}
                          alt={`./images/${subSeries?.image}.png`}
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
                  {seriesData.map((series, index) => (
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
                          src={`../images/${series?.image}.png`}
                          alt={`./images/${series?.image}.png`}
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
