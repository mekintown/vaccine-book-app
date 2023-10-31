import LocationDateReserve from "@/components/LocationDateReserve";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useState } from "react";
import { Dayjs } from "dayjs";
import BookingForm from "@/components/BookingForm";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  const createdAt = new Date(profile.data.createdAt);

  return (
    <div className="px-48 lg:px-64">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 border-b border-gray-900/10">
        <div>
          <h2 className="block text-sm font-medium leading-6 text-gray-900">
            Name: {profile.data.name}
          </h2>
          <h2 className="block text-sm font-medium leading-6 text-gray-900">
            Email: {profile.data.email}
          </h2>
          <h2 className="block text-sm font-medium leading-6 text-gray-900">
            Tel: {profile.data.tel}
          </h2>
          <h2 className="block text-sm font-medium leading-6 text-gray-900">
            Member Since: {createdAt.toString()}
          </h2>
        </div>
      </div>
      <BookingForm />
    </div>
  );
}
