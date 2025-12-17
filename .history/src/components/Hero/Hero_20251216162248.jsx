import React from "react";
import styles from "./Hero.module.css";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import { images } from "../../assets/images";

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById("projects");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id='hero'
            className={styles.hero}>
            {images.heroBackground && (
                <AnimatedBackground
                    imageUrl={images.heroBackground}
                    speed={20}
                    direction='parallax'
                />
            )}
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
                        I translate brand concepts into pixel-perfect reality,
                        combining visual storytelling with Frontend to deliver
                        end-to-end experiences.
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.primaryButton}>
                            Get Started Now
                        </button>
                    </div>
                </div>
                <div className={styles.carouselIndicators}>
                    <span className={styles.indicator}></span>
                    <span className={styles.indicator}></span>
                    <span className={styles.indicator}></span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
