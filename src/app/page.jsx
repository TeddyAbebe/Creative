import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>

        <p className={styles.desc}>
          Where Innovation Meets Inspiration: Dive into a world where creativity
          flourishes and your ideas come to life. Discover endless possibilities
          and let your imagination soar.
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image
            src="/Brands.png"
            alt="Brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/Home.svg"
          alt="Creativity"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
}
