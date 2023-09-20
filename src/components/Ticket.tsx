import { IFly } from "@/libs/interfaces";
import React, { useContext } from "react";
import styles from "@/styles/Components.module.css";
import Image from "next/image";
import { FlyContext } from "@/context/FlyContext";
import { formatDate } from "@/libs/formatDate";

const Ticket: React.FC<IFly> = (props) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticket_top}>
        <Image
          className={styles.ticket_logo}
          src={"/img/FlyLibo-logos_noback.png"}
          alt="FlyLibo"
          width={781}
          height={319}
        />
      </div>
      <div className={styles.ticket_mid}>
        <Image
          className={styles.ticket_midBackground}
          priority={true}
          src={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1695131810/01-varios/aarowfqs8bhiqkrzepsm.png"
          }
          alt="mapamundi"
          width={413}
          height={200}
        />
        <div className={styles.ticket_info}>
          <p>
            <b>Name:</b> Jhon Doe
          </p>
          <p>
            <b>Asiento:</b> xyz
          </p>
        </div>
        <div className={styles.ticket_or}>
          <p>{props.origin}</p>
          <Image
            src={"/img/ticket_airplane.svg"}
            alt="airplane"
            width={60}
            height={60}
          />
          <p>{props.destination}</p>
        </div>
        <div className={styles.ticket_boarding}>
          <p className={styles.ticket_boardingTime}>Boarding Time</p>
          <p>{formatDate(props.data)} - {Math.floor(Math.random() * 24) + 1}:00</p>
        </div>
      </div>
      <div className={styles.ticket_bottom}>
        <p>BOARDING PASS</p>
        <p>Ticket de pasajero y equipaje</p>
      </div>
    </div>
  );
};

export default Ticket;
