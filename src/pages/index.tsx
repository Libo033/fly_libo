import LoadingPage from "@/components/LoadingPage";
import LoginGroup from "@/components/LoginGroup";
import { AuthContext } from "@/context/AuthContext";
import styles from "@/styles/Home.module.css";
import { Titillium_Web } from "next/font/google";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const titi = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const router: NextRouter = useRouter();
  const { user, loaded } = useContext(AuthContext);

  useEffect(() => {
    if (loaded && user) {
      router.push("/inicio");
    }
  }, [user]);

  return (
    <>
      {loaded && user === null ? (
        <div style={titi.style} className={styles.loginPage}>
          <div className={styles.loginPage_left}>
            <div className={styles.loginPage_logoContainer}>
              <Image
                className={styles.loginPage_logo}
                src={"/img/FlyLibo-logos_black.png"}
                alt="flylibo"
                width={2000}
                height={2000}
              />
            </div>
            <h1 className={styles.loginPage_title}>Iniciar sesion</h1>
            <LoginGroup />
            <p className={styles.loginPage_leftSlogan}>
              La libertad de volar, paso a paso
            </p>
          </div>
          <div className={styles.loginPage_right}>
            <p className={styles.loginPage_rightSlogan}>
              La libertad de volar, paso a paso
            </p>
            <section className={styles.loginPage_section}>
              <article className={styles.loginPage_article}>
                <Image
                  className={styles.loginPage_articleImage}
                  src={"/img/pilot.svg"}
                  alt="pilot"
                  width={300}
                  height={300}
                />
                <p className={styles.loginPage_articleText}>
                  Un bolso o mochila de mano. Podés incluir un equipaje de
                  cabina y/o de bodega con un costo adicional.
                </p>
              </article>
              <article className={styles.loginPage_article}>
                <Image
                  className={styles.loginPage_articleImage}
                  src={"/img/online_pay.svg"}
                  alt="online pay"
                  width={300}
                  height={300}
                />
                <p className={styles.loginPage_articleText}>
                  Sacá tu pasaje con tu celular o compu donde quieras, siempre a
                  través directo de nuestra web. Sin comisiones.
                </p>
              </article>
              <article className={styles.loginPage_article}>
                <Image
                  className={styles.loginPage_articleImage}
                  src={"/img/holidays.svg"}
                  alt="holidays"
                  width={300}
                  height={300}
                />
                <p className={styles.loginPage_articleText}>
                  Vola a tu medida <br /> ¡Elegí la opción que más te guste y
                  preparate para despegar!
                </p>
              </article>
            </section>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
