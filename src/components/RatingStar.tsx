"use client";

import { Rating } from "@mui/material";

interface Props {
  ratings: Map<string, number>;
  txt: string;
  handleRatingChange: Function;
}

function RatingStar({ ratings, txt, handleRatingChange }: Props) {
  return (
    <div>
      <Rating
        name="half-rating"
        value={ratings.get(txt) || 0}
        precision={0.5}
        onChange={(e, newRating) => {
          e.stopPropagation();
          handleRatingChange(txt, newRating);
        }}
      />
    </div>
  );
}

export default RatingStar;
