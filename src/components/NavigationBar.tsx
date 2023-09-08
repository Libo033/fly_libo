import Image from "next/image";
import React, { useContext, useState } from "react";
import styles from "@/styles/Components.module.css";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { NextRouter, useRouter } from "next/router";
import { Drawer } from "@mui/material";
import OpenDrawer from "./OpenDrawer";

const NavigationBar = () => {
  const router: NextRouter = useRouter();
  const { loaded, logOut, user } = useContext(AuthContext);
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  const handleLogOut = async () => {
    if (loaded && logOut) {
      await logOut();
      router.push("/");
    }
  };

  return (
    <nav className={styles.NavigationBar}>
      <Image
        onClick={() => setToggleDrawer(true)}
        className={styles.NavigationBar_menu}
        src={"/img/menu.svg"}
        alt="menu"
        width={36}
        height={36}
      />
      <Drawer
        anchor="right"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <OpenDrawer handleLogOut={handleLogOut} loaded={loaded} user={user} />
      </Drawer>
      <ul className={styles.NavigationBar_logoUl}>
        <li className={styles.NavigationBar_logoLi}>
          <Image
            onClick={() => router.push("/inicio")}
            className={styles.NavigationBar_logo}
            src={"/img/FlyLibo-logos_noback.png"}
            alt="FlyLibo"
            height={834}
            width={343}
          />
        </li>
        <li className={styles.NavigationBar_linksUl}>
          <Link className={styles.NavigationBar_link} href={"/reservas"}>
            Reservas
          </Link>
          <Link className={styles.NavigationBar_link} href={"/destinos"}>
            Destinos
          </Link>
          {loaded && user ? (
            <Link className={styles.NavigationBar_link} href={"/micuenta"}>
              Mi cuenta
            </Link>
          ) : undefined}
        </li>
      </ul>
      <ul className={styles.NavigationBar_sesion}>
        {loaded && user ? (
          <li>
            <button
              onClick={() => handleLogOut()}
              className={styles.NavigationBar_sesionButton}
            >
              Cerrar sesion
            </button>
          </li>
        ) : (
          <li>
            <Link href={"/"} className={styles.NavigationBar_initSesionButton}>
              Iniciar sesion
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
