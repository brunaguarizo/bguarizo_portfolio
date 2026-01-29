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
                    <img
                        src='/bg logo.svg'
                        alt='bguarizo logo'
                        className={`${styles.logo_image} ${styles.logo_size}`}
                    />
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
                        <Link
                            className={`${styles.nav_link} ${
                                location.pathname === "/about"
                                    ? styles.nav_link_active
                                    : ""
                            }`}
                            to='/about'
                            onClick={() => setIsMenuOpen(false)}>
                            About Me
                        </Link>
                    </li>

                    <li>
                        <a
                            className={styles.nav_link}
                            href='https://github.com/brunaguarizo'
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={() => setIsMenuOpen(false)}>
                            GitHub
                        </a>
                    </li>

                    <li>
                        <Button
                            onClick={() =>
                                (window.location.href =
                                    "mailto:guarizob@gmail.com")
                            }>
                            Get In Touch
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
