import React from "react";
import styles from "@/styles/Components.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.newsLetter}>
      <div className={styles.newsLetterContent}>
        <p className={styles.newsLetter_title}>¡No te pierdas de nada!</p>
        <p className={styles.newsLetter_text}>
          Suscribite a nuestro newsletter para enterarte de todo antes que
          nadie.
        </p>
        <form className={styles.newsLetter_inputContainer}>
          <input className={styles.newsLetter_input} type="email" required />
          <button className={styles.newsLetter_button}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
