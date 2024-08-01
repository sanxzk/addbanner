"use client";
import AddBanner from "@/components/AddBanner";
import BannerListItem from "@/components/BannerListItem";
import { fetchAllBanners } from "@/utility/Banner";
import { Banner } from "@/utility/Types";
import React, { useEffect, useState } from "react";

const page = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const temp: Banner[] = fetchAllBanners();
    setBanners(temp);
  }, []);
  return (
    <div>
      <AddBanner />
      <div className="flex flex-row flex-wrap justify-center">
        {banners.map((banner: Banner) => {
          return <BannerListItem banner={banner} />;
        })}
      </div>
    </div>
  );
};

export default page;
