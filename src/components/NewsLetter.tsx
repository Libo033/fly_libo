import React, { FormEvent, useState, useEffect, CSSProperties } from "react";
import styles from "@/styles/Components.module.css";
import Image from "next/image";

const NewsLetter = () => {
  const [email, setEmail] = useState<string>("");
  const [stylesInput, setStylesInput] = useState<CSSProperties>({});
  const [button, setButton] = useState<boolean>(true);
  const [received, setReceived] = useState<boolean>(false);
  const [closed, setClosed] = useState<boolean>(false);

  const handleSender = (Event: FormEvent) => {
    Event.preventDefault();

    setReceived(true);
  };

  useEffect(() => {
    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      setStylesInput({ border: "1px solid gainsboro" });
      setButton(false);
    } else if (email.length === 0) {
      setStylesInput({ border: "1px solid gainsboro" });
      setButton(true);
    } else {
      setStylesInput({ border: "1px solid red" });
      setButton(true);
    }
  }, [email]);

  return (
    <>
      {closed ? undefined : (
        <div className={styles.newsLetter}>
          {received ? (
            <div className={styles.newsLetterReceived}>
              <Image
                onClick={() => setClosed(true)}
                className={styles.newsLetter_cross}
                src={"/img/cross.svg"}
                alt="cross"
                width={15}
                height={15}
              />
              <Image
                src={"/img/check.svg"}
                alt="check"
                width={90}
                height={90}
              />
              <p className={styles.newsLetter_title}>
                ¡Gracias por suscribirte!
              </p>
            </div>
          ) : (
            <div className={styles.newsLetterContent}>
              <Image
                onClick={() => setClosed(true)}
                className={styles.newsLetter_cross}
                src={"/img/cross.svg"}
                alt="cross"
                width={15}
                height={15}
              />
              <p className={styles.newsLetter_title}>¡No te pierdas de nada!</p>
              <p className={styles.newsLetter_text}>
                Suscribite a nuestro newsletter para enterarte de todo antes que
                nadie.
              </p>
              <form
                className={styles.newsLetter_inputContainer}
                onSubmit={(Event: FormEvent) => handleSender(Event)}
              >
                <input
                  style={stylesInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.newsLetter_input}
                  type="email"
                  required
                />
                <button className={styles.newsLetter_button} disabled={button}>
                  Enviar
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NewsLetter;
