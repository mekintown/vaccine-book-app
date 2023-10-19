import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="sticky top-0 z-10 bg-white h-10 w-[100vw] flex justify-between p-2 drop-shadow-md">
      <div className="flex gap-4">
        {!session ? (
          <Link href={"/api/auth/signin"} className="text-black">
            Sign In
          </Link>
        ) : (
          <Link href={"/api/auth/signout"} className="text-black">
            Sign Out
          </Link>
        )}
      </div>
      <nav className="flex gap-4">
        <Link href={"/"} className="text-black">
          Home
        </Link>
        <Link href={"/booking"} className="text-black">
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
