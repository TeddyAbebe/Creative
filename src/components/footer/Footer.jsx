import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/Logo.svg" alt="Logo" width={80} height={40} />
      </div>

      <div className={styles.text}>Creative Thought Agency</div>
    </div>
  );
};

export default Footer;
