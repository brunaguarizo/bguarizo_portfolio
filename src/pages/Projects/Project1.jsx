import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";

const Project1 = () => {
    const titleRef = useRef(null);
    const firstSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const firstImageRef = useRef(null);
    const aboutProjectRef = useRef(null);
    const challengeSectionRef = useRef(null);
    const image2ColRef = useRef(null);
    const thirdSectionRef = useRef(null);
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                        }
                    );
                }
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
                    }
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
                        }
                    );
                }
            }

            // Second two-column images animation
            if (secondImage2ColRef.current) {
                const images =
                    secondImage2ColRef.current.querySelectorAll("img");
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
                            trigger: secondImage2ColRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
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
                    }
                );
            }
        };

        // Initialize when component mounts
        initScrollTrigger();

        // Cleanup
        return () => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.getAll().forEach((trigger) =>
                    trigger.kill()
                );
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <h1
                ref={titleRef}
                className={styles.title}>
                Forge
            </h1>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec viverra sit amet erat vestibulum viverra. Nam
                        maximus ex sed diam tempor, eu eleifend nibh aliquet.
                        Suspendisse bibendum metus felis, eu dapibus enim auctor
                        at. Suspendisse dictum felis vehicula mauris
                        pellentesque cursus. Sed in suscipit nulla. Aliquam non
                        viverra sapien, at varius elit. In eu ipsum leo. Nam
                        iaculis massa sit amet urna posuere consectetur. Nunc
                        pharetra risus nulla, dignissim bibendum metus
                        pellentesque sit amet. Integer tincidunt tellus lectus,
                        ac dapibus lacus accumsan eget.
                    </p>
                </div>

                <div
                    ref={secondSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2025</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        Product Designer
                    </p>
                </div>
            </div>

            <img
                ref={firstImageRef}
                src='/askfolio/askfolio.png'
                alt='Phase 1: Rule builder'
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec viverra sit amet erat vestibulum viverra. Nam
                        maximus ex sed diam tempor, eu eleifend nibh aliquet.
                        Suspendisse bibendum metus felis, eu dapibus enim auctor
                        at. Suspendisse dictum felis vehicula mauris
                        pellentesque cursus. Sed in suscipit nulla. Aliquam non
                        viverra sapien, at varius elit. In eu ipsum leo. Nam
                        iaculis massa sit amet urna posuere consectetur. Nunc
                        pharetra risus nulla, dignissim bibendum metus
                        pellentesque sit amet. Integer tincidunt tellus lectus,
                        ac dapibus lacus accumsan eget.
                    </p>
                    <div className={styles.space}></div>
                    <h2 className={styles.section_title}>Objectives</h2>
                    <p className={styles.section_description}>
                        In eu ipsum leo. Nam iaculis massa sit amet urna posuere
                        consectetur. Nunc pharetra risus nulla, dignissim
                        bibendum metus pellentesque sit amet. Integer tincidunt
                        tellus lectus, ac dapibus lacus accumsan eget. Aliquam
                        mi tellus, pulvinar a venenatis nec, tempor ut sapien.
                        Nulla egestas ex velit, in accumsan sapien egestas
                        aliquam. Donec sollicitudin mollis magna, nec venenatis
                        neque efficitur sagittis. Pellentesque et ex quis sapien
                        vehicula consectetur sed in tortor.
                    </p>
                </div>
            </div>

            <div
                ref={image2ColRef}
                className={styles.image_2col}>
                <img
                    src='/askfolio/askfolio.png'
                    alt='Phase 1: Rule builder'
                    className={styles.image}
                />
                <img
                    src='/askfolio/askfolio.png'
                    alt='Phase 1: Rule builder'
                    className={styles.image}
                />
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Challenge</h2>
                    <p className={styles.section_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec viverra sit amet erat vestibulum viverra. Nam
                        maximus ex sed diam tempor, eu eleifend nibh aliquet.
                        Suspendisse bibendum metus felis, eu dapibus enim auctor
                        at. Suspendisse dictum felis vehicula mauris
                        pellentesque cursus. Sed in suscipit nulla. Aliquam non
                        viverra sapien, at varius elit. In eu ipsum leo. Nam
                        iaculis massa sit amet urna posuere consectetur. Nunc
                        pharetra risus nulla, dignissim bibendum metus
                        pellentesque sit amet. Integer tincidunt tellus lectus,
                        ac dapibus lacus accumsan eget.
                    </p>
                </div>
                <div className={styles.content}></div>
            </div>

            <img
                ref={secondImageRef}
                src='/askfolio/askfolio.png'
                alt='Phase 1: Rule builder'
                className={styles.image}
            />

            <div
                ref={fourthSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Challenge</h2>
                    <p className={styles.section_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec viverra sit amet erat vestibulum viverra. Nam
                        maximus ex sed diam tempor, eu eleifend nibh aliquet.
                        Suspendisse bibendum metus felis, eu dapibus enim auctor
                        at. Suspendisse dictum felis vehicula mauris
                        pellentesque cursus. Sed in suscipit nulla. Aliquam non
                        viverra sapien, at varius elit. In eu ipsum leo. Nam
                        iaculis massa sit amet urna posuere consectetur. Nunc
                        pharetra risus nulla, dignissim bibendum metus
                        pellentesque sit amet. Integer tincidunt tellus lectus,
                        ac dapibus lacus accumsan eget.
                    </p>
                </div>
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/askfolio/askfolio.png'
                    alt='Phase 1: Rule builder'
                    className={styles.image}
                />
                <img
                    src='/askfolio/askfolio.png'
                    alt='Phase 1: Rule builder'
                    className={styles.image}
                />
            </div>

            <div ref={navigationRef}>
                <NavigationButtons
                    prevLink='/'
                    nextLink='/#projects'
                    prevLabel='Back to Home'
                    nextLabel='Next Project'
                />
            </div>
        </div>
    );
};

export default Project1;
