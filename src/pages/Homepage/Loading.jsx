import React, { useEffect, useState } from "react";
import FluidWave from "../../components/FluidWave/FluidWave";
import styles from "./Loading.module.css";

const loadingDuration = 5500;

const Loading = ({ onComplete }) => {
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(
            () => setLoadingComplete(true),
            loadingDuration,
        );
        const timer2 = setTimeout(() => onComplete?.(), loadingDuration);

        const handleSkip = () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            setLoadingComplete(true);
            onComplete?.();
        };

        window.addEventListener("click", handleSkip, { once: true });
        window.addEventListener("scroll", handleSkip, { once: true });

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            window.removeEventListener("click", handleSkip);
            window.removeEventListener("scroll", handleSkip);
        };
    }, [onComplete]);

    return (
        <div
            className={`${styles.loadingOverlay} ${
                loadingComplete ? styles.loadingComplete : ""
            }`}>
            <FluidWave
                fixed={true}
                containerClassName={styles.loadingFluidContainer}>
                <div className={styles.loadingContent}>
                    <img
                        src='/bg logo.svg'
                        alt='Bruna Guarizo'
                        className={styles.loadingLogo}
                        fetchPriority='high'
                    />
                    <p className={styles.loadingSubtitle}>
                        Brand Designer & Frontend Developer
                    </p>
                </div>
            </FluidWave>
        </div>
    );
};

export default Loading;
