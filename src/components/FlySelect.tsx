import React, { useState, useEffect, FormEvent } from "react";
import styles from "@/styles/Components.module.css";
import Image from "next/image";
import { IFlySelect } from "@/libs/interfaces";
import { getDestinations } from "@/libs/getDestinations";
import data from "../../FlyLiboDB.json";
import { NextRouter, useRouter } from "next/router";

const FlySelect: React.FC<IFlySelect> = ({ origin: origen }) => {
  const router: NextRouter = useRouter();
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [destinations, setDestinations] = useState<string[]>([]);
  const [passengers, setPassengers] = useState<number>(1);

  useEffect(() => {
    setDestinations(getDestinations(data, origin));
  }, [origin]);

  const handleSearchFly = (Event: FormEvent) => {
    Event.preventDefault();

    if (
      passengers > 0 &&
      origin !== "-- Selecciona origen --" &&
      destination !== "-- Selecciona destino --" &&
      origin !== "" &&
      destination !== ""
    ) {
      router.push(
        `/vuelos?origin=${origin}&destination=${destination}&passengers=${passengers}`,
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <div className={styles.flySelect}>
      <Image
        className={styles.flySelect_imgBackground}
        priority={true}
        src={"/img/bariloche.jpg"}
        alt="bariloche"
        width={4068}
        height={3072}
      />
      <form
        className={styles.flySelect_form}
        onSubmit={(Event: FormEvent) => handleSearchFly(Event)}
      >
        <div className={styles.flySelect_container}>
          <label className={styles.flySelect_label} htmlFor="origen">
            ORIGEN
          </label>
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            id="origen"
            className={styles.flySelect_selectTakeOff}
          >
            <option defaultValue={"default"}>-- Selecciona origen --</option>
            {origen.length > 0 &&
              origen.map((or) => (
                <option key={or} value={or}>
                  {or}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.flySelect_container}>
          <label className={styles.flySelect_label} htmlFor="destino">
            DESTINO
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            id="destino"
            className={styles.flySelect_selectLanding}
          >
            <option defaultValue={"default"}>-- Selecciona destino --</option>
            {destinations.length > 0 &&
              destinations.map((des) => (
                <option key={des} value={des}>
                  {des}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.flySelect_container}>
          <label className={styles.flySelect_label} htmlFor="pasajeros">
            PASAJEROS
          </label>
          <input
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
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
