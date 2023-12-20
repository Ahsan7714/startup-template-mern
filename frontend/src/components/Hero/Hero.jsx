import './Hero.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsThreeDots } from "react-icons/bs";
const Hero = () => {
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
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='hero'>
        <img src="./images/hero.png" alt="" className='hero_image' />

        <div className="instagram_carasoule_section">
        <h1 className='hero_heading'>Sourcing high quality tea from around the world</h1>
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  showArrows={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all 1s"
  transitionDuration={500}
  containerClass="carousel-container"
  deviceType={responsive.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px "
>
  <img src="./images/insta_hero_1.png" alt="" />
    <img src="./images/insta_hero_2.png" alt="" />
    <img src="./images/insta_hero_3.png" alt="" />
    <img src="./images/insta_hero_4.png" alt="" />
    <img src="./images/insta_hero_5.png" alt="" />

</Carousel>
<div className="instagram_card">
<a href="https://www.instagram.com/rbteausa/" target='top'>
    <h2>Follow us on <span className='special'>Instagram</span> </h2>
    <div className="card_container">
        <div className="left">
            <img src="./images/insta_profile_logo.png" alt="" />
        </div>
        <div className="right">
            <div className="right_top">
                <span>
                    rbteausa
                </span>
                <button>Follow</button>
                <button>Message</button>
                <BsThreeDots />

            </div>
            <div className="right_bottom">
                <span>765 posts</span>
                <span>20.4k followers</span>
                <span>269 following</span>
            </div>
        </div>
    </div>
    </a>
</div>
        </div>
    </div>
  )
}

export default Hero