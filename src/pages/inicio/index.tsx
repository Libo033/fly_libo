import Layout from "@/components/Layout";
import React from "react";
import styles from "@/styles/Inicio.module.css";
import LowPrices from "@/components/LowPrices";
import NewsLetter from "@/components/NewsLetter";
import FlySelect from "@/components/FlySelect";
import data from "../../../FlyLiboDB.json";
import { getOrigins } from "@/libs/getOrigins";

const Inicio = () => {
  return (
    <Layout>
      <div className="page">
        <main className={styles.inicio}>
          <FlySelect destination={getOrigins(data)} origin={getOrigins(data)} />
          <LowPrices />
          <NewsLetter />
        </main>
      </div>
    </Layout>
  );
};

export default Inicio;
