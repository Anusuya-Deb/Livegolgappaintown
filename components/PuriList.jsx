import styles from "../styles/PuriList.module.css";
import PuriCard from "./PuriCard"

const PuriList = ({ puriList }  ) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST Golgappas IN TOWN</h1>
      <p className={styles.desc}>
      Indulge in our 18 delightful flavors, a harmonious blend of traditional and innovative tastes that will tantalize your taste buds. From the classic spiciness to the tangy allure of tamarind, each offering is meticulously prepared with the finest ingredients to ensure a delectable experience. Our expert chefs, masters of authentic Indian street taste with a contemporary touch, continuously explore new combinations, delivering a diverse selection to suit every palate - be it sweet or savory, mild or fiery. All flavors are crafted in-house, reflecting our commitment to excellence and passion for culinary artistry.
      </p>
      <div className={styles.wrapper}>
        {puriList.map((puri) => (
          <PuriCard key={puri._id} puri={puri} />
        ))}
      </div>
    </div>
  );
};

export default PuriList;
