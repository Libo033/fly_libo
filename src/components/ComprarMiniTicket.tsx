import React from "react";
import styles from "@/styles/Components.module.css";
import { IComprarMiniTicket } from "@/libs/interfaces";

const ComprarMiniTicket: React.FC<IComprarMiniTicket> = ({
  passengers,
  ticket,
  pasaje
}) => {
  return (
    <div className={styles.ComprarMiniTicket}>
      <p className={styles.ComprarMiniTicket_title}>Pasaje {pasaje}</p>
      <p>
        Desde <i>{ticket.origin}</i> hasta&nbsp;
        <i>{ticket.destination}</i>
      </p>
      <p>Pasajes: {passengers}</p>
      <p>Precio: ${ticket.price}</p>
      <p className={styles.ComprarMiniTicket_total}>
        Total ticket:&nbsp;$
        {(ticket.price * parseInt(passengers.toString())).toFixed(2)}
      </p>
    </div>
  );
};

export default ComprarMiniTicket;
