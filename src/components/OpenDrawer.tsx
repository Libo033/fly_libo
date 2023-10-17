import React from "react";
import styles from "@/styles/Components.module.css";
import Link from "next/link";
import { IOpenDrawer } from "@/libs/interfaces";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const OpenDrawer: React.FC<IOpenDrawer> = ({ handleLogOut, loaded, user }) => {
  return (
    <ul style={roboto.style} className={styles.openDrawer}>
      <li className={styles.openDrawer_logoContainer}>
        <Image
          className={styles.openDrawer_logo}
          src={"/img/FlyLibo-logos_noback.png"}
          alt="FlyLibo"
          width={834}
          height={343}
        />
      </li>
      <li className={styles.openDrawer_li}>
        <Link className={styles.openDrawer_link} href={"/reservas"}>
          Reservas
        </Link>
      </li>
      <li className={styles.openDrawer_li}>
        <Link className={styles.openDrawer_link} href={"/destinos"}>
          Destinos
        </Link>
      </li>
      <li className={styles.openDrawer_li}>
        {loaded && user ? (
          <Link className={styles.openDrawer_link} href={"/micuenta"}>
            Mi cuenta
          </Link>
        ) : undefined}
      </li>
      {loaded && user ? (
        <li className={styles.openDrawer_logOut}>
          <button
            onClick={() => handleLogOut()}
            className={styles.openDrawer_logOutButton}
          >
            Cerrar sesion
          </button>
        </li>
      ) : (
        <li className={styles.openDrawer_logIn}>
          <Link href={"/"} className={styles.openDrawer_logInButton}>
            Iniciar sesion
          </Link>
        </li>
      )}
    </ul>
  );
};

export default OpenDrawer;
