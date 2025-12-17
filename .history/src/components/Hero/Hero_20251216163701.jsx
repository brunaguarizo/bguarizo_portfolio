import React from "react";
import styles from "./Hero.module.css";
import WavyBackground from "../WavyBackground/WavyBackground";

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById("projects");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Cores baseadas nas variáveis CSS do projeto
    // Usando valores hexadecimais que correspondem às variáveis
    const waveColors = [
        "#999999", // --gray-light
        "#555555", // --gray-medium
        "#333333", // --gray-dark
        "#ffffff", // --white
        "#999999", // --gray-light
    ];

    return (
        <section id='hero' className={styles.hero}>
            <WavyBackground
                colors={waveColors}
                backgroundFill="#141414" // --black
                waveOpacity={0.3}
                blur={10}
                speed="fast"
                containerClassName={styles.wavyContainer}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            Connecting brands to people through
                            <span className={styles.highlight}>
                                {" "}
                                design and code.
                            </span>
                        </h1>
                        <p className={styles.description}>
                            Hey there, I'm Bruna, a brand designer and frontend
                            dev who translates brand concepts into pixel-perfect
                            reality, combining visual storytelling with Frontend
                            to deliver end-to-end experiences.
                        </p>
                        <div className={styles.buttons}>
                            <button className={styles.primaryButton}>
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </WavyBackground>
        </section>
    );
};

export default Hero;
