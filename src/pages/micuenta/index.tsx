import Layout from "@/components/Layout";
import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/MiCuenta.module.css";
import { NextRouter, useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import LoadingPage from "@/components/LoadingPage";
import Image from "next/image";
import { url } from "inspector";

const MiCuenta = () => {
  const router: NextRouter = useRouter();
  const { loaded, user } = useContext(AuthContext);

  useEffect(() => {
    if (loaded && user === null) {
      router.push("/");
    }
  }, [user, loaded, {}]);

  /*
    https://lh3.googleusercontent.com/a/AAcHTtfiYrWIK6fzYUo4QmjeWW9DOq90f3IcFyoMlqqy8PiEtw=s96-c
    https://graph.facebook.com/6508600332553153/picture
  */

  return (
    <>
      {loaded && user !== null ? (
        <Layout>
          <div className={styles.miCuenta}>

            <div className={styles.miCuenta_userContainer}>
              <div className={styles.miCuenta_userImgContainer}>
                <img
                  className={styles.miCuenta_userImg}
                  src="https://lh3.googleusercontent.com/a/AAcHTtfiYrWIK6fzYUo4QmjeWW9DOq90f3IcFyoMlqqy8PiEtw=s96-c"
                  alt="profile pic"
                />
                {!user.emailVerified && (
                  <p className={styles.miCuenta_emailVerified}>
                    Cuenta sin Verificar
                  </p>
                )}
              </div>
              <div className={styles.miCuenta_userData}>
                <div className={styles.miCuenta_labelContainer}>
                  <label className={styles.miCuenta_label} htmlFor="names">
                    Usuario
                  </label>
                  <input
                    className={styles.miCuenta_input}
                    type="text"
                    value={user.displayName || ""}
                    id="names"
                    disabled
                  />
                </div>
                <div className={styles.miCuenta_labelContainer}>
                  <label className={styles.miCuenta_label} htmlFor="mail">
                    Email
                  </label>
                  <input
                    className={styles.miCuenta_input}
                    type="email"
                    value={user.email || ""}
                    id="mail"
                    disabled
                  />
                </div>
                <div className={styles.miCuenta_labelContainer}>
                  <label className={styles.miCuenta_label} htmlFor="phone">
                    Tel. Celular
                  </label>
                  <input
                    className={styles.miCuenta_input}
                    type="email"
                    value={user.phoneNumber || ""}
                    id="phone"
                    disabled
                  />
                </div>
              </div>
              <div className={styles.miCuenta_editarContainer}>
                <button className={styles.miCuenta_editar}>Editar</button>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default MiCuenta;
