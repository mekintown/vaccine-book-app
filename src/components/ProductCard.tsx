import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

interface Props {
  imgSrc: string;
  txt: string;
  ratings: Map<string, number>;
  handleRatingChange: Function;
}

const ProductCard = ({ imgSrc, txt, ratings, handleRatingChange }: Props) => {
  return (
    <InteractiveCard>
      <div className="col-span-2 text-black flex justify-center flex-col">
        <h2 className="text-2xl font-medium tracking-wide">{txt}</h2>
        <Rating
          name="half-rating"
          defaultValue={ratings.get(txt)}
          precision={0.5}
          onChange={(e, newRating) => {
            e.stopPropagation();
            handleRatingChange(txt, newRating);
          }}
        />
      </div>
      <div className="relative">
        <Image
          src={imgSrc}
          alt="hospital"
          className="object-contain rounded-2xl"
          fill={true}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw"
        />
      </div>
    </InteractiveCard>
  );
};

export default ProductCard;
