import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/BannerImage/Football.webp"
import img2 from "../../../assets/BannerImage/Cricket.jfif"
import img3 from "../../../assets/BannerImage/Bolibol.jfif"
import img4 from "../../../assets/BannerImage/Hadudu.jpg"
import img5 from "../../../assets/BannerImage/Hocky.jfif"
import img6 from "../../../assets/BannerImage/tennisjpg.jpg"

const Banner = () => {
  return (
    <div className=' ' >
 <Carousel className='' autoPlay={Boolean}>
                <div>
                    <img src={img1} className='h-full' />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
</div>
  );
};

export default Banner;