import React from "react";
import styles from "./index.module.css";
import { List } from "@phosphor-icons/react";

const LogoComponent = () => {
  return (
    <main className={styles.logo_main}>
      <header className={styles.logo}>
        <List size={32} class={styles.hamburger} />
        <img
          className={styles.logo_img}
          src="https://res.cloudinary.com/dbavdyd21/image/upload/v1712486443/app_script_Logo_kvp6hq.jpg"
          alt="logo"
        />
        <h1 className={styles.logo_header}>LOGO</h1>
        <ion-icon className={styles.icon} name="search-outline"></ion-icon>
        <ion-icon className={styles.icon} name="heart-outline"></ion-icon>
        <ion-icon className={styles.icon} name="bag-remove-outline"></ion-icon>
        <ion-icon className={styles.icon} name="person-outline"></ion-icon>
        <div className={styles.language}>
          <h3>Eng</h3>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </header>
      <nav className={styles.na}>
        <h4 className={styles.nav_heading}>SHOP</h4>
        <h4 className={styles.nav_heading}>SKILLS</h4>
        <h4 className={styles.nav_heading}>STORIES</h4>
        <h4 className={styles.nav_heading}>ABOUT</h4>
        <h4 className={styles.nav_heading}>CONTACT US</h4>
      </nav>
      <hr className={styles.hr} />
    </main>
  );
};

export default LogoComponent;
