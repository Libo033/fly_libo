import Layout from "@/components/Layout";
import { NextRouter, useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import styles from "@/styles/Vuelos.module.css";
import Image from "next/image";
import data from "../../../FlyLiboDB.json";
import { FlyContext } from "@/context/FlyContext";
import Ticket from "@/components/Ticket";
import TableFly from "@/components/TableFly";
import { AuthContext } from "@/context/AuthContext";

const Vuelos = () => {
  const router: NextRouter = useRouter();
  const { origin, destination, passengers } = router.query;
  const { originTicket, destinationTicket, setPassengers } = useContext(FlyContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (setPassengers !== null && passengers) {
      setPassengers(parseInt(passengers.toString()));
    }
  }, [setPassengers]);

  return (
    <Layout>
      <div className={styles.vuelos}>
        <div className={styles.vuelos_container}>
          {originTicket === null || destinationTicket === null ? (
            <>
              <div className={styles.vuelos_subtitle}>
                <p>
                  Elegi tu vuelo de {originTicket === null ? "ida" : "vuelta"}
                </p>
              </div>
              <div className={styles.vuelos_title}>
                <p>{originTicket === null ? origin : destination}</p>
                <Image
                  src={"/img/arrow_right.svg"}
                  alt="arrow"
                  width={30}
                  height={30}
                />
                <p>{originTicket === null ? destination : origin}</p>
              </div>
            </>
          ) : undefined}
          {originTicket !== null || destinationTicket !== null ? (
            <div className={styles.vuelos_tickets}>
              {originTicket !== null && <Ticket {...originTicket} />}
              {destinationTicket !== null && <Ticket {...destinationTicket} />}
            </div>
          ) : undefined}
        </div>
        {originTicket === null || destinationTicket === null ? (
          <div className={styles.vuelos_tableContainer}>
            <TableFly vuelos={data} />
          </div>
        ) : undefined}
        {originTicket !== null && destinationTicket !== null ? (
          <div className={styles.vuelos_buttonContainer}>
            {user ? (
              <button
                className={styles.vuelos_button}
                onClick={() => router.push("/vuelos/comprar")}
              >
                comprar
              </button>
            ) : (
              <button
                className={styles.vuelos_button}
                onClick={() => router.push("/")}
              >
                Iniciar sesion
              </button>
            )}
          </div>
        ) : undefined}
      </div>
    </Layout>
  );
};

export default Vuelos;
