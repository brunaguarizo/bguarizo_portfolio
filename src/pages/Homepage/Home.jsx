import React from "react";
import styles from "./Home.module.css";
import WavyBackground from "../../components/WavyBackground/WavyBackground";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import Button from "../../components/Button/Button";

const Home = () => {
    // Cores baseadas nas variáveis CSS do projeto
    const waveColors = [
        "#555555", // --gray-medium
        "#333333", // --gray-dark
        "#ffffff", // --white
    ];

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
    ];

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.homeWrapper}>
            <section
                id='hero'
                className={styles.hero}>
                <WavyBackground
                    colors={waveColors}
                    backgroundFill='#141414'
                    waveOpacity={0.5}
                    blur={20}
                    speed='slow'
                    waveWidth={100}
                    containerClassName={styles.wavyContainer}
                    className={styles.wavyContent}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                Connecting brands to people through design and
                                code
                            </h1>
                            <p className={styles.description}>
                                Hey there, I'm Bruna, a brand designer and
                                frontend developer who translates brand concepts
                                into pixel-perfect reality, combining visual
                                storytelling with frontend to deliver end-to-end
                                experiences.
                            </p>
                            <button
                                className={styles.scrollButton}
                                onClick={scrollToProjects}
                                aria-label='Scroll down to projects'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M12 8L12 18M12 18L8 14M12 18L16 14'
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
            <ProjectsGrid />
            <section
                id='about'
                className={styles.about}>
                <div className={styles.aboutContainer}>
                    <div className={styles.textSection}>
                        <h2 className={styles.aboutTitle}>Meet Bruna</h2>
                        <p className={styles.aboutDescription}>
                            I'm Bruna Guarizo, a Brazilian multidisciplinary
                            designer and frontend developer based in Vancouver.
                            I believe that truly and impactful design creates
                            meaningful connections between brands and people. I
                            bridge the gap between concept and reality,
                            combining strategic design with technical precision
                            to build end-to-end digital products.
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
                            <Button>More About Me</Button>
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
            <section
                id='contact'
                className={styles.contact}>
                <WavyBackground
                    colors={waveColors}
                    backgroundFill='#141414'
                    waveOpacity={0.5}
                    blur={20}
                    speed='slow'
                    waveWidth={100}
                    containerClassName={styles.wavyContainer}
                    className={styles.wavyContent}>
                    <div className={styles.contactContainer}>
                        <div className={styles.contactContent}>
                            <h2 className={styles.contactTitle}>
                                Ready to build impactful digital products?
                            </h2>
                            <p className={styles.description}>
                                Let's combine strategy and code to bring your
                                vision to life.
                            </p>

                            <Button
                                onClick={() =>
                                    (window.location.href =
                                        "mailto:b.guarizo@hotmail.com")
                                }>
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                </WavyBackground>
            </section>
        </div>
    );
};

export default Home;
