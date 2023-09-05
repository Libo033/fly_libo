import React from "react";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { ILayout } from "@/libs/interfaces";
import NavigationBar from "./NavigationBar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>FlyLibo</title>
      </Head>
      <div style={roboto.style}>
        <header style={{width: "100%", boxShadow: "1px 2px 6px gainsboro"}}>
          <NavigationBar />
        </header>
        {children}
      </div>
    </>
  );
};

export default Layout;
