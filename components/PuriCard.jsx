import Image from "next/image";
import styles from "../styles/PuriCard.module.css";
import Link from "next/link";

const PuriCard = ({ puri }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${puri._id}`} passHref>
      <Image src={puri.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{puri.title}</h1>
      <span className={styles.price}>Rs.{puri.prices[0]}</span>
      <p className={styles.desc}>
        {puri.desc}
      </p>
    </div>  
  );
}; 

export default PuriCard;
