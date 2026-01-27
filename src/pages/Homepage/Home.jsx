import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Home.module.css";
import WavyBackground from "../../components/WavyBackground/WavyBackground";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import Button from "../../components/Button/Button";

const Home = () => {
    // Refs for elements that will be animated
    const heroRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const scrollButtonRef = useRef(null);
    const aboutTitleRef = useRef(null);
    const aboutDescriptionRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const profileImageRef = useRef(null);
    const contactTitleRef = useRef(null);
    const contactDescriptionRef = useRef(null);
    const contactButtonRef = useRef(null);

    // Colors based on project CSS variables
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
            role: "Senior Marketing Leader",
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

    useEffect(() => {
        // Wait for ScrollTrigger from CDN to load
        const initScrollTrigger = () => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                gsap.registerPlugin(window.ScrollTrigger);
                setupAnimations();
            } else {
                // Try again after a short delay
                setTimeout(initScrollTrigger, 100);
            }
        };

        const setupAnimations = () => {
            // Hero animation (initial fade in)
            if (
                titleRef.current &&
                descriptionRef.current &&
                scrollButtonRef.current
            ) {
                gsap.fromTo(
                    [
                        titleRef.current,
                        descriptionRef.current,
                        scrollButtonRef.current,
                    ],
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power3.out",
                    },
                );
            }

            // ProjectsGrid animation
            if (projectsRef.current) {
                gsap.fromTo(
                    projectsRef.current,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: projectsRef.current,
                            start: "top 80%",
                            end: "top 50%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // About section animation
            if (aboutRef.current) {
                // Title and description
                if (aboutTitleRef.current && aboutDescriptionRef.current) {
                    gsap.fromTo(
                        [aboutTitleRef.current, aboutDescriptionRef.current],
                        {
                            opacity: 0,
                            x: -50,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            stagger: 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: aboutRef.current,
                                start: "top 80%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }

                // Skills
                if (skillsRef.current) {
                    const skillTags = skillsRef.current.children;
                    gsap.fromTo(
                        skillTags,
                        {
                            opacity: 0,
                            scale: 0.8,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.5,
                            stagger: 0.05,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: skillsRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }

                // Experience
                if (experienceRef.current) {
                    const experienceItems = experienceRef.current.children;
                    gsap.fromTo(
                        experienceItems,
                        {
                            opacity: 0,
                            x: -30,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.6,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: experienceRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }

                // Profile Image
                if (profileImageRef.current) {
                    gsap.fromTo(
                        profileImageRef.current,
                        {
                            opacity: 0,
                            x: 50,
                            scale: 0.9,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: profileImageRef.current,
                                start: "top 80%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }
            }

            // Contact section animation
            if (contactRef.current) {
                if (
                    contactTitleRef.current &&
                    contactDescriptionRef.current &&
                    contactButtonRef.current
                ) {
                    gsap.fromTo(
                        [
                            contactTitleRef.current,
                            contactDescriptionRef.current,
                            contactButtonRef.current,
                        ],
                        {
                            opacity: 0,
                            y: 30,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: contactRef.current,
                                start: "top 80%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }
            }
        };

        // Initialize when component mounts
        initScrollTrigger();

        // Cleanup
        return () => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.getAll().forEach((trigger) =>
                    trigger.kill(),
                );
            }
        };
    }, []);

    return (
        <div className={styles.home_wrapper}>
            <section
                id='hero'
                className={styles.hero}>
                <WavyBackground
                    colors={waveColors}
                    backgroundFill='var(--black)'
                    waveOpacity={0.5}
                    blur={20}
                    speed='slow'
                    waveWidth={100}
                    containerClassName={styles.wavy_container}
                    className={styles.wavy_content}>
                    <div className={styles.container}>
                        <div
                            className={styles.content}
                            ref={heroRef}>
                            <p
                                ref={descriptionRef}
                                className={styles.description}>
                                A multidisciplinary designer based in Vancouver
                            </p>
                            <h1
                                ref={titleRef}
                                className={styles.title}>
                                Connecting brands <br />
                                to people through <br />
                                <span className={styles.italicText}>
                                    design
                                </span>{" "}
                                and{" "}
                                <span className={styles.italicText}>code.</span>
                            </h1>

                            {/* <button
                                ref={scrollButtonRef}
                                className={styles.scroll_button}
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
                            </button> */}
                        </div>
                    </div>
                </WavyBackground>
            </section>
            <div ref={projectsRef}>
                <ProjectsGrid />
            </div>
            <section
                ref={aboutRef}
                id='about'
                className={styles.about}>
                <div className={styles.about_container}>
                    <div className={styles.text_section}>
                        <h2
                            ref={aboutTitleRef}
                            className={styles.about_title}>
                            Meet Bruna
                        </h2>
                        <p
                            ref={aboutDescriptionRef}
                            className={styles.about_description}>
                            Hey there! I'm Bruna Guarizo, a multidisciplinary
                            designer and frontend developer based in Vancouver.
                            I believe that impactful design creates meaningful
                            connections between brands and people. By combining
                            strategic branding with technical precision, I
                            bridge the gap between concept and reality to build
                            seamless, end-to-end digital products.
                        </p>
                        <div
                            ref={skillsRef}
                            className={styles.skills}>
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className={styles.skill_tag}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div
                            ref={experienceRef}
                            className={styles.experience_section}>
                            {experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className={styles.experience_item}>
                                    <div className={styles.experience_content}>
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
                                        <span className={styles.current_badge}>
                                            Currently
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className={styles.button_container}>
                            <Button>More About Me</Button>
                        </div>
                    </div>

                    <div className={styles.profile_image}>
                        <img
                            ref={profileImageRef}
                            src='/bruna.png'
                            alt='Bruna Guarizo'
                            className={styles.profile_img}
                        />
                    </div>
                </div>
            </section>
            <section
                ref={contactRef}
                id='contact'
                className={styles.contact}>
                <WavyBackground
                    colors={waveColors}
                    backgroundFill='var(--black)'
                    waveOpacity={0.5}
                    blur={20}
                    speed='slow'
                    waveWidth={100}
                    containerClassName={styles.wavy_container}
                    className={styles.wavy_content}>
                    <div className={styles.contact_container}>
                        <div className={styles.contact_content}>
                            <h2
                                ref={contactTitleRef}
                                className={styles.contact_title}>
                                Ready to build impactful digital products?
                            </h2>
                            <p
                                ref={contactDescriptionRef}
                                className={styles.description}>
                                Let's combine strategy and code to bring your
                                vision to life.
                            </p>

                            <div ref={contactButtonRef}>
                                <Button
                                    onClick={() =>
                                        (window.location.href =
                                            "mailto:b.guarizo@hotmail.com")
                                    }>
                                    Get In Touch
                                </Button>
                            </div>
                        </div>
                    </div>
                </WavyBackground>
            </section>
        </div>
    );
};

export default Home;
