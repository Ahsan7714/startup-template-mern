import React from 'react'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import Slider from "react-slick";
import './Carasoul.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carasoul = () => {
    const data = [
        {
            img: img1, // Use the imported variable directly
          },
          {
            img: img2, // Use the imported variable directly
          },
          {
            img: img3, // Use the imported variable directly
          },
          {
            img: img4, // Use the imported variable directly
          },
          {
            img: img1, // Use the imported variable directly
          },
        
      ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <button style={{ display: 'none' }} />,
        responsive: [
            {
              breakpoint: 768, // for screens smaller than 768px
              settings: {
                slidesToShow: 3,
              },
            },
          ],
      };
      return (
        <div className='w-full '>
          <Slider {...settings} className="slick-hide-next">
            {data.map((d) => (
              <div key={d} className="bg-white h-[0px] text-black ">
                <div className='  flex justify-center items-center gap-4 '>
                  <img src={d.img} alt="" className="h-[200px] w-[250px] lg:h-[300px] lg:w-[300px] rounded-sm flex gap-4 px-1 object-cover"/>
                </div>
              </div>
            ))}
          </Slider>
          
        </div>
      );
}

export default Carasoul