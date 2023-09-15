import Layout from "@/components/Layout";
import { NextRouter, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/Vuelos.module.css";
import Image from "next/image";
import data from "../../../FlyLiboDB.json";
import { formatDate } from "@/libs/formatDate";
import { sortDate } from "@/libs/sortDate";
import { filterOriDestPass } from "@/libs/filterOriDestPass";

const Vuelos = () => {
  const router: NextRouter = useRouter();
  const { origin, destination, passengers } = router.query;
  const [originTicket, setOriginTicket] = useState<string>("");

  const handleSelectTicket = (value: string): void => {
    if (originTicket === "") {
      setOriginTicket(value);
    } else {
      console.log(originTicket);
      console.log(value);
    }
  };

  return (
    <Layout>
      <div className={styles.vuelos}>
        <div className={styles.vuelos_container}>
          <div className={styles.vuelos_subtitle}>
            <p>Elegi tu vuelo de {originTicket === "" ? "ida" : "vuelta"}</p>
          </div>
          <div className={styles.vuelos_title}>
            <p>{originTicket === "" ? origin : destination}</p>
            <Image
              src={"/img/arrow_right.svg"}
              alt="arrow"
              width={30}
              height={30}
            />
            <p>{originTicket === "" ? destination : origin}</p>
          </div>
        </div>
        <div className={styles.vuelos_tableContainer}>
          <table className={styles.vuelos_table}>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Precio</th>
                <th>Asientos</th>
                <th>Seleccionar</th>
              </tr>
            </thead>
            <tbody>
              {originTicket === "" ? (
                <>
                  {data.length > 0 &&
                    passengers !== undefined &&
                    origin &&
                    destination &&
                    data
                      .filter((fly) =>
                        filterOriDestPass(
                          fly,
                          origin.toString(),
                          destination.toString(),
                          parseInt(passengers.toString())
                        )
                      )
                      .sort((a, b) => sortDate(a, b))
                      .map((fly) => (
                        <tr>
                          <td>{formatDate(fly.data)}</td>
                          <td>$ {fly.price}</td>
                          <td>{fly.availability}</td>
                          <td>
                            <button
                              onClick={() =>
                                handleSelectTicket(
                                  fly.origin +
                                    "/" +
                                    fly.data +
                                    "/" +
                                    fly.destination
                                )
                              }
                              className={styles.vuelos_seleccionar}
                            >
                              Elegir
                            </button>
                          </td>
                        </tr>
                      ))}
                </>
              ) : (
                <>
                  {data.length > 0 &&
                    passengers !== undefined &&
                    origin &&
                    destination &&
                    data
                      .filter((fly) =>
                        filterOriDestPass(
                          fly,
                          destination.toString(),
                          origin.toString(),
                          parseInt(passengers.toString())
                        )
                      )
                      .sort((a, b) => sortDate(a, b))
                      .map((fly) => (
                        <tr>
                          <td>{formatDate(fly.data)}</td>
                          <td>$ {fly.price}</td>
                          <td>{fly.availability}</td>
                          <td>
                            <button
                              onClick={() =>
                                handleSelectTicket(
                                  fly.origin +
                                    "/" +
                                    fly.data +
                                    "/" +
                                    fly.destination
                                )
                              }
                              className={styles.vuelos_seleccionar}
                            >
                              Elegir
                            </button>
                          </td>
                        </tr>
                      ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Vuelos;
