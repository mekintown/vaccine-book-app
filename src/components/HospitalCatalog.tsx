import Link from "next/link";
import ProductCard from "./ProductCard";
import { Hospital } from "@/types";

interface HospitalCatalogProps {
  hospitalJson: Promise<{ data: Hospital[] }>;
}

export default async function HospitalCatalog({
  hospitalJson,
}: HospitalCatalogProps) {
  const hospitalReady = await hospitalJson;
  return (
    <div className="flex items-stretch flex-col gap-4 m-4 ">
      <h1 className="text-black text-center text-3xl m-8">
        Collaborate with...
      </h1>
      {hospitalReady.data.map((hospital) => (
        <Link href={`/hospital/${hospital.id}`}>
          <ProductCard
            key={hospital.id}
            txt={hospital.name}
            imgSrc={hospital.picture}
          />
        </Link>
      ))}
    </div>
  );
}
