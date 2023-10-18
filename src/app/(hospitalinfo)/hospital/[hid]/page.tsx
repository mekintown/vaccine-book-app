import getHospital from "@/libs/getHospital";
import Image from "next/image";

async function HospitalDetailPage({ params }: { params: { hid: string } }) {
  const { data } = await getHospital(params.hid);
  return (
    <main>
      <div className="flex bg-slate-50 h-screen w-screen justify-center items-center">
        <div className="flex gap-5 bg-white rounded-2xl p-7 shadow-lg">
          <Image
            src={data.picture}
            alt="Hospital Picture"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-lg w-[30%] flex-1"
          />
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl text-black">{data.name}</h2>
            <div>
              <h1 className="text-base text-black">{data.address}</h1>
              <h1 className="text-base text-black">{data.province}</h1>
              <h1 className="text-base text-black">{data.postalcode}</h1>
              <h1 className="text-base text-black">{data.tel}</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HospitalDetailPage;
