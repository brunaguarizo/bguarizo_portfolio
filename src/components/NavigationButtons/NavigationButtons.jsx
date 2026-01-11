import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationButtons.module.css";

const NavigationButtons = ({ prevLink, nextLink, prevLabel, nextLabel }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    return (
        <div className={styles.navigation}>
            {prevLink ? (
                <Link to={prevLink} className={styles.nav_button} onClick={scrollToTop}>
                    <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M10 12L6 8L10 4'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    <span>{prevLabel || "Previous"}</span>
                </Link>
            ) : (
                <div className={styles.nav_button_disabled}>
                    <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M10 12L6 8L10 4'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    <span>{prevLabel || "Previous"}</span>
                </div>
            )}

            {nextLink ? (
                <Link to={nextLink} className={styles.nav_button} onClick={scrollToTop}>
                    <span>{nextLabel || "Next"}</span>
                    <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M6 4L10 8L6 12'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </Link>
            ) : (
                <div className={styles.nav_button_disabled}>
                    <span>{nextLabel || "Next"}</span>
                    <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M6 4L10 8L6 12'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default NavigationButtons;

