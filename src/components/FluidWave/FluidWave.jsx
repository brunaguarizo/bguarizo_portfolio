import React from "react";
import WebGLFluidSim, { GL_CONFIGS } from "react-webgl-fluid-sim";
import styles from "./fluidwave.module.css";

Object.assign(GL_CONFIGS, {
    SPLAT_RATE: Number.MAX_SAFE_INTEGER,
    SPLAT_COUNT: () => 0, // no automatic splashes
    DYE_RESOLUTION: 768, //lighter resolution - more performance
    SIM_RESOLUTION: 128, // lighter sim resolution - more performance
    DENSITY_DISSIPATION: 0.35, // velocity to color dissipation
    VELOCITY_DISSIPATION: 0.55, // fluid velocity dissipation
    PRESSURE: 0.5, // fluid pressure and intensity
    CURL: 0.5, // vorticity intensity - when user interacts
    SPLAT_RADIUS: 0.3, // splash area - when user interacts
    SPLAT_FORCE: 200, // splash force - when user interacts
    SHADING: true, // 3D shading
    SUNRAYS: false, // sunrays - false to save performance
    BLOOM_INTENSITY: 0.1, // bloom intensity
    BLOOM_THRESHOLD: 0.2, // bloom threshold
    BLOOM_RESOLUTION: 256, // bloom resolution - lighter - more performance
});

const gray = (85 / 255) * 0.2; // gray-medium color - subtle splash
const defaultColorGenerator = () => ({ r: gray, g: gray, b: gray });

export const FluidWave = ({
    children,
    className,
    containerClassName,
    fixed = false,
    colorGenerator,
    ...props
}) => {
    return (
        <div
            className={`${styles.container} ${containerClassName || ""}`}
            {...props}>
            <div className={styles.canvas_wrapper}>
                <WebGLFluidSim
                    fixed={fixed}
                    colorGenerator={colorGenerator ?? defaultColorGenerator}
                />
            </div>
            {children && (
                <div className={`${styles.content} ${className || ""}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default FluidWave;
