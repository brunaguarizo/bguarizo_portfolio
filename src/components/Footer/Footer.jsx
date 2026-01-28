import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <a
                    href='mailto:b.guarizo@hotmail.com'
                    className={styles.email}>
                    b.guarizo@hotmail.com
                </a>
                <div className={styles.socialLinks}>
                    <a
                        href='/Bruna_Guarizo-Resume.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.socialLink}>
                        Resume
                    </a>
                    <span className={styles.separator}>|</span>
                    <a
                        href='https://www.linkedin.com/in/brunaguarizo'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.socialLink}>
                        LinkedIn
                    </a>

                    <span className={styles.separator}>|</span>
                    <a
                        href='https://www.behance.net/bguarizo'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.socialLink}>
                        Behance
                    </a>
                </div>
                <p className={styles.copyright}>
                    All rights reserved ©{currentYear}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
