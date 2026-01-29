import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
};

const highlight =
    "radial-gradient(75% 181.16% at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)";

const GlowOverlay = ({ hovered, direction }) => (
    <motion.div
        className={styles.gradient_overlay}
        initial={{ background: movingMap[direction] }}
        animate={{
            background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: 1 }}
    />
);

const Button = ({
    children,
    onClick,
    className,
    containerClassName,
    duration = 1,
    clockwise = true,
    disableGlow = false,
    ...props
}) => {
    const [hovered, setHovered] = useState(false);
    const [direction, setDirection] = useState("TOP");

    useEffect(() => {
        if (!hovered) {
            const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
            const interval = setInterval(() => {
                setDirection((current) => {
                    const currentIndex = directions.indexOf(current);
                    const nextIndex = clockwise
                        ? (currentIndex - 1 + directions.length) % directions.length
                        : (currentIndex + 1) % directions.length;
                    return directions[nextIndex];
                });
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered, duration, clockwise]);

    return (
        <motion.button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            className={cn(
                styles.button_container,
                disableGlow && styles.button_no_glow,
                containerClassName,
            )}
            {...props}>
            <div className={cn(styles.button_content, className)}>{children}</div>
            {!disableGlow && <GlowOverlay hovered={hovered} direction={direction} />}
            {!disableGlow && <div className={styles.button_background} />}
        </motion.button>
    );
};

const GlowButton = ({ children, ...props }) => (
    <Button {...props}>{children}</Button>
);

const FlatButton = ({ children, ...props }) => (
    <Button disableGlow {...props}>
        {children}
    </Button>
);

export { GlowButton, FlatButton };
export default Button;

export const ProjectButton = ({ className, ...props }) => (
    <button
        className={`${styles.project_button} ${className || ""}`}
        {...props}>
        <div className={styles.project_button_content}>
            <span className={styles.project_button_text}>View Case Study</span>
            <div className={styles.project_button_arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                </svg>
            </div>
        </div>
    </button>
);

