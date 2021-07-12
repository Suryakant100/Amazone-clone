import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute w-full bottom-0 h-32 bg-gradient-to-t from-gray-100 to-transparent z-20" />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img
              loading="lazy"
              src="https://links.papareact.com/gi1"
              alt="1-img"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://links.papareact.com/6ff"
              alt="1-img"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://links.papareact.com/7ma"
              alt="1-img"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNewLaunch/GW/Comingsoon/D25249523_IN_WLME_RedmiK19_NewLaunch_tallhero_1500x600._CB664270084_.jpg"
              alt="4-img"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Coupons/CouponCarnival-July21/GW/1500x600-coupons-hero._CB664170225_.jpg"
              alt="4-img"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
