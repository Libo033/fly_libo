import { AuthContextProvider } from "@/context/AuthContext";
import { FlyContextProvider } from "@/context/FlyContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <FlyContextProvider>
        <Component {...pageProps} />
      </FlyContextProvider>
    </AuthContextProvider>
  );
}
