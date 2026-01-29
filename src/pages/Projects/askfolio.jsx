import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";

const Askfolio = () => {
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
                Askfolio
            </h1>
            <h2 className={styles.title_details}>
                Connecting users to instant expert advice.
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        In a world of information overload, finding specific,
                        reliable answers can be frustrating. Askfolio came to
                        Brand Gym with a unique business model for the Brazilian
                        market:{" "}
                        <strong>
                            a platform offering 15-minute video calls to solve
                            everyday questions with specialists
                        </strong>
                        —from veterinarians and nutritionists to financial
                        consultants. The result is a{" "}
                        <strong>
                            brand identity that transforms the anxiety of the
                            unknown into the relief of finding a quick,
                            intuitive, and trustworthy answer.
                        </strong>
                    </p>
                </div>

                <div
                    ref={secondSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2023</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        Visual Identity
                        <br /> Brand Designer
                    </p>
                    <h2 className={styles.section_title}>Team</h2>
                    <p className={styles.section_description}>
                        Visual Identity: Bruna Guarizo and Duda Paixão
                        <br />
                        Motion: Douglas Farias
                        <br />
                        Strategy: Lucas Alves
                        <br /> Copywriting: Julia Asenjo
                        <br /> Project Management: Analu Rijo
                        <br /> Agency: Brand Gym
                    </p>
                </div>
            </div>

            <video
                ref={firstImageRef}
                src='/askfolio/askfolio-image1.mp4'
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
                        The primary challenge was{" "}
                        <strong>positioning a new category of service</strong>{" "}
                        in the Brazilian market. We needed to create a visual
                        and verbal universe that could appeal to two distinct
                        audiences simultaneously:
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>For Users: </strong>It needed to promise
                            relief and speed, "answers in minutes."
                        </li>
                        <li>
                            <strong>For Experts:</strong> It needed to signal
                            professionalism and a viable business opportunity.
                        </li>
                    </ul>
                    <p className={styles.section_description}>
                        The goal was to move away from the coldness of search
                        engines and{" "}
                        <strong>
                            humanize the experience of finding answers
                        </strong>
                        , positioning the brand as the bridge between a question
                        and a solution.
                    </p>
                    <div className={styles.space}></div>
                    <h2 className={styles.section_title}>Brand Strategy</h2>
                    <p className={styles.section_description}>
                        Our strategy focused on the emotional core of the
                        product: <strong>Relief</strong>. We identified that the
                        true value of Askfolio wasn't just the video call
                        itself, but the feeling of "opening a window" to an
                        expert precisely when a need arises. We aligned the
                        Naming strategy with the brand narrative to highlight
                        this immediate value proposition,{" "}
                        <strong>
                            which is the comfort of having a specialized answer
                            crafted just for you, exactly when you need it.
                        </strong>
                    </p>
                </div>
            </div>

            <div
                ref={image2ColRef}
                className={styles.image_2col}>
                <img
                    src='/askfolio/askfolio-image2.png'
                    alt='Askfolio image'
                    className={styles.image}
                />
                <img
                    src='/askfolio/askfolio-image3.png'
                    alt='Askfolio image'
                    className={styles.image}
                />
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Solution</h2>
                    <p className={styles.section_description}>
                        We designed a visual identity that embodies the concepts
                        of <strong>"opening windows"</strong> and{" "}
                        <strong>"establishing connections"</strong>.
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>Visual Concept: </strong>The graphics and
                            icons are designed to represent pathways opening up,
                            symbolizing the connection between the user and the
                            expert on duty.
                        </li>
                        <li>
                            <strong>Logo & Symbol: </strong> The "A" in the logo
                            is stylized to look like a bridge or a connecting
                            structure, reinforcing the idea of linking problems
                            to solutions.
                        </li>
                        <li>
                            <strong>Typography: </strong> We selected Manrope, a
                            modern sans-serif typeface that balances geometric
                            readability with a friendly, approachable character,
                            ensuring the app remains legible across all devices.
                        </li>
                        <li>
                            <strong>Color Palette: </strong> A blend of deep
                            greens and bright blues creates a gradient that
                            feels both technological and organic, conveying
                            growth, trust, and mental clarity.
                        </li>
                    </ul>
                </div>
                <div className={styles.content}></div>
            </div>
            <img
                src='/askfolio/askfolio-image4.png'
                alt='Askfolio image'
                className={styles.image}
            />
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/askfolio/askfolio-image5.png'
                    alt='Askfolio image'
                    className={styles.image}
                />
                <img
                    src='/askfolio/askfolio-image6.png'
                    alt='Askfolio image'
                    className={styles.image}
                />
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/askfolio/askfolio-image7.png'
                    alt='Askfolio image'
                    className={styles.image}
                />
                <img
                    src='/askfolio/askfolio-image14.png'
                    alt='Askfolio image'
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
                        The final identity successfully captures the essence of
                        "opening a window" to knowledge. By visualizing the
                        concept of quick connections, the branding conveys the
                        idea that expert help is always just a few clicks away.
                        The visual system is flexible enough to span various
                        categories, from pet care to finance, while maintaining
                        a unified look that{" "}
                        <strong>
                            communicates speed, intuition, and reliability.
                        </strong>
                    </p>
                </div>
            </div>
            <img
                src='/askfolio/askfolio-image10.png'
                alt='Askfolio image'
                className={styles.image}
            />
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/askfolio/askfolio-image11.png'
                    alt='Askfolio image'
                    className={styles.image}
                />
                <img
                    src='/askfolio/askfolio-image12.png'
                    alt='Askfolio image'
                    className={styles.image}
                />
            </div>
            <img
                src='/askfolio/askfolio-image13.png'
                alt='Askfolio image'
                className={styles.image}
            />
            <ProjectsCarousel />
        </div>
    );
};

export default Askfolio;
