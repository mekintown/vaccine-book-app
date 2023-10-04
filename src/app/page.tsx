import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CardPane1 from "@/components/CardPane1";
import PromoteCard from "@/components/PromoteCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <PromoteCard />
    </main>
  );
}
