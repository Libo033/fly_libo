import { IFly, IFlyContext } from "@/libs/interfaces";
import React, { useState, createContext } from "react";

const defaultValue: IFlyContext = {
  originTicket: null,
  destinationTicket: null,
  setOriginTicket: null,
  setDestinationTicket: null,
  passengers: null,
  setPassengers: null,
  handleDeleteAll: null
};

export const FlyContext: React.Context<IFlyContext> =
  createContext(defaultValue);

export const FlyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [originTicket, setOriginTicket] = useState<IFly | null>(null);
  const [destinationTicket, setDestinationTicket] = useState<IFly | null>(null);
  const [passengers, setPassengers] = useState<number | null>(null);

  const handleDeleteAll = (): void => {
    setOriginTicket(null);
    setDestinationTicket(null);
    setPassengers(null);
  };

  return (
    <FlyContext.Provider
      value={{
        originTicket,
        destinationTicket,
        passengers,
        setOriginTicket,
        setDestinationTicket,
        setPassengers,
        handleDeleteAll
      }}
    >
      {children}
    </FlyContext.Provider>
  );
};
