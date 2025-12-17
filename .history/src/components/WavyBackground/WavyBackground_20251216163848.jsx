import React, { useEffect, useRef } from "react";
import styles from "./WavyBackground.module.css";

const WavyBackground = ({
    children,
    className = "",
    containerClassName = "",
    colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    waveWidth = 50,
    backgroundFill = "black",
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
}) => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationId;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const speedMultiplier = speed === "fast" ? 0.02 : 0.01;

        const hexToRgba = (hex, alpha) => {
            if (hex.startsWith("rgba") || hex.startsWith("rgb")) {
                return hex;
            }
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        const drawWave = (y, amplitude, frequency, color, phase = 0) => {
            ctx.beginPath();
            ctx.moveTo(0, y);

            for (let x = 0; x < canvas.width; x += 1) {
                const waveY =
                    y +
                    amplitude *
                        Math.sin(
                            (x / waveWidth) * frequency +
                                time * speedMultiplier +
                                phase
                        );
                ctx.lineTo(x, waveY);
            }

            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        };

        const animate = () => {
            ctx.fillStyle = backgroundFill;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.save();
            ctx.filter = `blur(${blur}px)`;

            const waveCount = colors.length;
            const waveHeight = canvas.height / waveCount;

            colors.forEach((color, index) => {
                const y = (canvas.height / waveCount) * index;
                const amplitude = waveHeight * 0.3;
                const frequency = 2;
                const phase = (index * Math.PI) / waveCount;

                const rgbaColor = hexToRgba(color, waveOpacity);
                drawWave(y, amplitude, frequency, rgbaColor, phase);
            });

            ctx.restore();

            time += 1;
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [colors, waveWidth, backgroundFill, blur, speed, waveOpacity]);

    return (
        <div className={`${styles.container} ${containerClassName}`}>
            <canvas
                ref={canvasRef}
                className={styles.canvas}
            />
            <div className={`${styles.content} ${className}`}>{children}</div>
        </div>
    );
};

export default WavyBackground;
