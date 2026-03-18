import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import FluidWave from "../../components/FluidWave/FluidWave";
import styles from "./Loading.module.css";

const loadingDuration = 4700; // 4s + 0.7s (logo animation completes)

const Loading = ({ onComplete }) => {
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingComplete(true);
            onComplete?.();
        }, loadingDuration);

        const handleSkip = () => {
            clearTimeout(timer);
            setLoadingComplete(true);
            onComplete?.();
        };

        window.addEventListener("click", handleSkip, { once: true });
        window.addEventListener("scroll", handleSkip, { once: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener("click", handleSkip);
            window.removeEventListener("scroll", handleSkip);
        };
    }, [onComplete]);

    return (
        <div
            className={cn(
                styles.loadingOverlay,
                loadingComplete && styles.loadingComplete,
            )}
            style={{ "--loading-duration": `${loadingDuration}ms` }}>
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
