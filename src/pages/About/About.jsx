import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import Button from "../../components/Button/Button";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import DraggableTags from "../../components/DraggableTags/DraggableTags";

const AboutMe = () => {
    const skills = [
        "Product Design",
        "Brand Strategy",
        "UX/UI Design",
        "Frontend Development",
        "Visual Storytelling",
        "Design Systems",
        "Visual Identity",
        "Motion Design",
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
            role: "Senior  Marketing Leader",
            company: "Qi Tech",
            period: "2022-23",
        },

        {
            role: "Senior Brand Designer",
            company: "Brand Gym",
            period: "2020-22",
        },
        {
            role: "Art Director",
            company: "Bowler",
            period: "2019-20",
        },
        {
            role: "Graphic Designer",
            company: "Design Bridge and Partners",
            period: "2018-19",
        },
        {
            role: "Graphic Designer Intern",
            company: "Abril Publisher",
            period: "2017-18",
        },
    ];

    const education = [
        {
            role: "Digital Design and Development",
            company: "BCIT - British Columbia Institute of Technology",
            type: "Diploma",
            period: "2024-26 (expected)",
        },
        {
            role: "Branding",
            company: "IADE - Creative University",
            type: "Post graduation",
            period: "2021-22",
        },
        {
            role: "Digital UX",
            company: "PUC - Pontifical Catholic University",
            type: "Post graduation",
            period: "2020-21",
        },
        {
            role: "Graphic Design",
            company: "ESPM - School of Advertising and Marketing",
            type: "Bachelor's degree",
            period: "2014-17",
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Me</h1>

            <div className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Hey there!</h2>
                    <p className={styles.section_description}>
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
                        <h2 className={styles.section_title_2}>
                            Work Experience
                        </h2>
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
                    <div className={styles.experienceSection}>
                        <h2 className={styles.section_title_2}>Education</h2>
                        {education.map((exp, index) => (
                            <div
                                key={index}
                                className={styles.experienceItem}>
                                <div
                                    className={`${styles.experienceContent} ${styles.education}`}>
                                    <div className={styles.role}>
                                        {exp.role}
                                    </div>
                                    <div className={styles.company}>
                                        {exp.company}
                                    </div>
                                    <div className={styles.type}>
                                        {exp.type}
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
                </div>

                <div className={styles.content}>
                    <img
                        src='/askfolio/bruna.png'
                        alt='Bruna Guarizo'
                        className={styles.image}
                    />
                    <DraggableTags title='Roles' />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
