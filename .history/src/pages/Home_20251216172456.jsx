import React from "react";
import styles from "./Home.module.css";
import WavyBackground from "../components/WavyBackground/WavyBackground";

const Home = () => {
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
                            developer who translates brand concepts into
                            pixel-perfect reality, combining visual storytelling
                            with frontend to deliver end-to-end experiences.
                        </p>
                        <button
                            className={styles.scrollButton}
                            aria-label='Scroll down'>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <line
                                    x1='6'
                                    y1='8'
                                    x2='18'
                                    y2='8'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                />
                                <path
                                    d='M12 8L12 16M12 16L8 12M12 16L16 12'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </WavyBackground>
        </section>
    );
};

export default Home;
