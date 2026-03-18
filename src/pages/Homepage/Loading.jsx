import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import FluidWave from "../../components/FluidWave/FluidWave";
import styles from "./Loading.module.css";

const loadingDuration = 4700; // 4s + 0.7s (logo animation completes)
const transitionStartDelay = 4000; // When logo starts moving – overlay fades, homepage fades in

const Loading = ({ onComplete, onTransitionStart }) => {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const completeTimer = setTimeout(() => {
            setLoadingComplete(true);
            onComplete?.();
        }, loadingDuration);

        const transitionTimer = setTimeout(() => {
            setIsTransitioning(true);
            onTransitionStart?.();
        }, transitionStartDelay);

        const handleSkip = () => {
            clearTimeout(completeTimer);
            clearTimeout(transitionTimer);
            setIsTransitioning(true);
            setLoadingComplete(true);
            onTransitionStart?.();
            onComplete?.();
        };

        window.addEventListener("click", handleSkip, { once: true });
        window.addEventListener("scroll", handleSkip, { once: true });

        return () => {
            clearTimeout(completeTimer);
            clearTimeout(transitionTimer);
            window.removeEventListener("click", handleSkip);
            window.removeEventListener("scroll", handleSkip);
        };
    }, [onComplete, onTransitionStart]);

    return (
        <div
            className={cn(
                styles.loadingOverlay,
                isTransitioning && styles.loadingTransitioning,
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
