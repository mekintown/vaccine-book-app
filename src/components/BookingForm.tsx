"use client";
import { Dayjs } from "dayjs";
import { useState } from "react";
import LocationDateReserve from "./LocationDateReserve";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../interfaces";
import { addReservation } from "@/redux/features/bookSlice";

export default function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [hospital, setHospital] = useState("chulalongkorn");

  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (firstName && lastName && id && reserveDate) {
      const booking: BookingItem = {
        patientName: firstName,
        patientSurname: lastName,
        patientID: id,
        reservationDate: reserveDate.format("YYYY/MM/DD"),
        hospital: hospital,
      };
      dispatch(addReservation(booking));
    }
  };

  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault();
        makeReservation();
      }}
    >
      <div className="mt-10 space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full bg-white rounded-md border-0 py-1.5 indent-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full bg-white rounded-md border-0 py-1.5 indent-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ID
              </label>
              <div className="mt-2">
                <input
                  id="id"
                  name="id"
                  type="id"
                  autoComplete="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="block w-full bg-white rounded-md border-0 py-1.5 indent-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Hospital Date and Location
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <LocationDateReserve
                onDateChange={(value: Dayjs) => setReserveDate(value)}
                onHospitalChange={(value: string) => setHospital(value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Book
        </button>
      </div>
    </form>
  );
}
