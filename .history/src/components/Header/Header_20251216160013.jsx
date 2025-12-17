import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

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
                        <Button>Get in touch</Button>
                    </li>
                </ul>

                <HamburgerMenu
                    isOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </nav>
        </header>
    );
};

export default Header;
