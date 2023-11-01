import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import CardPane1 from "@/components/CardPane1";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import getUserProfile from "@/libs/getUserProfile";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

async function Hospital() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);

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
        {profile.data.role === "admin" ? (
          <div className="border-t border-gray-900/10 mx-4 my-8 p-4  bg-white">
            <AddHospitalForm />
          </div>
        ) : null}
      </Suspense>
    </main>
  );
}

export default Hospital;
