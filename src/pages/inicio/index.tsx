import Layout from "@/components/Layout";
import React from "react";
import styles from "@/styles/Inicio.module.css";
import LowPrices from "@/components/LowPrices";
import NewsLetter from "@/components/NewsLetter";

const Inicio = () => {
  return (
    <Layout>
      <div className="page">
        <main className={styles.inicio}>
          <LowPrices />
          <NewsLetter />
        </main>
      </div>
    </Layout>
  );
};

export default Inicio;
