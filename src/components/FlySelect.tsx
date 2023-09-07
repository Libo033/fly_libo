import React from "react";
import styles from "@/styles/Components.module.css";
import Image from "next/image";

const FlySelect = () => {
  return (
    <div className={styles.flySelect}>
      <Image
        className={styles.flySelect_imgBackground}
        src={"/img/bariloche.jpg"}
        alt=""
        width={4068}
        height={3072}
      />
      <form className={styles.flySelect_form}>
        <div className={styles.flySelect_container}>
          <label className={styles.flySelect_label} htmlFor="origen">
            ORIGEN
          </label>
          <select id="origen" className={styles.flySelect_selectTakeOff}>
            <option value="bsas">Buenos Aires</option>
            <option value="cordoba">Cordoba</option>
            <option value="bariloche">Bariloche</option>
          </select>
        </div>  
        <div className={styles.flySelect_container}>
          <label className={styles.flySelect_label} htmlFor="destino">
            DESTINO
          </label>
          <select id="destino" className={styles.flySelect_selectLanding}>
            <option value="bsas">Buenos Aires</option>
            <option value="cordoba">Cordoba</option>
            <option value="bariloche">Bariloche</option>
          </select>
        </div>
        <div className={styles.flySelect_container}>
          <label className={styles.flySelect_label} htmlFor="pasajeros">
            PASAJEROS
          </label>
          <input
            className={styles.flySelect_inputN}
            type="number"
            id="pasajeros"
          />
        </div>
        <button className={styles.flySelect_button}>Buscar</button>
      </form>
    </div>
  );
};

export default FlySelect;
