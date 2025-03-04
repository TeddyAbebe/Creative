import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/Contact.svg"
          alt="Contact Us"
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />

          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Message"
          ></textarea>

          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
