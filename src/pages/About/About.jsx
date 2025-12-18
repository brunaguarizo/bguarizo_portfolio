import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./About.module.css";
import DraggableTags from "../../components/DraggableTags/DraggableTags";

const AboutMe = () => {
    const titleRef = useRef(null);
    const sectionTitleRef = useRef(null);
    const sectionDescriptionRef = useRef(null);
    const skillsRef = useRef(null);
    const workExperienceRef = useRef(null);
    const educationRef = useRef(null);
    const imageRef = useRef(null);
    const draggableTagsRef = useRef(null);

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
            // Title animation
            if (titleRef.current) {
                gsap.fromTo(
                    titleRef.current,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                    }
                );
            }

            // Main section animation (title and description)
            if (sectionTitleRef.current && sectionDescriptionRef.current) {
                gsap.fromTo(
                    [sectionTitleRef.current, sectionDescriptionRef.current],
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
                            trigger: sectionTitleRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            // Skills animation
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
                    }
                );
            }

            // Work Experience animation
            if (workExperienceRef.current) {
                const experienceItems = workExperienceRef.current.querySelectorAll(
                    `.${styles.experienceItem}`
                );
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
                            trigger: workExperienceRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            // Education animation
            if (educationRef.current) {
                const educationItems = educationRef.current.querySelectorAll(
                    `.${styles.experienceItem}`
                );
                gsap.fromTo(
                    educationItems,
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
                            trigger: educationRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            // Image animation
            if (imageRef.current) {
                gsap.fromTo(
                    imageRef.current,
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
                            trigger: imageRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            // DraggableTags animation
            if (draggableTagsRef.current) {
                gsap.fromTo(
                    draggableTagsRef.current,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: draggableTagsRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        };

        // Initialize when component mounts
        initScrollTrigger();

        // Cleanup
        return () => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <h1 ref={titleRef} className={styles.title}>About Me</h1>

            <div className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 ref={sectionTitleRef} className={styles.section_title}>Hey there!</h2>
                    <p ref={sectionDescriptionRef} className={styles.section_description}>
                        I'm Bruna Guarizo, a Brazilian multidisciplinary
                        designer and frontend developer based in Vancouver. I
                        believe that truly and impactful design creates
                        meaningful connections between brands and people. I
                        bridge the gap between concept and reality, combining
                        strategic design with technical precision to build
                        end-to-end digital products.
                    </p>
                    <div ref={skillsRef} className={styles.skills}>
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className={styles.skill_tag}>
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div ref={workExperienceRef} className={styles.experience_section}>
                        <h2 className={styles.section_title_2}>
                            Work Experience
                        </h2>
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
                    <div ref={educationRef} className={styles.experience_section}>
                        <h2 className={styles.section_title_2}>Education</h2>
                        {education.map((exp, index) => (
                            <div
                                key={index}
                                className={styles.experience_item}>
                                <div
                                    className={`${styles.experience_content} ${styles.education}`}>
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
                                    <span className={styles.current_badge}>
                                        Currently
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.content}>
                    <img
                        ref={imageRef}
                        src='/askfolio/bruna.png'
                        alt='Bruna Guarizo'
                        className={styles.image}
                    />
                    <div ref={draggableTagsRef}>
                        <DraggableTags title='Roles' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
