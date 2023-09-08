import Layout from "@/components/Layout";
import React, { useContext } from "react";
import styles from "@/styles/Reservas.module.css";
import { AuthContext } from "@/context/AuthContext";
import LoadingPage from "@/components/LoadingPage";
import Link from "next/link";
import Reserva from "@/components/Reserva";
import { Divider } from "@mui/material";
import NewsLetter from "@/components/NewsLetter";
import Extras from "@/components/Extras";

const Reservas = () => {
  const { user, loaded } = useContext(AuthContext);

  return (
    <>
      {loaded ? (
        <Layout>
          <div className={styles.reservas}>
            {user !== null ? (
              <p className={styles.reservas_title}>
                Bienvenido {user.displayName}. Explora tus reservas:
              </p>
            ) : (
              <p className={styles.reservas_title}>
                <Link href={"/"}>Inicia sesion</Link> para ver tus reservas o
                para crearlas.
              </p>
            )}
            {user !== null && (
              <div className={styles.reservas_container}>
                <p className={styles.reservas_emptyTxt}>
                  No tenes reservas.
                  <br /> Cuando tengas reservas apareceran aqui.
                </p>
              </div>
            )}
            <Divider />
            <Extras />
            <Divider />
            <Reserva />
            <NewsLetter />
          </div>
        </Layout>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default Reservas;
