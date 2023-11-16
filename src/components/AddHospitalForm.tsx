import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddHospitalForm() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";
    console.log("Yeah");
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");

    try {
      await dbConnect();
      debugger;
      const hospital = await Hospital.create({
        name,
        address,
        district,
        province,
        postalcode,
        tel,
        picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("hospitals");
    redirect("/hospital");
  };

  return (
    <form action={addHospital}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Create new hospital
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please provide details of the hospital.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="bg-white block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="address"
                  className="bg-white block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600  focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="district"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                District
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="district"
                  id="district"
                  autoComplete="district"
                  className="bg-white block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="province"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="province"
                  id="province"
                  autoComplete="province"
                  className="bg-white block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="postalcode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Postal Code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalcode"
                  id="postalcode"
                  autoComplete="postalcode"
                  className="bg-white block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="tel"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tel
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="tel"
                  id="tel"
                  autoComplete="tel"
                  className="bg-white block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="picture"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Picture
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="picture"
                  id="picture"
                  autoComplete="url"
                  className="bg-white block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-auto flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
