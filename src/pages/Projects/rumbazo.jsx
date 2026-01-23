import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";

const Rumbazo = () => {
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
                    }
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
                    }
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
                        }
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
                    }
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
                Rumbazo
            </h1>
            <h2 className={styles.title_details}>
            The ultimate Latin block party in Las Vegas.
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                    Rumbazo is not just a music festival; it is a vibrant celebration of Latin culture held annually in the heart of Downtown Las Vegas during Hispanic Heritage Month. More than a festival, it positions itself as "The Biggest Latin Block Party of the Year," bringing together music, art, and culinary experiences. To match this energy, we developed a brand identity that captures the heat, rhythm, and diversity of Latin America, transforming a calendar event into a must-attend cultural destination.
                    </p>
                </div>

                <div
                    ref={secondSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2022</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        Visual Identity
                        <br />
                        Brand Designer
                     
                    </p>
                    <h2 className={styles.section_title}>Team</h2>
                    <p className={styles.section_description}>
                        Visual Identity: Bruna Guarizo and Robson Fernandez{" "}
                        <br />
                        Motion Design: Douglas Farias <br />
                        Type Design: Dan Schunck
                        <br />
                        Strategy: Guta Tolmasquim <br />
                        Project Management: Carol Saltoun <br />
                        Agency: Brand Gym
                    </p>
                </div>
            </div>

            <iframe
                ref={firstImageRef}
                src='https://www.youtube.com/embed/sWpEs5KiMFU?autoplay=1&mute=1&loop=1&playlist=sWpEs5KiMFU&start=25&playsinline=1&controls=1'
                className={styles.image}
                allow='autoplay; encrypted-media'
                allowFullScreen
                style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    border: "none",
                }}
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
                    The main challenge was to create a unified visual language for a culture that is inherently diverse. "Latin culture" is a mosaic of different colors, flavors, sounds, and traditions.
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>The Complexity: </strong>How do you represent such a vast mix of cultures without falling into stereotypes or visual chaos?
                        </li>
                        <li>
                            <strong>The Goal: </strong>We needed a brand that felt inclusive yet distinct enough to stand out in the competitive Las Vegas entertainment landscape. The identity had to scream "celebration" and translate the feeling of a street carnival into a cohesive brand system suitable for large-scale stages, digital media, and merchandise.
                        </li>
                    </ul>

                    <div className={styles.space}></div>

                    <h2 className={styles.section_title}>Brand Strategy</h2>
                    <p className={styles.section_description}>
                    Our strategy was anchored in the concept "All parties in one." We studied the common threads that unite Latin festivities across the globe, from the heat of the sun and street dancing to the vibrant colors of flags and costumes. To translate this energy, we moved away from polished, corporate aesthetics to embrace a "raw and real" vibe. We utilized a design system of organic shapes inspired by streamers, flames, and feathers to convey constant movement. This dynamic nature was reinforced by a high-contrast palette of warm and cold tones, ensuring the brand felt energetic, loud, and impossible to ignore.
                    </p>
                </div>
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/rumbazo/rumbazo-image1.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
                <img
                    src='/rumbazo/rumbazo-image2.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
            </div>

            <video
                ref={firstImageRef}
                src='/rumbazo/rumbazo-image3.mp4'
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
                        We delivered a visual identity that acts as a sensory
                        explosion.
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>The "Block Party" Vibe: </strong>The graphics were designed to mimic the chaotic beauty of a street party. We used bold typography that feels loud and proud, paired with graphical elements that appear to be dancing.
                        </li>
                        <li>
                            <strong>Scalability: </strong>The system was built to be flexible, allowing it to wrap everything from massive stage screens and totem poles to social media assets and wristbands, ensuring a consistent, immersive experience for attendees.
                        </li>
                    </ul>
                </div>
                <div className={styles.content}></div>
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/rumbazo/rumbazo-image3.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
                <img
                    src='/rumbazo/rumbazo-image4.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/rumbazo/rumbazo-image6.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
                <img
                    src='/rumbazo/rumbazo-image5.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
            </div>
            <img
                src='/rumbazo/rumbazo-image7.png'
                alt='Rumbazo image'
                className={styles.image}
            />

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>Results and Impact</h2>
                    <p className={styles.section_description}>
                    Since the launch of the new brand, Rumbazo has solidified its place as a premier event in the Las Vegas cultural calendar.
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>Record Attendance: </strong>The branding helped drive massive engagement, culminating in the 2024 edition which achieved record-breaking attendance numbers, attracting thousands of fans to the Downtown Las Vegas Events Center.
                        </li>
                        <li>
                            <strong>Major Partnerships: </strong>The strong, professional brand identity helped secure high-profile partnerships, including Billboard as the official media partner and Estrella Jalisco (Anheuser-Busch) as the presenting sponsor.
                        </li>
                        <li>
                            <strong>Cultural Landmark: </strong>The festival successfully established itself as the go-to destination for Mexican Independence Day weekend, featuring top-tier artists like Nicky Jam, Maluma, and Luis R Conriquez, proving that the brand resonated deeply with its target audience.
                        </li>
                    </ul>
                </div>
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/rumbazo/rumbazo-image8.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
                <img
                    src='/rumbazo/rumbazo-image9.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
            </div>
            <img
                src='/rumbazo/rumbazo-image12.png'
                alt='Rumbazo image'
                className={styles.image}
            />
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/rumbazo/rumbazo-image10.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
                <img
                    src='/rumbazo/rumbazo-image13.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/rumbazo/rumbazo-image14.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
                <img
                    src='/rumbazo/rumbazo-image15.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
            </div>
            <img
                src='/rumbazo/rumbazo-image16.png'
                alt='Rumbazo image'
                className={styles.image}
            />
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/rumbazo/rumbazo-image17.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
                <img
                    src='/rumbazo/rumbazo-image18.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/rumbazo/rumbazo-image19.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
                <img
                    src='/rumbazo/rumbazo-image20.png'
                    alt='Rumbazo image'
                    className={styles.image}
                />
            </div>
            <img
                src='/rumbazo/rumbazo-image21.png'
                alt='Rumbazo image'
                className={styles.image}
            />

            <div ref={navigationRef}>
                <NavigationButtons
                    prevLink='/'
                    nextLink='/projects'
                    prevLabel='Back to Home'
                    nextLabel='More Projects'
                />
            </div>
        </div>
    );
};

export default Rumbazo;
