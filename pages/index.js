import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton"; 
import Featured from "../components/Featured";
import PuriList from "../components/PuriList";
import styles from "../styles/Home.module.css";

export default function Home({puriList, admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>LIVE GOLGAPPA</title>
        <meta name="description" content="Best Puri shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Featured/>
      {admin && <AddButton setClose={setClose} />}  
      <PuriList puriList={puriList}/>
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      puriList: res.data,
      admin,
    },
  };
};
