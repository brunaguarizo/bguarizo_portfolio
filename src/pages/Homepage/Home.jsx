import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import styles from "./Home.module.css";
import FluidWave from "../../components/FluidWave/FluidWave";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import Button from "../../components/Button/Button";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import Loading from "./Loading";
import { useHomeLoading } from "../../context/HomeLoadingContext";

const mobileBreakpoint = 768; // mobile breakpoint of 768px - to avoid loading page on mobile
const hasSeenLoadingKey = "hasSeenLoading"; // key to store the loading page view into a local storages

const Home = () => {
    const navigate = useNavigate();
    const { setHomeLoading } = useHomeLoading();
    const [filterMode, setFilterMode] = useState("design"); // filter mode - set to start with design
    const isMobileView =
        typeof window !== "undefined" && window.innerWidth <= mobileBreakpoint;
    const [isLoading, setIsLoading] = useState(() => {
        // No loading page on mobile
        if (isMobileView) return false;
        // Check if user has already seen the loading page
        const hasSeenLoading =
            typeof window !== "undefined" &&
            localStorage.getItem(hasSeenLoadingKey);
        // If they already saw it, dont show it again.
        return !hasSeenLoading;
    });
    const [isMobile, setIsMobile] = useState(isMobileView);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleLoadingComplete = useCallback(() => {
        //Saving the loading page view into a local storage
        if (typeof window !== "undefined") {
            localStorage.setItem(hasSeenLoadingKey, "true");
        }
        setIsLoading(false);
    }, []);

    const handleTransitionStart = useCallback(() => {
        setIsTransitioning(true);
    }, []);

    useEffect(() => {
        setHomeLoading(isLoading);
    }, [isLoading, setHomeLoading]);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= mobileBreakpoint;
            setIsMobile(mobile);
            if (mobile && isLoading) setIsLoading(false); // ensure no loading overlay on mobile
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, [isLoading]);

    //Page animation
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const aboutTitleRef = useRef(null);
    const aboutDescriptionRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const profileImageRef = useRef(null);
    const contactTitleRef = useRef(null);
    const contactDescriptionRef = useRef(null);
    const contactButtonRef = useRef(null);

    const skills = [
        // skills array - used in the about section
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
        // experience array - used in the about section
        {
            role: "Web Designer",
            company: "Teamtown",
            period: "Currently",
        },
        {
            role: "Web Designer Intern",
            company: "Unicorn Marketing Co.",
            period: "April-May 2026",
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

    const setupAnimations = () => {
        // setup animations for the sections
        if (typeof window === "undefined" || !window.ScrollTrigger) return;
        gsap.registerPlugin(window.ScrollTrigger);

        // Hero animation (initial fade in)
        const heroElements = [titleRef.current, descriptionRef.current].filter(
            Boolean,
        );
        if (heroElements.length > 0) {
            gsap.fromTo(
                heroElements,
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

    useEffect(() => {
        // use effect to setup the animations
        const initScrollTrigger = () => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                gsap.registerPlugin(window.ScrollTrigger);
                setupAnimations();
            } else {
                setTimeout(initScrollTrigger, 100);
            }
        };

        initScrollTrigger();

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
            {isLoading && (
                <Loading
                    onComplete={handleLoadingComplete}
                    onTransitionStart={handleTransitionStart}
                />
            )}

            <div
                className={`${styles.contentWrapper} ${
                    isTransitioning || !isLoading ? styles.contentVisible : ""
                }`}>
                <div className={styles.hero_section}>
                    {isMobile ? (
                        <div
                            className={`${styles.wavy_container} ${styles.hero_mobile_bg}`}>
                            <div className={styles.wavy_content}>
                                <div className={styles.container}>
                                    <div className={styles.content}>
                                        <p
                                            ref={descriptionRef}
                                            className={styles.description}>
                                            A multidisciplinary designer based
                                            in Vancouver
                                        </p>
                                        <h1
                                            ref={titleRef}
                                            className={styles.title}>
                                            <span className={styles.title_text}>
                                                Connecting brands <br />
                                                to people through
                                            </span>
                                            <SwitchButton
                                                value={filterMode}
                                                onChange={setFilterMode}
                                                leftLabel='design'
                                                rightLabel='code'
                                            />
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <FluidWave
                            containerClassName={styles.wavy_container}
                            className={styles.wavy_content}>
                            <div className={styles.container}>
                                <div className={styles.content}>
                                    <p
                                        ref={descriptionRef}
                                        className={styles.description}>
                                        A multidisciplinary designer based in
                                        Vancouver
                                    </p>
                                    <h1
                                        ref={titleRef}
                                        className={styles.title}>
                                        <span className={styles.title_text}>
                                            Connecting brands <br />
                                            to people through
                                        </span>
                                        <SwitchButton
                                            value={filterMode}
                                            onChange={setFilterMode}
                                            leftLabel='design'
                                            rightLabel='code'
                                        />
                                    </h1>
                                </div>
                            </div>
                        </FluidWave>
                    )}
                </div>
                <div>
                    <ProjectsGrid filterMode={filterMode} />
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
                                Hey there! I'm Bruna Guarizo, a
                                multidisciplinary designer and frontend
                                developer based in Vancouver. I believe that
                                impactful design creates meaningful connections
                                between brands and people. By combining
                                strategic branding with technical precision, I
                                bridge the gap between concept and reality to
                                build seamless, end-to-end digital products.
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
                                        <div
                                            className={
                                                styles.experience_content
                                            }>
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
                                    </div>
                                ))}
                            </div>
                            <div className={styles.button_container}>
                                <Button onClick={() => navigate("/about")}>
                                    More About Me
                                </Button>
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
                    {isMobile ? (
                        <div
                            className={`${styles.wavy_container} ${styles.contact_mobile_bg}`}>
                            <div className={styles.wavy_content}>
                                <div className={styles.contact_container}>
                                    <div className={styles.contact_content}>
                                        <p
                                            ref={contactDescriptionRef}
                                            className={styles.description}>
                                            Let's combine strategy and code to
                                            bring your vision to life
                                        </p>
                                        <h2
                                            ref={contactTitleRef}
                                            className={styles.contact_title}>
                                            Ready to build impactful digital
                                            products?
                                        </h2>

                                        <div ref={contactButtonRef}>
                                            <Button
                                                onClick={() =>
                                                    (window.location.href =
                                                        "mailto:guarizob@gmail.com")
                                                }>
                                                Get In Touch
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <FluidWave
                            containerClassName={styles.wavy_container}
                            className={styles.wavy_content}>
                            <div className={styles.contact_container}>
                                <div className={styles.contact_content}>
                                    <p
                                        ref={contactDescriptionRef}
                                        className={styles.description}>
                                        Let's combine strategy and code to bring
                                        your vision to life
                                    </p>
                                    <h2
                                        ref={contactTitleRef}
                                        className={styles.contact_title}>
                                        Ready to build impactful digital
                                        products?
                                    </h2>

                                    <div ref={contactButtonRef}>
                                        <Button
                                            onClick={() =>
                                                (window.location.href =
                                                    "mailto:guarizob@gmail.com")
                                            }>
                                            Get In Touch
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </FluidWave>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Home;
