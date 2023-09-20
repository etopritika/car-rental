import React from "react";

import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.logo}>
          <NavLink to="/">
            <span className={styles.logoLeft}>AUTO</span>
            <span className={styles.logoCenter}> RIA </span>
          </NavLink>
        </div>
        <div className={styles.rights}>
          <span className={styles.rightsText}>Developed by </span>
          <a
            href="https://github.com/etopritika"
            target="_blank"
            rel="noreferrer"
            className={styles.rightsLink}
          >
            Dmitriy Prytyka
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
