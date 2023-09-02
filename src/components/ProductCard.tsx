import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface Props {
  imgSrc: string;
  txt: string;
}

const ProductCard = ({ imgSrc, txt }: Props) => {
  return (
    <InteractiveCard>
      <div className="col-span-2 text-black flex justify-center flex-col">
        <h2 className="text-2xl font-medium tracking-wide">{txt}</h2>
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
