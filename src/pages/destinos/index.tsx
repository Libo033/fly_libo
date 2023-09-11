import Layout from "@/components/Layout";
import React from "react";
import styles from "@/styles/Destinos.module.css";
import NewsLetter from "@/components/NewsLetter";
import CuatroDestinos from "@/components/CuatroDestinos";

const Destinos = () => {
  return (
    <Layout>
      <div className={styles.destinos}>
        <CuatroDestinos />
        <NewsLetter />
      </div>
    </Layout>
  );
};

export default Destinos;
