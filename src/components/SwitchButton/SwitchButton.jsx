import React from "react";
import styles from "./SwitchButton.module.css";

const SwitchButton = ({
    value,
    onChange,
    leftLabel = "design",
    rightLabel = "code",
}) => {
    const handleClick = () => {
        onChange(value === leftLabel ? rightLabel : leftLabel);
    };

    return (
        <div
            className={styles.switchContainer}
            onClick={handleClick}>
            <div className={styles.switchTrack}>
                <span
                    className={`${styles.switchLabel} ${
                        value === leftLabel ? styles.switchLabelActive : ""
                    }`}>
                    {leftLabel}
                </span>
                <div
                    className={`${styles.switchThumb} ${
                        value === rightLabel ? styles.switchThumbRight : ""
                    }`}
                />
                <span
                    className={`${styles.switchLabel} ${
                        value === rightLabel ? styles.switchLabelActive : ""
                    }`}>
                    {rightLabel}
                </span>
            </div>
        </div>
    );
};

export default SwitchButton;
