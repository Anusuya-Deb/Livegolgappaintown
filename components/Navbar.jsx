import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {/* <div className={styles.callButton}> */}
          <Image src="/img/gollogo.webp" alt="" width="70" height="70" />
        {/* </div> */}
        <div className={styles.texts}>
          <div className={styles.text}>LiVeGoLgApPa</div>
          {/* <div className={styles.text}>012 345 678</div> */}
        </div>
      </div>
      <div className={styles.item}>
        
        <ul className={styles.list}>
        <Link href="/" passHref>
          <li className={styles.listItem}>Home</li>
        </Link>
          <li className={styles.listItem}>Login</li>
        </ul>
      </div>
    <Link href="/cart" passHref>
      <div className={styles.item}>
      {/* <div className={styles.account}>
          <Image src="/img/account.jpeg" alt="" width="30px" height="30px"  />
        </div> */}
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px"/>
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default Navbar;
