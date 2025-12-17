import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "../../../lib/utils";
import styles from "./WavyBackground.module.css";

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}) => {
    const noise = createNoise3D();
    let w, h, nt, i, x, ctx, canvas;
    const canvasRef = useRef(null);

    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    const init = () => {
        canvas = canvasRef.current;
        if (!canvas) return;

        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = canvas.offsetWidth || window.innerWidth;
        h = ctx.canvas.height = canvas.offsetHeight || window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;

        const handleResize = () => {
            w = ctx.canvas.width = canvas.offsetWidth || window.innerWidth;
            h = ctx.canvas.height = canvas.offsetHeight || window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };

        window.addEventListener("resize", handleResize);
        render();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    };

    const waveColors = colors ?? [
        "#999999", // --gray-light
        "#666666",
        "#555555", // --gray-medium
        "#333333", // --gray-dark
        "#ffffff", // --white
    ];

    const drawWave = (n) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = waveColors[i % waveColors.length];
            for (x = 0; x < w; x += 5) {
                var y = noise(x / 1000, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.5);
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId;
    const render = () => {
        if (!ctx) return;
        ctx.fillStyle = backgroundFill || "#141414";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
    };

    useEffect(() => {
        init();
        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
                navigator.userAgent.includes("Safari") &&
                !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div className={cn(styles.container, containerClassName)}>
            <canvas
                className={styles.canvas}
                ref={canvasRef}
                id='canvas'
                style={{
                    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                }}></canvas>
            <div
                className={cn(styles.content, className)}
                {...props}>
                {children}
            </div>
        </div>
    );
};

export default WavyBackground;
