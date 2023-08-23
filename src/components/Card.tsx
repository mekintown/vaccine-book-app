import styles from "@/components/card.module.css"
import Image from "next/image";

type Props = {
    imgSrc: string;
    txt: string;
};

const Card = ({imgSrc, txt} : Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <Image src={imgSrc} alt="vaccination" fill={true} objectFit="cover"/>
            </div>
            <p>{txt}</p>
        </div>
    )
}

export default Card;