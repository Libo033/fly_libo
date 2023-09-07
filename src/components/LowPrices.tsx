import React from "react";
import styles from "@/styles/Components.module.css";
import Image from "next/image";

const LowPrices = () => {
  return (
    <div className={styles.lowPrices}>
      <div className={styles.lowPrices_Content}>
        <div className={styles.lowPrices_Content1}>
          <h2>¿Cómo hacemos para darte los precios más bajos?</h2>
        </div>
        <div className={styles.lowPrices_Content2}>
          <p>
            Nuestro modelo de negocio no es un secreto: ya funciona en decenas
            de países de manera rentable. Algunos de nuestros pilares:
          </p>
        </div>
        <section className={styles.lowPrices_section}>
          <article className={styles.lowPrices_article}>
            <Image
              className={styles.lowPrices_articleImg}
              src={"/img/planes.svg"}
              alt="planes"
              width={330}
              height={330}
            />
            <div>
              <p className={styles.lowPrices_articleTitle}>FLOTA ÚNICA</p>
              <p className={styles.lowPrices_articleText}>
                Un solo tipo de avión, un solo tipo de asientos. ¡Le decimos sí
                a la clase única!
              </p>
            </div>
          </article>
          <article className={styles.lowPrices_article}>
            <Image
              className={styles.lowPrices_articleImg}
              src={"/img/wallet.svg"}
              alt="wallet"
              width={330}
              height={330}
            />
            <div>
              <p className={styles.lowPrices_articleTitle}>
                SOLO PAGÁS POR LO QUE NECESITÁS
              </p>
              <p className={styles.lowPrices_articleText}>
                ¿Ventana o pasillo? ¿equipaje en cabina o solo de mano? Te
                dejamos a vos decidir qué querés que tu pasaje incluya.
              </p>
            </div>
          </article>
          <article className={styles.lowPrices_article}>
            <Image
              className={styles.lowPrices_articleImg}
              src={"/img/online_but.svg"}
              alt="online buy"
              width={330}
              height={330}
            />
            <div>
              <p className={styles.lowPrices_articleTitle}>COMPRÁS ONLINE</p>
              <p className={styles.lowPrices_articleText}>
                Sacá tu pasaje con tu celular o compu donde quieras, siempre a
                través directo de nuestra web. Sin comisiones.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default LowPrices;
