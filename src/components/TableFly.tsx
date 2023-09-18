import { IFly } from "@/libs/interfaces";
import React, { useContext, useState, useEffect } from "react";
import styles from "@/styles/Components.module.css";
import { FlyContext } from "@/context/FlyContext";
import { filterOriDestPass } from "@/libs/filterOriDestPass";
import { NextRouter, useRouter } from "next/router";
import { sortDate } from "@/libs/sortDate";

const TableFly: React.FC<{ vuelos: IFly[] }> = ({ vuelos }) => {
  const router: NextRouter = useRouter();
  const origin = router.query.origin?.toString();
  const destination = router.query.destination?.toString();
  const passengers = router.query.passengers?.toString();
  const {
    originTicket,
    setOriginTicket,
    destinationTicket,
    setDestinationTicket,
  } = useContext(FlyContext);
  const [displayVuelos, setDisplayVuelos] = useState<IFly[]>([]);

  useEffect(() => {
    if (vuelos.length > 0 && origin && destination && passengers) {
      if (originTicket === null) {
        setDisplayVuelos(
          vuelos
            .sort((a, b) => sortDate(a, b))
            .filter((fly) =>
              filterOriDestPass(fly, origin, destination, parseInt(passengers))
            )
        );
      } else {
        setDisplayVuelos(
          vuelos
            .sort((a, b) => sortDate(a, b))
            .filter((fly) =>
              filterOriDestPass(fly, destination, origin, parseInt(passengers))
            )
        );
      }
    }
  }, [origin, destination, passengers, originTicket, destinationTicket]);

  return (
    <table className={styles.tableFly}>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Precio</th>
          <th>Asientos</th>
          <th>Seleccionar</th>
        </tr>
      </thead>
      <tbody>
        {originTicket === null ? (
          <>
            {displayVuelos.length > 0 &&
              displayVuelos.map((fly) => (
                <tr>
                  <td>{fly.data}</td>
                  <td>{fly.price}</td>
                  <td>{fly.availability}</td>
                  <td>
                    {setOriginTicket && (
                      <button
                        onClick={() => setOriginTicket(fly)}
                        className={styles.tableFly_seleccionar}
                      >
                        Elegir
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </>
        ) : (
          <>
            {displayVuelos.length > 0 &&
              displayVuelos.map((fly) => (
                <tr>
                  <td>{fly.data}</td>
                  <td>{fly.price}</td>
                  <td>{fly.availability}</td>
                  <td>
                    {setDestinationTicket && (
                      <button
                        onClick={() => setDestinationTicket(fly)}
                        className={styles.tableFly_seleccionar}
                      >
                        Elegir
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default TableFly;

/*
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
              {originTicket !== null ? (
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
                        <tr key={fly.availability * fly.price}>
                          <td>{formatDate(fly.data)}</td>
                          <td>$ {fly.price}</td>
                          <td>{fly.availability}</td>
                          <td>
                            <button
                              onClick={() => handleSelectTicket(fly)}
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
                        <tr key={fly.availability * fly.price}>
                          <td>{formatDate(fly.data)}</td>
                          <td>$ {fly.price}</td>
                          <td>{fly.availability}</td>
                          <td>
                            <button
                              onClick={() => handleSelectTicket(fly)}
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
          </table> */
