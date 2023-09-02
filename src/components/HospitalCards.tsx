import Card from "./Card";
import ProductCard from "./ProductCard";

const HospitalCards = () => {
  return (
    <div className="flex items-stretch flex-col gap-4 m-4">
      <h1 className="text-black text-center text-3xl m-8">
        Collaborate with...
      </h1>
      <ProductCard
        imgSrc="/img/chulalongkornHospital.png"
        txt="Chulalongkorn Hospital"
      />
      <ProductCard
        imgSrc="/img/rajavithiHospital.png"
        txt="Rajavithi Hospital"
      />
      <ProductCard
        imgSrc="/img/thammasatUniversityHospital.png"
        txt="Thammasat University Hospital"
      />
    </div>
  );
};

export default HospitalCards;
