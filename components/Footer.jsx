import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/pic5.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YEAH!!WE DID IT.THE LIVEGOLGAPPA, WELL PREPARED CHATPATTA GOLGAPPAZZZ.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CUSTOMER CARE</h1>
          <p className={styles.text}>
            {/* 1654 R. Don Road #304. */}
            {/* <br /> NewYork, 85022 */}
            <br /> +91 8005825782
          </p>
          <p className={styles.text}>
            {/* 2356 K. Laquie Rd #235.
            <br /> NewYork, 85022 */}
            <br /> +91 8107182196
          </p>
          <p className={styles.text}>
            {/* 1614 E. Erwin St #104.
            <br /> NewYork, 85022 */}
            <br /> livegolgappa@gmail.com
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MON-SUN
            <br /> 9:00–12:00
          </p>
          {/* <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
