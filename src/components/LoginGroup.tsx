import Image from "next/image";
import React, { useContext } from "react";
import styles from '@/styles/Components.module.css'
import { AuthContext } from "@/context/AuthContext";

const LoginGroup = () => {
  const { googleSignIn, facebookSignIn, loaded } = useContext(AuthContext);

  const handleLoginGoogle = async () => {
    if (loaded && googleSignIn) {
      await googleSignIn();
    }
  }

  const handleLoginFacebook = async () => {
    if (loaded && facebookSignIn) {
      await facebookSignIn();
    }
  }

  return (
    <div className={styles.loginGroup}>
      <button onClick={() => handleLoginGoogle()} className={styles.loginGroup_button}>
        <Image src={"/img/google.svg"} alt="google" width={24} height={24} />
        Google
      </button>
      <button className={styles.loginGroup_button}>
        <Image onClick={() => handleLoginFacebook()} src={"/img/facebook.svg"} alt="facebook" width={24} height={24} />
        Facebook
      </button>
    </div>
  );
};

export default LoginGroup;
