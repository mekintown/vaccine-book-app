import Image from "next/image";

function HospitalDetailPage({ params }: { params: { hid: string } }) {
  const mockHospitalRepo = new Map();

  mockHospitalRepo.set("001", {
    txt: "Chulalongkorn Hospital",
    imgSrc: "/img/chulalongkornHospital.png",
  });
  mockHospitalRepo.set("002", {
    txt: "Rajavithi Hospital",
    imgSrc: "/img/rajavithiHospital.png",
  });
  mockHospitalRepo.set("003", {
    txt: "Thammasat University Hospital",
    imgSrc: "/img/thammasatUniversityHospital.png",
  });
  return (
    <main>
      <div className="flex bg-slate-50 h-screen w-screen justify-center items-center">
        <div className="flex gap-5 bg-white rounded-2xl p-7 shadow-lg">
          <Image
            src={mockHospitalRepo.get(params.hid).imgSrc}
            alt="Hospital Picture"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-lg w-[30%] flex-1"
          />
          <h2 className="text-2xl text-black">
            {mockHospitalRepo.get(params.hid).txt}
          </h2>
        </div>
      </div>
    </main>
  );
}

export default HospitalDetailPage;
