import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="sticky top-0 z-10 bg-white h-16 w-[100vw] flex justify-between items-center px-6 drop-shadow-md">
      <div className="flex gap-4">
        {!session ? (
          <Link
            href={"/api/auth/signin"}
            className="text-gray-800 hover:text-gray-500  rounded-md px-3 py-2 text-sm font-medium"
          >
            Sign In
          </Link>
        ) : (
          <Link
            href={"/api/auth/signout"}
            className="text-gray-800 hover:text-gray-500  rounded-md px-3 py-2 text-sm font-medium"
          >
            Sign Out
          </Link>
        )}
        <Link
          href={"mybooking"}
          className="text-gray-800 hover:text-gray-500  rounded-md px-3 py-2 text-sm font-medium"
        >
          My Booking
        </Link>
      </div>
      <nav className="flex gap-4">
        <Link
          href={"/"}
          className="text-gray-800 hover:text-gray-500  rounded-md px-3 py-2 text-sm font-medium"
        >
          Home
        </Link>
        <Link
          href={"/booking"}
          className="text-gray-800 hover:text-gray-500 rounded-md px-3 py-2 text-sm font-medium"
        >
          Booking
        </Link>
        <Image
          src={"/img/logo.svg"}
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
          className="h-[100%] w-auto"
        ></Image>
      </nav>
    </div>
  );
}
