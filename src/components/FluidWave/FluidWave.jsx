import React from "react";
import WebGLFluidSim, { GL_CONFIGS } from "react-webgl-fluid-sim";
import styles from "./fluidwave.module.css";

// Configure: effect only on mouse/touch move (no auto splats)
GL_CONFIGS.SPLAT_RATE = Number.MAX_SAFE_INTEGER;
GL_CONFIGS.SPLAT_COUNT = () => 0;

// Match reference config: soft, smooth fluid with controlled bloom
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
GL_CONFIGS.DYE_RESOLUTION = isMobile ? 768 : 1536;   // quality: high
GL_CONFIGS.SIM_RESOLUTION = 256;                     // sim resolution: 256
GL_CONFIGS.DENSITY_DISSIPATION = 0.35;                // density diffusion: softer spread
GL_CONFIGS.VELOCITY_DISSIPATION = 0.55;              // velocity diffusion: 0.55
GL_CONFIGS.PRESSURE = 0.16;                           // pressure: 0.16
GL_CONFIGS.CURL = 0;                                 // vorticity: 0 (smooth, no swirl)
GL_CONFIGS.SPLAT_RADIUS = 0.52;                       // splat radius: 0.52
GL_CONFIGS.SPLAT_FORCE = 1200;                        // balanced force for larger radius
GL_CONFIGS.SHADING = false;                           // shading: off
GL_CONFIGS.SUNRAYS = false;                           // sunrays: off
GL_CONFIGS.BLOOM_INTENSITY = 0.35;                   // reduced – less white flash
GL_CONFIGS.BLOOM_THRESHOLD = 0.35;                   // higher – only brighter areas bloom
GL_CONFIGS.BLOOM_RESOLUTION = 384;

// Palette from CSS variables – grays only (no white to reduce flash)
const FLUID_PALETTE = [
    { r: 177 / 255, g: 177 / 255, b: 177 / 255 },    // gray-light
    { r: 85 / 255, g: 85 / 255, b: 85 / 255 },      // gray-medium
    { r: 51 / 255, g: 51 / 255, b: 51 / 255 },      // gray-dark
];

const SPLASH_INTENSITY = 0.35; // lower = less flash

const defaultColorGenerator = () => {
    const color =
        FLUID_PALETTE[Math.floor(Math.random() * FLUID_PALETTE.length)];
    return {
        r: color.r * SPLASH_INTENSITY,
        g: color.g * SPLASH_INTENSITY,
        b: color.b * SPLASH_INTENSITY,
    };
};

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
