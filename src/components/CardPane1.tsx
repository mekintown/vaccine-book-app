"use client";

import { useReducer } from "react";
import ProductCard from "./ProductCard";
import { RatingsAction } from "@/types";
import Link from "next/link";

const CardPane1 = () => {
  const ratingsReducer = (
    state: Map<string, number>,
    action: RatingsAction
  ) => {
    switch (action.type) {
      case "SET":
        const { name, rating } = action.payload;
        const updatedRatingsSet = new Map(state);
        updatedRatingsSet.set(name, rating !== null ? rating : 0);
        return updatedRatingsSet;
      case "DELETE":
        const { hospitalToDelete } = action.payload;
        const updatedRatingsDelete = new Map(state);
        updatedRatingsDelete.delete(hospitalToDelete);
        return updatedRatingsDelete;
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

  const mockHospitalRepo = [
    {
      hid: "001",
      txt: "Chulalongkorn Hospital",
      imgSrc: "/img/chulalongkornHospital.png",
    },
    {
      hid: "002",
      txt: "Rajavithi Hospital",
      imgSrc: "/img/rajavithiHospital.png",
    },
    {
      hid: "003",
      txt: "Thammasat University Hospital",
      imgSrc: "/img/thammasatUniversityHospital.png",
    },
  ];
  const handleRatingChange = (txt: string, newRating: number) => {
    dispatchRating({ type: "SET", payload: { name: txt, rating: newRating } });
  };

  const handleCardClick = (txt: string) => {
    dispatchRating({ type: "DELETE", payload: { hospitalToDelete: txt } });
  };

  return (
    <div className="flex items-stretch flex-col gap-4 m-4 ">
      <h1 className="text-black text-center text-3xl m-8">
        Collaborate with...
      </h1>
      {mockHospitalRepo.map((hospital) => (
        <Link href={`/hospital/${hospital.hid}`}>
          <ProductCard
            key={hospital.hid}
            txt={hospital.txt}
            imgSrc={hospital.imgSrc}
            ratings={ratings}
            handleRatingChange={handleRatingChange}
          />
        </Link>
      ))}
      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-2">Hospital Ratings:</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hospital Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.from(ratings)
              .sort((a, b) => b[1] - a[1])
              .map(([name, rating]) => (
                <tr key={name} onClick={() => handleCardClick(name)}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-black lg:w-60 xl:w-72">{name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-600">{rating}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardPane1;
