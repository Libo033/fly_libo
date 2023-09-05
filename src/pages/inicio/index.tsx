import Layout from "@/components/Layout";
import React from "react";
import styles from "@/styles/Inicio.module.css";
import LowPrices from "@/components/LowPrices";

const Inicio = () => {
  return (
    <Layout>
      <div className="page">
        <main className={styles.inicio}>
          <LowPrices />
        </main>
      </div>
    </Layout>
  );
};

export default Inicio;
