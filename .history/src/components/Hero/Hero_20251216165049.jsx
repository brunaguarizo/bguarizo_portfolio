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
    const waveColors = [
        "#555555", // --gray-medium
        "#333333", // --gray-dark
        "#ffffff", // --white
    ];

    return (
        <section
            id='hero'
            className={styles.hero}>
            <WavyBackground
                colors={waveColors}
                backgroundFill='#141414' // --black
                waveOpacity={0.5}
                blur={20}
                speed='slow'
                waveWidth={100}
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
