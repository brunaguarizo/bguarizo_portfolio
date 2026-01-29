import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";

const Goomer = () => {
    const titleRef = useRef(null);
    const firstSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const firstImageRef = useRef(null);
    const aboutProjectRef = useRef(null);
    const challengeSectionRef = useRef(null);
    const firstListRef = useRef(null);
    const secondListRef = useRef(null);
    const image2ColRef = useRef(null);
    const thirdSectionRef = useRef(null);
    const thirdListRef = useRef(null);
    const secondImageRef = useRef(null);
    const fourthSectionRef = useRef(null);
    const secondImage2ColRef = useRef(null);
    const navigationRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);

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
                    },
                );
            }

            // First section animation (Overview)
            if (firstSectionRef.current) {
                const children = firstSectionRef.current.children;
                gsap.fromTo(
                    children,
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
                            trigger: firstSectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Second section animation (Year/Role)
            if (secondSectionRef.current) {
                const children = secondSectionRef.current.children;
                gsap.fromTo(
                    children,
                    {
                        opacity: 0,
                        x: 50,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: secondSectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // First image animation
            if (firstImageRef.current) {
                gsap.fromTo(
                    firstImageRef.current,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: firstImageRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // "About the project" section animation
            if (aboutProjectRef.current) {
                const children =
                    aboutProjectRef.current.querySelectorAll(`h2, p`);
                gsap.fromTo(
                    children,
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
                            trigger: aboutProjectRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // "The Challenge" section animation
            if (challengeSectionRef.current) {
                const children =
                    challengeSectionRef.current.querySelectorAll(`h2, p`);
                gsap.fromTo(
                    children,
                    {
                        opacity: 0,
                        x: -30,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: challengeSectionRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // First list animation (The Challenge)
            if (firstListRef.current) {
                const listItems = firstListRef.current.querySelectorAll("li");
                gsap.fromTo(
                    listItems,
                    {
                        opacity: 0,
                        x: -30,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: firstListRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Second list animation (Research & Insights)
            if (secondListRef.current) {
                const listItems = secondListRef.current.querySelectorAll("li");
                gsap.fromTo(
                    listItems,
                    {
                        opacity: 0,
                        x: -30,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: secondListRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Two-column images animation
            if (image2ColRef.current) {
                const images = image2ColRef.current.querySelectorAll("img");
                gsap.fromTo(
                    images,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: image2ColRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Third section animation
            if (thirdSectionRef.current) {
                const children =
                    thirdSectionRef.current.querySelectorAll(`h2, p`);
                if (children.length > 0) {
                    gsap.fromTo(
                        children,
                        {
                            opacity: 0,
                            x: -30,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: thirdSectionRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }
            }

            // Third list animation (The Solution)
            if (thirdListRef.current) {
                const listItems = thirdListRef.current.querySelectorAll("li");
                gsap.fromTo(
                    listItems,
                    {
                        opacity: 0,
                        x: -30,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: thirdListRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Second image animation
            if (secondImageRef.current) {
                gsap.fromTo(
                    secondImageRef.current,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: secondImageRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Fourth section animation
            if (fourthSectionRef.current) {
                const children =
                    fourthSectionRef.current.querySelectorAll(`h2, p`);
                if (children.length > 0) {
                    gsap.fromTo(
                        children,
                        {
                            opacity: 0,
                            x: 50,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: fourthSectionRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }
            }

            // Second two-column images animation
            if (secondImage2ColRef.current) {
                const images =
                    secondImage2ColRef.current.querySelectorAll("img");
                if (images.length > 0) {
                    gsap.fromTo(
                        images,
                        {
                            opacity: 0,
                            y: 50,
                            scale: 0.95,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: "power3.out",
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: secondImage2ColRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }
            }

            // NavigationButtons animation
            if (navigationRef.current) {
                gsap.fromTo(
                    navigationRef.current,
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
                            trigger: navigationRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Refresh ScrollTrigger to recalculate positions
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        };

        // Initialize when component mounts
        initScrollTrigger();

        // Refresh ScrollTrigger after a short delay to ensure DOM is fully rendered
        const refreshTimer = setTimeout(() => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        }, 100);

        // Also refresh when window loads to ensure all images are loaded
        const handleLoad = () => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        };
        window.addEventListener("load", handleLoad);

        // Cleanup
        return () => {
            clearTimeout(refreshTimer);
            window.removeEventListener("load", handleLoad);
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.getAll().forEach((trigger) =>
                    trigger.kill(),
                );
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <h1
                ref={titleRef}
                className={styles.title}>
                Goomer
            </h1>
            <h2 className={styles.title_details}>
                The right ingredient for restaurant growth.
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        Founded in 2014, Goomer is a technology company
                        dedicated to{" "}
                        <strong>
                            helping restaurants achieve excellence in service.
                        </strong>{" "}
                        Initially known for digital menu tablets, the company
                        evolved to include delivery solutions and QR Code
                        ordering. However, despite its close relationship with
                        clients and a "partner-first" philosophy, the brand had
                        become outdated. It felt functional but "bland," failing
                        to reflect the company's vibrant evolution.{" "}
                        <strong>
                            The goal was to rebrand Goomer to match its
                            ambition: moving from a tool provider to an
                            essential growth partner for food service
                            businesses.
                        </strong>
                    </p>
                </div>

                <div
                    ref={secondSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2020</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        Visual Identity
                        <br />
                        Brand Designer
                    </p>
                    <h2 className={styles.section_title}>Team</h2>
                    <p className={styles.section_description}>
                        Visual Identity: Bruna Guarizo and Dan Schunck
                        <br />
                        Motion Design: Douglas Farias <br />
                        Illustration: Robson Fernandez <br />
                        Strategy: Juliana Willhelm, Jéssica Lago, and David
                        Jozef <br /> Copywriting: Giovanni Ghilardi
                        <br />
                        Project Management: Patrícia Perrone <br />
                        Agency: Brand Gym
                    </p>
                </div>
            </div>

            <video
                ref={firstImageRef}
                src='/goomer/goomer-image1.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />

            <div
                ref={aboutProjectRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>About the project</h2>
                </div>

                <div
                    ref={challengeSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>The Challenge</h2>
                    <p className={styles.section_description}>
                        The primary challenge was a clear misalignment between
                        identity and reality. Although Goomer was valued by its
                        customers for its partnership-driven approach, its
                        visual presentation was cold, purely functional, and
                        lacked the "seasoning" needed to stand out. This
                        "blandness" made the brand indistinguishable from
                        generic tech utilities. Our goal was to shift the
                        narrative from a simple "digital menu app" to a
                        <strong>
                            "complete ecosystem for restaurant success,"
                        </strong>{" "}
                        effectively preparing the company for a period of
                        aggressive market expansion.
                    </p>

                    <div className={styles.space}></div>

                    <h2 className={styles.section_title}>Brand Strategy</h2>
                    <p className={styles.section_description}>
                        Our strategy centered on the insight that Goomer brings
                        more than just digital orders,{" "}
                        <strong>it brings people together</strong>. We defined
                        Goomer as a brand that champions the restaurant owner
                        and reimagines the dining experience.
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>The Human Touch: </strong>We brought
                            humanity to the forefront of both verbal and visual
                            communication.
                        </li>
                        <li>
                            <strong>The Tagline: </strong>We established the
                            promise: "The right ingredient for your restaurant
                            to grow." This positioned Goomer not as a vendor,
                            but as an essential part of the kitchen's success
                            formula.
                        </li>
                        <li>
                            <strong>Partnership: </strong>The strategy
                            emphasized that Goomer "sits at the same table" as
                            the restaurant owner, ready to listen and solve
                            problems together.
                        </li>
                    </ul>
                </div>
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/goomer/goomer-image2.png'
                    alt='Goomer image'
                    className={styles.image}
                />
                <video
                    ref={firstImageRef}
                    src='/goomer/goomer-image3.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.image}
                />
            </div>

            <video
                ref={firstImageRef}
                src='/goomer/goomer-image6.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Solution</h2>
                    <p className={styles.section_description}>
                        We added spice to every touchpoint:{" "}
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>Visual Identity: </strong>We developed a new
                            logo that is friendlier and more approachable.
                        </li>
                        <li>
                            <strong>Illustration System: </strong> We created a
                            fun, vibrant illustration style that depicts the
                            chaotic, passionate reality of restaurant owners and
                            staff.
                        </li>
                        <li>
                            <strong>Tone of Voice: </strong>The communication
                            became warmer and more empathetic, using culinary
                            metaphors ("seasoning," "ingredients") to speak the
                            same language as the chefs and entrepreneurs we
                            serve.
                        </li>
                    </ul>
                </div>
                <div className={styles.content}></div>
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/goomer/goomer-image5.png'
                    alt='Goomer image'
                    className={styles.image}
                />
                <video
                    ref={firstImageRef}
                    src='/goomer/goomer-image4.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.image}
                />
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/goomer/goomer-image7.png'
                    alt='Goomer image'
                    className={styles.image}
                />
                <img
                    src='/goomer/goomer-image8.png'
                    alt='Goomer image'
                    className={styles.image}
                />
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <video
                    ref={firstImageRef}
                    src='/goomer/goomer-image9.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.image}
                />
                <img
                    src='/goomer/goomer-image10.png'
                    alt='Goomer image'
                    className={styles.image}
                />
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>Results and Impact</h2>
                    <p className={styles.section_description}>
                        The rebranding was a pivotal moment that prepared Goomer
                        for massive scale. Shortly after the new brand identity
                        was implemented,{" "}
                        <strong>
                            Goomer solidified its position as a market leader in
                            Brazil.
                        </strong>
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>Strategic Funding: </strong>The new
                            professional and cohesive brand helped validate the
                            company's vision to investors, contributing to a
                            successful Series A funding round of R$ 15 million
                            led by Bridge One and Domo Invest in 2021.
                        </li>
                        <li>
                            <strong>Market Expansion: </strong>The rebrand
                            supported a period of hyper-growth. By 2023, Goomer
                            had expanded to serve over 160,000 restaurants
                            across Brazil, managing millions of orders annually.
                        </li>
                        <li>
                            <strong>Consolidation: </strong>The strength of the
                            new brand played a key role in Goomer's ability to
                            acquire competitors and assert dominance in the
                            digital menu sector, proving that the "right
                            ingredient" was indeed the key to growth.
                        </li>
                    </ul>
                </div>
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/goomer/goomer-image11.png'
                    alt='Goomer image'
                    className={styles.image}
                />
                <img
                    src='/goomer/goomer-image13.png'
                    alt='Goomer image'
                    className={styles.image}
                />
            </div>
            <video
                ref={firstImageRef}
                src='/goomer/goomer-image12.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/goomer/goomer-image14.png'
                    alt='Goomer image'
                    className={styles.image}
                />
                <img
                    src='/goomer/goomer-image16.png'
                    alt='Goomer image'
                    className={styles.image}
                />
            </div>

            <ProjectsCarousel />
        </div>
    );
};

export default Goomer;
