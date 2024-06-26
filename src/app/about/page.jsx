import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About Our Agency</h2>

          <h1 className={styles.title}>
            Unleash Your Imagination, Create Without Limits !
          </h1>

          <p className={styles.desc}>
            At Creative, we specialize in creating digital ideas that are
            bigger, bolder, and braver. With a commitment to flexibility and
            precision, we offer world-class consulting and finance solutions,
            alongside a wide range of web and software development services.
          </p>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of Experience</p>
            </div>

            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of Experience</p>
            </div>

            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of Experience</p>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image src="/about.svg" alt="About Us" fill className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
