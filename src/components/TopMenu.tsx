import Image from "next/image";
import Link from "next/link";

export default function TopMenu() {
    return (
        <div className="sticky top-0 z-10 bg-white h-10 w-[100vw] flex justify-between p-2 drop-shadow-md">
            <div>
                <Image src={"/img/logo.svg"} alt="logo" width={0} height={0} sizes="100vh" className="h-[100%] w-auto"></Image>
            </div>
            <nav className="flex gap-4">
                <Link href={"/"} className="text-black">Home</Link>
                <Link href={"/booking"} className="text-black">Booking</Link>
            </nav>
        </div>
    )
}