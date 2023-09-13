"use client";

import Image from "next/image";
import { useState } from "react";

const Banner = () => {
  const [coverImgIdx, setCoverImgIdx] = useState(0);

  const coverImagesSrc = [
    "/img/cover0.jpg",
    "/img/cover1.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
  ];

  const onBannerClick = () => {
    setCoverImgIdx((coverImgIdx + 1) % coverImagesSrc.length);
  };
  return (
    <div className="relative shadow-xl" onClick={() => onBannerClick()}>
      <Image
        className="z-[-1] object-cover"
        src={coverImagesSrc[coverImgIdx]}
        alt="cover"
        fill={true}
      />
      <div className="grid grid-cols-3  p-10 min-h-[70vh] gap-10">
        <div className="col-span-2 self-center flex flex-col gap-5">
          <h1 className="font-bold text-6xl text-white tracking-wide">
            Protect Yourself and Others – Get Vaccinated Today!
          </h1>
          <p className="text-white">
            Elevate your health defenses with a simple yet powerful choice –
            vaccination. By getting vaccinated, you're not just shielding
            yourself from diseases, but also safeguarding your community. Our
            experts are here to ensure you receive top-notch, safe vaccinations.
            Act now, prioritize health, and book your vaccination.
          </p>
        </div>
        <div className="relative font-medium">
          <Image
            src={"/img/vaccination.svg"}
            alt="cover"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
