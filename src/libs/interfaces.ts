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
