import React from 'react'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import './Carasoul.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return (
        <div className='w-full justify-center items-center '>
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  showArrows={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all 1s"
  transitionDuration={500}
  containerClass="carousel-container"
  deviceType={responsive.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px "
>
{data.map((item, index) => (
  <img key={index} src={item.img} alt={`slide-${index}`} className='h-[320px] lg:w-[360px] px-1 object-cover w-full ' />
))}

</Carousel>
          
        </div>
      );
}

export default Carasoul