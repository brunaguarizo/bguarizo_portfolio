import React from "react";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ isOpen, onClick, ariaLabel = "Toggle menu" }) => {
    return (
        <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
            onClick={onClick}
            aria-label={ariaLabel}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
    );
};

export default HamburgerMenu;

