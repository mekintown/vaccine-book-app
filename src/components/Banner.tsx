import styles from "@/components/banner.module.css"
import Image from "next/image";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <Image src={"/img/cover.jpg"} alt="cover" fill={true} objectFit="cover"/>
            <div className={styles.bannerTxt}>
                <h1>Protect Yourself and Others – Get Vaccinated Today!"</h1>
                <p>Elevate your health defenses with a simple yet powerful choice – vaccination. By getting vaccinated, you're not just shielding yourself from diseases, but also safeguarding your community. Our [Your Clinic/Hospital Name] experts are here to ensure you receive top-notch, safe vaccinations. Act now, prioritize health, and book your vaccination.</p>
            </div>
        </div>
    )
}

export default Banner;