import React from "react";
import WebGLFluidSim from "react-webgl-fluid-sim";
import styles from "./fluidwave.module.css";

/**
 * FluidWave - WebGL Fluid Simulation background
 * Based on [WebGL Fluid Background](https://github.com/tkabalin/WebGL-Fluid-Background)
 * which adapts [PavelDoGreat's WebGL Fluid Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation)
 *
 * Use for: loading screen, hero background
 */

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
            <div className={styles.canvasWrapper}>
                <WebGLFluidSim
                    fixed={fixed}
                    colorGenerator={colorGenerator}
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
