import Image from "next/image";
import React from "react";
import styles from "@/styles/Components.module.css";

const CuatroDestinos = () => {
  return (
    <>
      <p className={styles.cuatroDestinos_title}>Destinos</p>
      <section className={styles.cuatroDestinos}>
        <article className={styles.cuatroDestinos_art}>
          <Image
            className={styles.cuatroDestinos_artImage}
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694201948/01-varios/bamgee6ohxtdlhhhzynl.jpg"
            }
            alt=""
            width={1500}
            height={1500}
          />
          <p className={styles.cuatroDestinos_artText}>Bariloche</p>
        </article>
        <article className={styles.cuatroDestinos_art}>
          <Image
            className={styles.cuatroDestinos_artImage}
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694201947/01-varios/bhar5nne2rzl2p6ueyoi.jpg"
            }
            alt=""
            width={1500}
            height={1500}
          />
          <p className={styles.cuatroDestinos_artText}>Mendoza</p>
        </article>
        <article className={styles.cuatroDestinos_art}>
          <Image
            className={styles.cuatroDestinos_artImage}
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694201947/01-varios/xuggvpn5leqj4t2gdua4.jpg"
            }
            alt=""
            width={1500}
            height={1500}
          />
          <p className={styles.cuatroDestinos_artText}>Buenos Aires</p>
        </article>
        <article className={styles.cuatroDestinos_art}>
          <Image
            className={styles.cuatroDestinos_artImage}
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694201946/01-varios/e1tcbyqnwthlzqsf7ctl.jpg"
            }
            alt=""
            width={1500}
            height={1500}
          />
          <p className={styles.cuatroDestinos_artText}>Santa Cruz</p>
        </article>
      </section>
    </>
  );
};

export default CuatroDestinos;
