import React from "react";
import styles from "./SwitchButton.module.css";

const SwitchButton = ({ value, onChange, leftLabel = "design", rightLabel = "code" }) => {
    const handleClick = () => {
        onChange(value === leftLabel ? rightLabel : leftLabel);
    };

    const handleLabelClick = (label) => {
        if (value !== label) {
            onChange(label);
        }
    };

    return (
        <div
            className={styles.switchContainer}
            onClick={handleClick}>
            <div className={styles.switchTrack}>
                {/* Quando está em design, mostra code à direita */}
                {value === leftLabel ? (
                    <>
                        <div className={styles.switchThumb}>
                            <span className={styles.switchThumbLabel}>
                                {leftLabel}
                            </span>
                        </div>
                        <span
                            className={`${styles.switchLabel} ${styles.switchLabelRight}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleLabelClick(rightLabel);
                            }}>
                            {rightLabel}
                        </span>
                    </>
                ) : (
                    <>
                        {/* Quando está em code, mostra design à esquerda */}
                        <span
                            className={`${styles.switchLabel} ${styles.switchLabelLeft}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleLabelClick(leftLabel);
                            }}>
                            {leftLabel}
                        </span>
                        <div className={`${styles.switchThumb} ${styles.switchThumbRight}`}>
                            <span className={styles.switchThumbLabel}>
                                {rightLabel}
                            </span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SwitchButton;
