import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CardPane1 from "@/components/CardPane1";

export default function Home() {
  return (
    <main>
      <Banner />
      <CardPane1 />
    </main>
  );
}
