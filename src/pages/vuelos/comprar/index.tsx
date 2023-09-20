import { AuthContext } from "@/context/AuthContext";
import { FlyContext } from "@/context/FlyContext";
import { NextRouter, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/Vuelos.module.css";
import Layout from "@/components/Layout";
import LoadingPage from "@/components/LoadingPage";
import ComprarMiniTicket from "@/components/ComprarMiniTicket";

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
  }, [user, loaded]);

  const handleComprar = () => {
    setLoading(true);
    if (setOriginTicket && setDestinationTicket && setPassengers) {
      setOriginTicket(null);
      setDestinationTicket(null);
      setPassengers(null);
    }
    router.push("/reservas");
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
                  />
                )}
                {destinationTicket && (
                  <ComprarMiniTicket
                    ticket={destinationTicket}
                    passengers={passengers}
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
                  <button
                    className={styles.comprar_button}
                    onClick={() => handleComprar()}
                  >
                    comprar
                  </button>
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
