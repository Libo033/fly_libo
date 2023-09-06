import React from "react";
import styles from "@/styles/Components.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <ul className={styles.footer_social}>
          <li className={styles.footer_logoContainer}>
            <Image
              className={styles.footer_logo}
              src={"/img/facebook_brands.svg"}
              alt="facebook"
              width={39}
              height={39}
            />
          </li>
          <li className={styles.footer_logoContainer}>
            <Image
              className={styles.footer_logo}
              src={"/img/twitter_brands.svg"}
              alt="twitter"
              width={51}
              height={51}
            />
          </li>
          <li className={styles.footer_logoContainer}>
            <Image
              className={styles.footer_logo}
              src={"/img/youtube_brands.svg"}
              alt="youtube"
              width={45}
              height={45}
            />
          </li>
          <li className={styles.footer_logoContainer}>
            <Image
              className={styles.footer_logo}
              src={"/img/linkedin_brands.svg"}
              alt="linkedin"
              width={45}
              height={45}
            />
          </li>
          <li className={styles.footer_logoContainer}>
            <Image
              className={styles.footer_logo}
              src={"/img/instagram_brands.svg"}
              alt="instagram"
              width={45}
              height={45}
            />
          </li>
        </ul>
        <ul className={styles.footer_bottom}>
          <p className={styles.footer_txt}>Valentin Libonati 2023</p>
          <Image
            className={styles.footer_flylibo}
            src={"/img/FlyLibo-logos_noback.png"}
            alt="FlyLibo"
            height={319}
            width={781}
          />
        </ul>
      </div>
    </>
  );
};

export default Footer;
