import { User } from "firebase/auth";

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
