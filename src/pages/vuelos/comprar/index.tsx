import { AuthContext } from "@/context/AuthContext";
import { FlyContext } from "@/context/FlyContext";
import { NextRouter, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/Vuelos.module.css";
import Layout from "@/components/Layout";
import LoadingPage from "@/components/LoadingPage";
import ComprarMiniTicket from "@/components/ComprarMiniTicket";
import {
  DocumentData,
  DocumentReference,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "@/libs/Firebase";
import useFetchNotes from "@/libs/fetchNotes";
import { IFly } from "@/libs/interfaces";

const Comprar = () => {
  const router: NextRouter = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { user, loaded } = useContext(AuthContext);
  const {
    originTicket,
    destinationTicket,
    passengers,
    setOriginTicket,
    setDestinationTicket,
    setPassengers,
  } = useContext(FlyContext);
  const { fetchNotes } = useFetchNotes();

  useEffect(() => {
    if (loaded && user === null) {
      router.push("/");
    } else if (
      loaded &&
      originTicket === null &&
      destinationTicket === null &&
      passengers === null
    ) {
      router.push("/inicio");
    }
  }, [user, loaded, originTicket, destinationTicket, passengers, router]);

  const handleComprar = async (ida: IFly, vuelta: IFly) => {
    try {
      setLoading(true);
      if (setOriginTicket && setDestinationTicket && setPassengers) {
        setOriginTicket(null);
        setDestinationTicket(null);
        setPassengers(null);
      }
      if (user) {
        const userRef: DocumentReference<DocumentData> = doc(
          db,
          "users",
          user.uid
        );
        let value: number = 1;

        if (fetchNotes?.notas) {
          let cantidadNotes = Object.keys(fetchNotes.notas);
          value = cantidadNotes.length + 1;
        }

        await setDoc(
          userRef,
          {
            notas: {
              [value]: { ida: ida, vuelta: vuelta, passengers },
            },
          },
          { merge: true }
        );
      }

      router.push("/reservas");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      router.push("/inicio");
    }
  };

  return (
    <>
      {!loading && loaded ? (
        <Layout>
          {passengers && (
            <div className={styles.comprar}>
              <p className={styles.comprar_title}>Revisa tu ticket</p>
              <div className={styles.comprar_container}>
                {originTicket && (
                  <ComprarMiniTicket
                    ticket={originTicket}
                    passengers={passengers}
                    pasaje={"ida"}
                  />
                )}
                {destinationTicket && (
                  <ComprarMiniTicket
                    ticket={destinationTicket}
                    passengers={passengers}
                    pasaje={"vuelta"}
                  />
                )}
                {destinationTicket && originTicket && (
                  <p className={styles.comprar_total}>
                    Total: $
                    {(
                      passengers *
                      (destinationTicket.price + originTicket.price)
                    ).toFixed(2)}
                  </p>
                )}
                <div className={styles.comprar_buttonContainer}>
                  {destinationTicket && originTicket && (
                    <button
                      className={styles.comprar_button}
                      onClick={() =>
                        handleComprar(originTicket, destinationTicket)
                      }
                    >
                      comprar
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </Layout>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default Comprar;
