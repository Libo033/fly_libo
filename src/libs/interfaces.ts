import { User } from "firebase/auth";
import React, { SetStateAction } from "react";

export interface ILayout {
  children: React.ReactNode;
}

export interface IAuthContext {
  user: User | null;
  googleSignIn: Function | null;
  facebookSignIn: Function | null;
  logOut: Function | null;
  loaded: boolean;
}

export interface IOpenDrawer {
  handleLogOut: Function;
  loaded: boolean;
  user: User | null;
}

export interface IFlySelect {
  destination: string[];
  origin: string[];
}

export interface IFly {
  availability: number;
  data: string;
  destination: string;
  origin: string;
  price: number;
}

export interface IFlyContext {
  originTicket: IFly | null;
  destinationTicket: IFly | null;
  passengers: number | null;
  setOriginTicket: React.Dispatch<SetStateAction<IFly | null>> | null;
  setDestinationTicket: React.Dispatch<SetStateAction<IFly | null>> | null;
  setPassengers: React.Dispatch<SetStateAction<number | null>> | null;
}

export interface IComprarMiniTicket {
  ticket: IFly;
  passengers: number;
}