import React from "react";
import styles from "./About.module.css";
import Button from "../Button/Button";

const About = () => {
    const skills = [
        "Product Design",
        "Brand Strategy",
        "UX/UI Design",
        "Frontend Development",
        "Visual Storytelling",
        "Design Systems",
    ];

    const experience = [
        {
            role: "Product Designer",
            company: "Freelance",
            period: "Currently",
        },
        {
            role: "Senior Brand Designer",
            company: "Marcas com Sal",
            period: "2023-24",
        },
        {
            role: "Senior Brand Designer",
            company: "Brand Gym",
            period: "2020-22",
        },
    ];

    return (
        <section
            id='about'
            className={styles.about}>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <h2 className={styles.title}>Meet Bruna</h2>
                    <p className={styles.description}>
                        I'm Bruna Guarizo, a Brazilian multidisciplinary
                        designer and frontend developer based in Vancouver. I
                        believe that truly and impactful design creates
                        meaningful connections between brands and people. I
                        bridge the gap between concept and reality, combining
                        strategic design with technical precision to build
                        end-to-end digital products.
                    </p>
                    <div className={styles.skills}>
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className={styles.skillTag}>
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className={styles.experienceSection}>
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                className={styles.experienceItem}>
                                <div className={styles.experienceContent}>
                                    <div className={styles.role}>
                                        {exp.role}
                                    </div>
                                    <div className={styles.company}>
                                        {exp.company}
                                    </div>
                                    <div className={styles.period}>
                                        {exp.period}
                                    </div>
                                </div>
                                {exp.current && (
                                    <span className={styles.currentBadge}>
                                        Currently
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button> Know more about me</Button>
                    </div>
                </div>

                <div className={styles.profileImage}>
                    <img
                        src='/askfolio/bruna.png'
                        alt='Bruna Guarizo'
                        className={styles.profileImg}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
