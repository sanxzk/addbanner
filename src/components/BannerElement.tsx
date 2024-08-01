// src/components/BannerElement.tsx
import { Banner } from "@/utility/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerElement = ({ banner }: { banner: Banner }) => {
  return (
    <div className="relative w-full sm:w-3/4 mx-auto h-64 flex items-center justify-center overflow-hidden">
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={banner.imageUrl}
          alt={banner.title}
          layout="fill"
          objectFit="cover"
          className="opacity-90" // Add transparency
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 bg-gray-800 bg-opacity-60 text-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-2">{banner.title}</h1>
        <p className="text-lg mb-4">{banner.description}</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-900">
          <Link href={banner.callToActionLink}>
            {banner.callToActionText}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BannerElement;
