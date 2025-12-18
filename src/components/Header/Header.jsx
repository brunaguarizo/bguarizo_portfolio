import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

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
                <Link
                    to='/'
                    className={`${styles.logo} ${
                        location.pathname === "/" && !location.hash
                            ? styles.logo_active
                            : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}>
                    className={styles.logo}>
                    bguarizo
                </Link>
                <ul
                    className={`${styles.nav_list} ${
                        isMenuOpen ? styles.navListOpen : ""
                    }`}>
                    <li>
                        <Link
                            className={`${styles.nav_link} ${
                                location.pathname === "/projects"
                                    ? styles.nav_link_active
                                    : ""
                            }`}
                            to='/projects'
                            onClick={() => setIsMenuOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a
                            className={`${styles.nav_link} ${
                                location.pathname === "/" &&
                                location.hash === "#about"
                                    ? styles.nav_link_active
                                    : ""
                            }`}
                            href='#about'
                            onClick={() => scrollToSection("about")}>
                            About me
                        </a>
                    </li>

                    <li>
                        <Button
                            onClick={() =>
                                (window.location.href =
                                    "mailto:b.guarizo@hotmail.com")
                            }>
                            Get in Touch
                        </Button>
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
