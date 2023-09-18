import { IFly, IFlyContext } from "@/libs/interfaces";
import React, { useEffect, useState, createContext } from "react";

const defaultValue: IFlyContext = {
  originTicket: null,
  destinationTicket: null,
  setOriginTicket: null,
  setDestinationTicket: null,
};

export const FlyContext: React.Context<IFlyContext> =
  createContext(defaultValue);

export const FlyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [originTicket, setOriginTicket] = useState<IFly | null>(null);
  const [destinationTicket, setDestinationTicket] = useState<IFly | null>(null);

  return (
    <FlyContext.Provider
      value={{
        originTicket,
        destinationTicket,
        setOriginTicket,
        setDestinationTicket,
      }}
    >
      {children}
    </FlyContext.Provider>
  );
};
