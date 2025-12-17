import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>bguarizo</div>
                <ul
                    className={`${styles.nav_list} ${
                        isMenuOpen ? styles.navListOpen : ""
                    }`}>
                    <li>
                        <a
                            className={styles.nav_link}
                            href='#services'
                            onClick={() => scrollToSection("services")}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            className={styles.nav_link}
                            href='#projects'
                            onClick={() => scrollToSection("projects")}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className={styles.nav_link}
                            href='#testimonials'
                            onClick={() => scrollToSection("testimonials")}>
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            className={styles.nav_link}
                            href='#contact'
                            onClick={() => scrollToSection("contact")}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <button className={styles.button_primary}>
                            Get in touch
                        </button>
                    </li>
                </ul>
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label='Toggle menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;
