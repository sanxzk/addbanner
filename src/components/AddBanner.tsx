"use client";
import React, { useState } from "react";
import AddBannerModal from "./AddBannerModal";

const AddBanner = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenMOdal = () => {
    setOpenModal(true);
  };
  const handleCloseMOdal = () => {
    setOpenModal(false);
  };
  return (
    <div className="flex w-100 flex-col">
      <button
        onClick={handleOpenMOdal}
        className="m-auto my-20 bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 px-7 rounded"
      >
        Add Banner
      </button>

      {/* Add Banner Modal */}
      {openModal && <AddBannerModal bannerData={null} id={null} close={handleCloseMOdal} />}
    </div>
  );
};

export default AddBanner;
