import CardPane1 from "@/components/CardPane1";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

function Hospital() {
  const hospitals = getHospitals();
  return (
    <main>
      <Suspense
        fallback={
          <p>
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>
    </main>
  );
}

export default Hospital;
