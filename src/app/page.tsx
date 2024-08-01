// src/app/page.tsx
"use client";
import BannerElement from "@/components/BannerElement";
import { fetchAllBanners } from "@/utility/Banner";
import { Banner } from "@/utility/Types";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Page = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const temp: Banner[] = fetchAllBanners();
    setBanners(temp);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: true,
    swipeToSlide: true,
    afterChange: function (index:number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    arrows: false,
  };

  if(banners.length === 0)
  {
    return <h1 className="text-center text-4xl my-24 font-bold" >Nothing to show!</h1>
  }
  return (
    <div className="my-4">
      <Slider {...settings}>
        {banners.map((banner: Banner, index: number) => (
          <BannerElement key={index} banner={banner} />
        ))}
      </Slider>
    </div>
  );
};

export default Page;
