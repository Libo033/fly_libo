import React from "react";
import styles from "@/styles/Components.module.css";
import Image from "next/image";

const Extras = () => {
  return (
    <div className={styles.extras}>
      <p className={styles.extras_title}>Comprá tus servicios adicionales</p>
      <section className={styles.extras_section}>
        <article className={styles.extras_article}>
          <Image
            priority={true}
            className={styles.extras_image}
            src={"/img/dog.svg"}
            alt="dog"
            width={300}
            height={300}
          />
          <div>
            <p className={styles.extras_artTitle}>VIAJÁ CON TU MASCOTA</p>
            <p className={styles.extras_artText}>
              Viajá con tu perro o gato. Mirá los requisitos de cada animal.
            </p>
          </div>
        </article>
        <article className={styles.extras_article}>
          <Image
            className={styles.extras_image}
            src={"/img/doctor.svg"}
            alt="doctor"
            width={300}
            height={300}
          />
          <div>
            <p className={styles.extras_artTitle}>SEGURO DE VIAJE</p>
            <p className={styles.extras_artText}>
              Adquirí tu seguro de viaje con Asistencia Universal.
            </p>
          </div>
        </article>
        <article className={styles.extras_article}>
          <Image
            className={styles.extras_image}
            src={"/img/coffee.svg"}
            alt="coffee"
            width={300}
            height={300}
          />
          <div>
            <p className={styles.extras_artTitle}>OTROS EXTRAS</p>
            <p className={styles.extras_artText}>
              Venta a bordo. Compra cafe y agua en el avion.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Extras;
