import Image from "next/image";
import React from "react";
import styles from '@/styles/Components.module.css'

const LoginGroup = () => {
  return (
    <div className={styles.loginGroup}>
      <button className={styles.loginGroup_button}>
        <Image src={"/img/google.svg"} alt="google" width={24} height={24} />
        Google
      </button>
      <button className={styles.loginGroup_button}>
        <Image src={"/img/facebook.svg"} alt="facebook" width={24} height={24} />
        Facebook
      </button>
    </div>
  );
};

export default LoginGroup;
