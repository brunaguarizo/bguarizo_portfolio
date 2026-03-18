import React, { useEffect, useState } from "react";
import FluidWave from "../../components/FluidWave/FluidWave";
import styles from "./Loading.module.css";

const loadingDuration = 5500; // loading duration of 5,5 seconds

const Loading = ({ onComplete }) => {
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(
            () => setLoadingComplete(true),
            loadingDuration,
        );
        const timer2 = setTimeout(() => onComplete?.(), loadingDuration);

        const handleSkip = () => {
            // handle skip button - skip the loading page
            clearTimeout(timer1);
            clearTimeout(timer2);
            setLoadingComplete(true);
            onComplete?.();
        };

        window.addEventListener("click", handleSkip, { once: true }); // handle click to skip the loading page
        window.addEventListener("scroll", handleSkip, { once: true }); // handle scroll to skip the loading page

        return () => {
            clearTimeout(timer1); // clear the timer to skip the loading page
            clearTimeout(timer2); // clear the timer to skip the loading page
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
