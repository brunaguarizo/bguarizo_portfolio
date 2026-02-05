import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";

const Genial = () => {
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
                Genial Care
            </h1>
            <h2 className={styles.title_details}>
                Reimagining autism care through science and empathy
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        <strong>
                            Genial Care is a Brazilian healthtech transforming
                            the standard of care for children with autism and
                            their families.
                        </strong>{" "}
                        Moving beyond traditional, fragmented therapy, the
                        company built a multidisciplinary ecosystem that
                        combines clinical excellence with parental training. The
                        project involved creating a brand identity that could
                        bridge the gap between rigorous science (ABA therapy)
                        and the warmth of a support network,{" "}
                        <strong>
                            positioning the company as a partner in the family's
                            development journey, not just a service provider.
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
                        <br /> Brand Designer
                    </p>
                    <h2 className={styles.section_title}>Team</h2>
                    <p className={styles.section_description}>
                        A multidisciplinary squad including Strategy, Motion,
                        and Operations.
                    </p>
                </div>
            </div>

            <video
                ref={firstImageRef}
                src='/genial/genial-image1.mp4'
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
                        The autism care market in Brazil was polarized: either
                        highly clinical and sterile (hospitals) or informal and
                        fragmented (independent therapists).
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>The trust gap:</strong> Parents needed the
                            assurance of medical authority without the coldness
                            of a hospital environment.
                        </li>
                        <li>
                            <strong>The "caregiver" blind spot:</strong>{" "}
                            Competitors focused solely on the child. We
                            identified that sustainable progress relies on
                            empowering the parents (caregivers). The brand
                            needed to speak to them, offering relief, guidance,
                            and community, without falling into "superhero"
                            clichés or pity.
                        </li>
                    </ul>

                    <div className={styles.space}></div>
                    <h2 className={styles.section_title}>Brand Strategy</h2>
                    <p className={styles.section_description}>
                        Our strategy was anchored in the concept of{" "}
                        <strong>"caring for those who care,"</strong> shifting
                        the narrative from "treating a condition" to "unlocking
                        potential" through a design system that prioritizes
                        human connection over clinical observation. To reflect
                        this, we moved away from the controversial puzzle piece
                        icon in favor of a visual territory defined by{" "}
                        <strong>
                            organic pathways and fluid shapes, symbolizing
                            growth, adaptability, and the unique developmental
                            journey of each child.
                        </strong>{" "}
                        This empathetic approach is reinforced by our color
                        palette, which replaces standard "medical blue" with a
                        sophisticated blend of earth tones, soft greens, and
                        vibrant accents to create a brand identity that feels
                        warm, optimistic, and deeply human while maintaining its
                        professional credibility.
                    </p>
                </div>
            </div>

            <div
                ref={image2ColRef}
                className={styles.image_2col}>
                <img
                    src='/genial/genial-image2.png'
                    alt='Genial Care image'
                    className={styles.image}
                />
                <img
                    src='/genial/genial-image3.png'
                    alt='Genial Care image'
                    className={styles.image}
                />
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Solution</h2>
                    <p className={styles.section_description}>
                        The Solution We created a visual identity that feels
                        like a hug, not a diagnosis.
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>Logo:</strong> We reinterpreted the infinity
                            symbol to represent the unique nature of the
                            spectrum. It signifies that every child is
                            different, and their care is not a finite task, but
                            a continuous, evolving process that requires a
                            personalized approach for each family's journey.
                        </li>
                        <li>
                            <strong>Illustration system:</strong> A custom
                            illustration style was developed to depict diverse
                            families and therapeutic scenarios in a way that is
                            relatable and dignity-affirming, avoiding
                            stereotypes.
                        </li>
                        <li>
                            <strong>Digital experience:</strong> The identity
                            was designed to scale across the app (where parents
                            track progress) and physical clinics ("Casas
                            Genial"), creating a cohesive, comforting
                            environment at every touchpoint.
                        </li>
                    </ul>
                </div>
                <div className={styles.content}></div>
            </div>

            <img
                src='/genial/genial-image4.png'
                alt='Genial Care image'
                className={styles.image}
            />

            <img
                src='/genial/genial-image7.png'
                alt='Genial Care image'
                className={styles.image}
            />

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/genial/genial-image9.png'
                    alt='Genial Care image'
                    className={styles.image}
                />
                <img
                    src='/genial/genial-image12.png'
                    alt='Genial Care image'
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
                        The new brand played a pivotal role in establishing
                        Genial Care as the authority in autism care in Brazil,
                        attracting both families and global investors.
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>Investment success:</strong> With a
                            validated brand and business model, Genial Care
                            raised a $10 Million Series A round led by General
                            Catalyst (an investor in Airbnb and Stripe), marking
                            the fund's first healthtech investment in Brazil.
                        </li>
                        <li>
                            <strong>Massive reach:</strong> The company scaled
                            rapidly, now supporting thousands of families and
                            providing over 25,000 monthly therapy sessions,
                            proving that a brand built on empathy and science
                            can achieve massive scale.
                        </li>
                        <li>
                            <strong>Clinical excellence:</strong> The cohesive
                            visual system helped standardize training materials
                            for therapists, contributing to Genial Care’s
                            recognition for clinical quality and its expansion
                            into physical clinics across São Paulo.
                        </li>
                    </ul>
                </div>
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/genial/genial-image16.png'
                    alt='Genial Care image'
                    className={styles.image}
                />
                <img
                    src='/genial/genial-image8.png'
                    alt='Genial Care image'
                    className={styles.image}
                />
            </div>

            <img
                src='/genial/genial-image10.png'
                alt='Genial Care image'
                className={styles.image}
            />
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/genial/genial-image17.png'
                    alt='Genial Care image'
                    className={styles.image}
                />
                <img
                    src='/genial/genial-image18.png'
                    alt='Genial Care image'
                    className={styles.image}
                />
            </div>

            <ProjectsCarousel />
        </div>
    );
};

export default Genial;
