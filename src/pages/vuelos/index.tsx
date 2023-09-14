import Layout from "@/components/Layout";
import { NextRouter, useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "@/styles/Vuelos.module.css";

const Vuelos = () => {
  const router: NextRouter = useRouter();
  let origin = router.query.origin?.toString();
  let destination = router.query.destination?.toString();
  let passengers = router.query.passengers?.toString();

  return (
    <Layout>
      <div className={styles.vuelos}>Vuelos</div>
    </Layout>
  );
};

export default Vuelos;
