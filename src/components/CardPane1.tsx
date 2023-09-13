"use client";

import { useReducer, useState } from "react";
import ProductCard from "./ProductCard";

const CardPane1 = () => {
  const ratingsReducer = (
    state: Map<string, number>,
    action: { type: string; payload: { name: string; rating: number } }
  ) => {
    switch (action.type) {
      case "SET":
        const { name, rating } = action.payload;
        const updatedRatings = new Map(state);
        updatedRatings.set(name, rating);
        return updatedRatings;
      default:
        return state;
    }
  };

  const initialRatings = new Map([
    ["Chulalongkorn Hospital", 0],
    ["Rajavithi Hospital", 0],
    ["Thammasat University Hospital", 0],
  ]);

  const [ratings, dispatchRating] = useReducer(ratingsReducer, initialRatings);

  const handleRatingChange = (txt: string, newRating: number) => {
    dispatchRating({ type: "SET", payload: { name: txt, rating: newRating } });
  };

  return (
    <div className="flex items-stretch flex-col gap-4 m-4 ">
      <h1 className="text-black text-center text-3xl m-8">
        Collaborate with...
      </h1>
      <ProductCard
        imgSrc="/img/chulalongkornHospital.png"
        txt="Chulalongkorn Hospital"
        ratings={ratings}
        handleRatingChange={handleRatingChange}
      />
      <ProductCard
        imgSrc="/img/rajavithiHospital.png"
        txt="Rajavithi Hospital"
        ratings={ratings}
        handleRatingChange={handleRatingChange}
      />
      <ProductCard
        imgSrc="/img/thammasatUniversityHospital.png"
        txt="Thammasat University Hospital"
        ratings={ratings}
        handleRatingChange={handleRatingChange}
      />
    </div>
  );
};

export default CardPane1;
