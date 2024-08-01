// src/components/BannerListItem.tsx
import React, { useState } from "react";
import { Banner } from "@/utility/Types";
import Image from "next/image";
import AddBannerModal from "./AddBannerModal";
import { deleteBanner } from "@/utility/Banner";

interface BannerListItemProps {
  banner: Banner;
}

const BannerListItem = ({ banner }: BannerListItemProps) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const closeEditModalHandler = () => {
    setShowEditModal(false);
  };

  const closeDeleteModalHandler = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="relative bg-violet-200 w-full m-4 md:w-1/2 lg:w-1/3 p-4 bg-gray-100 rounded-lg shadow-md mx-10 my-5">
      {/* Image */}
      <div className="relative mb-4">
        <div className="relative w-full h-32 mb-2">
          <Image
            src={banner.imageUrl}
            alt={banner.title}
            layout="fill"
            objectFit="cover"
            className=" rounded-lg"
          />
        </div>
        <p className="text-sm text-gray-600 truncate">
          <strong>Image Link: </strong>
          {banner.imageUrl}
        </p>
      </div>

      {/* Banner Details */}
      <div className="flex flex-col mb-4">
        <h1 className="text-xl font-bold mb-2 break-words">
          {" "}
          <strong> Title: </strong> {banner.title}
        </h1>
        <p className="text-base mb-4 break-words">
          {" "}
          <strong>Description: </strong> {banner.description}
        </p>
        <p className="text-sm text-gray-600 mb-4 break-words">
          <strong>Call to Action Text:</strong> {banner.callToActionText}
        </p>
        <p className="text-sm text-gray-600 break-words">
          <strong>Call to Action Link:</strong> {banner.callToActionLink}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setShowEditModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <AddBannerModal
          id={banner.id}
          bannerData={banner}
          close={closeEditModalHandler}
        />
      )}

      {/* Confirm Delete Modal */}
      {showDeleteModal && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this banner?</p>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => {
                  // Call delete handler here
                  deleteBanner(banner.id ? banner.id : "");
                  setShowDeleteModal(false);
                  window.location.reload();
                  
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={closeDeleteModalHandler}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerListItem;
