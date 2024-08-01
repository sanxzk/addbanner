import { saveBanner } from "@/utility/Banner";
import { Banner } from "@/utility/Types";
import React, { useState } from "react";

const emptyBanner: Banner = {
  id: null,
  title: "",
  description: "",
  imageUrl: "",
  callToActionText: "",
  callToActionLink: "",
};

const AddBannerModal = ({
  id,
  bannerData,
  close: handleModalClose,
}: {
  id: null | string;
  close: () => void;
  bannerData: Banner | null;
}) => {
  const [formValues, setFormValues] = useState<Banner>(
    bannerData || emptyBanner
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { title, description, callToActionText, callToActionLink, imageUrl } =
      formValues;

    if (
      !title ||
      !description ||
      !callToActionText ||
      !callToActionLink ||
      !imageUrl
    ) {
      alert("All fields are required and an image URL must be provided.");
      return;
    }

    // Prepare banner data
    const bannerData: Banner = {
      id: id || `banner-${Date()}`, // Include id if editing, otherwise null for new banners
      title,
      description,
      callToActionText,
      callToActionLink,
      imageUrl: imageUrl,
    };

    // Handle saving bannerData to your server or database
    try {
      saveBanner(bannerData);

      // Reset form and state
      setFormValues({
        id: null,
        title: "",
        description: "",
        callToActionText: "",
        callToActionLink: "",
        imageUrl: "",
      });

      handleModalClose(); // Close the modal
      window.location.reload()
    } catch (error) {
      console.error("Error saving banner:", error);
      alert("Error saving banner. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => handleModalClose()}
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold text-center mb-6">
          {id === null ? "Add New Banner" : "Edit Banner"}
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={formValues.title}
              onChange={handleChange}
              placeholder="Enter the title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              id="description"
              type="text"
              value={formValues.description}
              onChange={handleChange}
              placeholder="Enter the description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="callToActionText"
              className="block text-sm font-medium text-gray-700"
            >
              Call to action text
            </label>
            <input
              id="callToActionText"
              type="text"
              value={formValues.callToActionText}
              onChange={handleChange}
              placeholder="Call to action text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="callToActionLink"
              className="block text-sm font-medium text-gray-700"
            >
              Call to action Link
            </label>
            <input
              id="callToActionLink"
              type="text"
              value={formValues.callToActionLink}
              onChange={handleChange}
              placeholder="Call to action Link"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Banner Image URL
            </label>
            <input
              id="imageUrl"
              type="text"
              value={formValues.imageUrl}
              onChange={handleChange}
              placeholder="Enter the image URL"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="  bg-violet-800 text-white px-4 py-2 rounded-md  hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {id === null ? "Add Banner" : "Update Banner"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBannerModal;
