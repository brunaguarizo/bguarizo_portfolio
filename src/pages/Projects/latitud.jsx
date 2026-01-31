import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";

const Latitud = () => {
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
                Latitud
            </h1>
            <h2 className={styles.title_details}>
                The community and venture capital for early-stage tech in Latin
                America
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        <strong>
                            Latitud is the premier community and venture capital
                            fund for early-stage tech founders in Latin America.
                        </strong>
                        Founded by industry titans like Brian Requarth
                        (ex-VivaReal) and Gina Gotthilf (ex-Duolingo), the
                        platform was built to solve the fragmentation of the
                        region's startup ecosystem. The project involved
                        creating a brand identity that could serve as a "North
                        Star" for entrepreneurs, positioning Latitud not just as
                        an investor, but as the ultimate guide for building
                        billion-dollar companies in the region.
                    </p>
                </div>

                <div
                    ref={secondSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2021</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        Visual Identity
                        <br /> Brand Designer
                    </p>
                    <h2 className={styles.section_title}>Team</h2>
                    <p className={styles.section_description}>
                        Design: Bruna Guarizo, Dan Schunck <br /> Illustrations:
                        Robson Fernandez <br /> Operations: Carol Saltoun <br />
                        Strategy: Guta Tolmasquim <br /> Agency: Brand Gym
                    </p>
                </div>
            </div>

            <video
                ref={firstImageRef}
                src='/latitud/latitud-image6.mp4'
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
                        Building a startup in Latin America is often described
                        as a "lonely ride" through uncharted territory.
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>The "lost founder" syndrome:</strong>{" "}
                            Without a mature ecosystem like Silicon Valley,
                            founders in LatAm often lack access to the right
                            networks, knowledge, and capital.
                        </li>
                        <li>
                            <strong>Visual clutter:</strong> The VC market was
                            dominated by sterile, corporate blue brands that
                            felt distant and banking-focused.
                        </li>
                        <li>
                            <strong>The goal:</strong> We needed a brand that
                            felt adventurous yet institutional, capable of
                            inspiring a first-time founder while earning the
                            trust of global LPs (Limited Partners) to manage
                            millions of dollars.
                        </li>
                    </ul>

                    <div className={styles.space}></div>
                    <h2 className={styles.section_title}>Brand Strategy</h2>
                    <p className={styles.section_description}>
                        Centering on the metaphor of entrepreneurship as a
                        high-stakes expedition, the strategy positions Latitud
                        as a vital compass for{" "}
                        <strong>
                            founders navigating the "open sea" of the Latin
                            American market.
                        </strong>{" "}
                        By pivoting from generic tech abstractions toward a rich
                        cartographic aesthetic—incorporating topographic maps,
                        nautical flags, and compass needles—the visual identity
                        signals clear direction and tangible progress. This
                        positioning culminates in the promise of "dissolving
                        barriers," fundamentally flattening the metaphorical
                        mountains and borders that traditionally obstruct LatAm
                        entrepreneurs from achieving global scale.
                    </p>
                </div>
            </div>

            <div
                ref={image2ColRef}
                className={styles.image_2col}>
                <img
                    src='/latitud/latitud-image2.png'
                    alt='Latitud image'
                    className={styles.image}
                />
                <img
                    src='/latitud/latitud-image3.png'
                    alt='Latitud image'
                    className={styles.image}
                />
            </div>
            <div
                ref={image2ColRef}
                className={styles.image_2col}>
                <img
                    src='/latitud/latitud-image4.png'
                    alt='Latitud image'
                    className={styles.image}
                />
                <img
                    src='/latitud/latitud-image5.png'
                    alt='Latitud image'
                    className={styles.image}
                />
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Solution</h2>
                    <p className={styles.section_description}>
                        The visual identity strikes a deliberate{" "}
                        <strong>
                            balance between the thrill of discovery and the
                            steadfast reliability of a financial institution,
                        </strong>{" "}
                        anchored by a logo that features a stylized "A" doubling
                        as a northward-pointing compass needle to symbolize
                        growth in both altitude and latitude. To navigate the
                        complexities of the market, a dynamic background system
                        of topographic contour lines was developed, visually
                        demonstrating{" "}
                        <strong>
                            Latitud’s deep understanding of the terrain and its
                            ability to chart safe passage.
                        </strong>{" "}
                        This is reinforced by a strategic color palette where a
                        deep "ocean blue" establishes a foundation of trust and
                        professional gravity, while a vibrant "signal orange"
                        serves as a high-energy beacon to illuminate key data
                        points and essential calls to action.
                    </p>
                </div>
                <div className={styles.content}></div>
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/latitud/latitud-image7.png'
                    alt='Latitud image'
                    className={styles.image}
                />
                <img
                    src='/latitud/latitud-image9.png'
                    alt='Latitud image'
                    className={styles.image}
                />
            </div>
            <img
                src='/latitud/latitud-image8.png'
                alt='Latitud image'
                className={styles.image}
            />

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/latitud/latitud-image10.png'
                    alt='Latitud image'
                    className={styles.image}
                />
                <img
                    src='/latitud/latitud-image11.png'
                    alt='Latitud image'
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
                        The brand successfully positioned Latitud as the "Y
                        Combinator of Latin America," enabling massive growth in
                        a short period.
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>Ecosystem impact:</strong> The clear,
                            aspirational branding helped attract over 1,200
                            top-tier founders to the Latitud Fellowship program.
                        </li>
                        <li>
                            <strong>apital raised:</strong>C Founders within the
                            Latitud community (wearing this brand) have gone on
                            to raise over $650 million USD in venture capital
                            from top global funds like a16z and NFX.
                        </li>
                        <li>
                            <strong>Unicorn breeding ground:</strong> The brand
                            became the "first check" and strategic partner for
                            some of the region's fastest-growing startups,
                            including Pomelo ($100M+ raised) and BHub ($30M+
                            raised), cementing its status as the definitive
                            launchpad for LatAm tech.
                        </li>
                    </ul>
                </div>
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/latitud/latitud-image12.png'
                    alt='Latitud image'
                    className={styles.image}
                />
                <img
                    src='/latitud/latitud-image13.png'
                    alt='Latitud image'
                    className={styles.image}
                />
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/latitud/latitud-image14.png'
                    alt='Latitud image'
                    className={styles.image}
                />
                <img
                    src='/latitud/latitud-image15.png'
                    alt='Latitud image'
                    className={styles.image}
                />
            </div>

            <ProjectsCarousel />
        </div>
    );
};

export default Latitud;
