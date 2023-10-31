import { useAppSelector } from "@/redux/store";

export default function Home() {
  const booking = useAppSelector((state) => state.bookSlice.booking);

  return <div>{booking ? "a" : "Vaccine Booking”"}</div>;
}
