import React from "react";
import styles from "@/styles/Components.module.css";
import Image from "next/image";

const Reserva = () => {
  return (
    <div className={styles.reserva}>
      <p className={styles.reserva_title}>Ofertas especiales de hoy</p>
      <section className={styles.reserva_section}>
        <article className={styles.reserva_article}>
          <Image
            className={styles.reserva_articleImage}
            src={"https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg"}
            alt="apps"
            width={6000}
            height={4000}
          />
          <p className={styles.reserva_articleTitle}>
            Viaja facil con nuestra app
          </p>
          <p className={styles.reserva_articleText}>
            Reserve un viaje, elija sus asientos, obtenga su tarjeta de embarque
            y más en el app de FlyLibo.
          </p>
        </article>
        <article className={styles.reserva_article}>
          <Image
            className={styles.reserva_articleImage}
            src={"https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437726/01-varios/xhkindccrcqmjokjkbcb.jpg"}
            alt="cascada"
            width={4896}
            height={2754}
          />
          <p className={styles.reserva_articleTitle}>Visite las cascadas</p>
          <p className={styles.reserva_articleText}>
            Planifique su proximo viaje con nuestras tarifas mas bajas.
          </p>
        </article>
        <article className={styles.reserva_article}>
          <Image
            className={styles.reserva_articleImage}
            src={"https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437726/01-varios/ijteu9iyu22tydqljtyb.jpg"}
            alt="salta"
            width={3083}
            height={3853}
          />
          <p className={styles.reserva_articleTitle}>
            Obtenga kilometros por viaje
          </p>
          <p className={styles.reserva_articleText}>
            Encuentre el viaje perfecto y obtenga kilometros para su próximo
            viaje.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Reserva;
