import React, { useEffect, useState } from "react";
import FluidWave from "../../components/FluidWave/FluidWave";
import styles from "./Loading.module.css";

const loadingDuration = 5000;
const logoAnimationDuration = 1000;
const overlayFadeDuration = 500;

const Loading = ({ onComplete }) => {
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(
            () => setLoadingComplete(true),
            loadingDuration,
        );
        const timer2 = setTimeout(
            () => onComplete?.(),
            loadingDuration + logoAnimationDuration + overlayFadeDuration,
        );
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
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
