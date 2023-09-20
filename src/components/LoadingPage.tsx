import React from "react";
import styles from "@/styles/LoadingPage.module.css";
import Image from "next/image";
import { Titillium_Web } from "next/font/google";

const titi = Titillium_Web({
  weight: ["400"],
  subsets: ["latin"],
});

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <Image
        priority={true}
        src={"/img/loading_plane.gif"}
        alt="plane"
        width={210}
        height={210}
      />
      <Image
        priority={true}
        className={styles.loadingPage_background}
        src={"/img/background_sky.jpg"}
        alt="sky"
        width={850}
        height={567}
      />
      <h2 style={titi.style}>Cargando</h2>
    </div>
  );
};

export default LoadingPage;
