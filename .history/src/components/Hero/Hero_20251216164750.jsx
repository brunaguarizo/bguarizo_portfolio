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

    // Cores baseadas nas variáveis CSS do projeto - mais sutis como no site original
    const waveColors = [
        "#666666", // tom médio
        "#555555", // --gray-medium
        "#444444", // tom intermediário
        "#333333", // --gray-dark
        "#999999", // --gray-light (mais sutil)
    ];

    return (
        <section
            id='hero'
            className={styles.hero}>
            <WavyBackground
                colors={waveColors}
                backgroundFill='#141414' // --black
                waveOpacity={0.3}
                blur={30}
                speed='slow'
                waveWidth={80}
                containerClassName={styles.wavyContainer}
                className={styles.wavyContent}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            Connecting brands to people through design and code.
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
