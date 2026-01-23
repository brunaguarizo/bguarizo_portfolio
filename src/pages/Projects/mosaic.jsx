import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import CodeWindow from "../../components/CodeWindow/CodeWindow";

const Mosaic = () => {
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
                Mosaic
            </h1>
            <h2 className={styles.title_details}>Building your professional story, piece by piece.
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                    For junior designers and developers, the biggest hurdle to landing a job is often the lack of a robust portfolio. They have the skills, but without real clients, they lack the "ammunition", which means context, constraints, and content, needed to build impressive case studies. Mosaic is a web application designed to solve this "experience paradox." It functions as an interactive brief generator that constructs realistic project scenarios based on the user's answers. By simulating a real client relationship, Mosaic provides the tailored content and requirements users need to showcase their true potential.
                    </p>
                </div>

                <div
                    ref={secondSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2025</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        Product Designer (UX/UI)
                        <br /> Frontend Developer <br />
                        Branding
                    </p>
                    <h2 className={styles.section_title}>Team</h2>
                    <p className={styles.section_description}>
                        Bruna Guarizo, Cesaria Monforte, Kyle Tria, Kunwar
                        Manshahia
                    </p>
                </div>
            </div>

            <img
                src='/mosaic/mosaic-image1.png'
                alt='Mosaic image'
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
                        The primary problem identified was the lack of depth in
                        student portfolios.
                    </p>
                    <p className={styles.section_description}>
                        <strong>"Lorem Ipsum":</strong> Without a real
                        brief, personal projects often look superficial,
                        focusing only on visuals without solving a user problem.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Decision Paralysis:</strong> Emerging
                        professionals waste hours trying to invent a fake
                        company name or business goal instead of designing the
                        solution.
                    </p>
                    <p className={styles.section_description}>
                        <strong>The Goal:</strong> We needed a tool that would
                        act as a "Virtual Client," handing the user a concrete
                        problem to solve so they could focus entirely on
                        executing the design and code.
                    </p>
                    <div className={styles.space}></div>
                    <h2 className={styles.section_title}>Brand Strategy</h2>
                    <p className={styles.section_description}>
                        The strategy was anchored in the concept of "pieces of a whole," reflecting the idea that just as a mosaic is composed of individual fragments, a successful career is built project by project. Our positioning focused on empowerment, specifically "giving ammunition" to the user by providing the necessary tools to execute their best work. This philosophy translated visually into a grid layout within the UI, representing the diversity of challenges and illustrating how distinct skills stack together to form a robust professional profile.
                    </p>
                </div>
            </div>
            <img
                src='/mosaic/mosaic-image2.png'
                alt='Mosaic image'
                className={styles.image}
            />

            <div
                ref={image2ColRef}
                className={styles.image_2col}>
                <img
                    src='/mosaic/mosaic-image3.png'
                    alt='Mosaic image'
                    className={styles.image}
                />
                <img
                    src='/mosaic/mosaic-image4.png'
                    alt='Mosaic image'
                    className={styles.image}
                />
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/mosaic/mosaic-image5.png'
                    alt='Mosaic image'
                    className={styles.image}
                />
                <img
                    src='/mosaic/mosaic-image6.png'
                    alt='Mosaic image'
                    className={styles.image}
                />
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Solution</h2>
                    <p className={styles.section_description}>
                        Mosaic is a responsive web app that creates custom
                        design challenges.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Interactive Scenarios:</strong> Instead of a static list of prompts, the app guides the user through a questionnaire (e.g., "What industry interests you?", "Do you want to practice Mobile or Web design?").
                    </p>

                    <p className={styles.section_description}>
                        <strong>The "Brief" Engine:</strong> Based on these answers, the app generates a detailed "Client Case," complete with a company backstory, a specific problem statement, target audience data, and project constraints.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Outcome:</strong> This gives the user a solid foundation to start their project immediately, ensuring their final portfolio piece is grounded in a realistic business context rather than abstract ideas.</p>
                </div>
            </div>

            <video
                src='/mosaic/mosaic-image9.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />

            <img
                src='/mosaic/mosaic-image10.png'
                alt='Mosaic image'
                className={styles.image}
            />
            <img
                src='/mosaic/mosaic-image8.png'
                alt='Mosaic image'
                className={styles.image}
            />

            <video
                src='/mosaic/mosaic-image11.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>
                        Technical Implementation
                    </h2>
                    <p className={styles.section_description}>
                    Built with Next.js and React, Mosaic leverages modern web technologies to deliver a seamless user experience. Below is a glimpse into the logic behind our onboarding flow and project generation hooks:
                    </p>
                </div>
            </div>

            <img
                src='/mosaic/mosaic-image12.png'
                alt='Mosaic image'
                className={styles.image}
            />

            <div>
                <CodeWindow
                    title='components/OnboardingFlow.jsx'
                    language='javascript'
                    code={`"use client";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import { useRouter } from "next/navigation";
import styles from "./StepOne.module.css";
import Image from "next/image";

export default function Home() {
    const router = useRouter();
    const handleNext = () => {
        router.replace("/Onboarding/StepTwo");
    };
    const handleSkip = () => {
        router.replace("/SignIn/SignIn");
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <button
                className={styles.skipButton}
                onClick={handleSkip}>
                Skip
                <svg
                    className={styles.icon}
                    width='13'
                    height='15'
                    viewBox='0 0 13 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M4.59999 7.5L0.724994 2.075C0.491661 1.74167 0.462494 1.39583 0.637494 1.0375C0.812494 0.679167 1.10833 0.5 1.52499 0.5C1.69166 0.5 1.84999 0.5375 1.99999 0.6125C2.14999 0.6875 2.26666 0.791667 2.34999 0.925L7.04999 7.5L2.34999 14.075C2.26666 14.2083 2.14999 14.3125 1.99999 14.3875C1.84999 14.4625 1.69166 14.5 1.52499 14.5C1.12499 14.5 0.833327 14.3208 0.649994 13.9625C0.466661 13.6042 0.491661 13.2583 0.724994 12.925L4.59999 7.5ZM10.55 7.5L6.67499 2.075C6.44166 1.74167 6.41249 1.39583 6.58749 1.0375C6.76249 0.679167 7.05833 0.5 7.47499 0.5C7.64166 0.5 7.79999 0.5375 7.94999 0.6125C8.09999 0.6875 8.21666 0.791667 8.29999 0.925L13 7.5L8.29999 14.075C8.21666 14.2083 8.09999 14.3125 7.94999 14.3875C7.79999 14.4625 7.64166 14.5 7.47499 14.5C7.07499 14.5 6.78333 14.3208 6.59999 13.9625C6.41666 13.6042 6.44166 13.2583 6.67499 12.925L10.55 7.5Z'
                        fill='#2B5FFC'
                    />
                </svg>
            </button>

            {/* Illustration */}
            <div className={styles.illustration}>
                <div className={styles.illustrationWrapper}>
                    <Image
                        src='/onboarding/Image_01.png'
                        quality={100}
                        unoptimized={true}
                        width={361}
                        height={460}
                        alt='Graphics'
                    />
                </div>
            </div>

            {/* Progress Dots */}
            <div className={styles.dots}>
                <span className={styles.dot + " " + styles.active}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Build your portfolio,
                    <br />
                    step by step
                </h1>
                <p className={styles.text}>
                    Easily create a professional portfolio with
                    <br /> our guided process. Follow clear steps <br />
                    to showcase your skills, projects, and experience
                    effortlessly.
                </p>
            </div>

            {/* Arrows */}
            <button
                className={styles.nextButton}
                onClick={handleNext}>
                <div style={{ width: "45px" }}></div>
                <svg
                    className={styles.right}
                    width='44'
                    height='52'
                    viewBox='0 0 44 52'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M17.2929 35.2929C17.6834 35.6834 18.3166 35.6834 18.7071 35.2929L27.2929 26.7071C27.6834 26.3166 27.6834 25.6834 27.2929 25.2929L18.7071 16.7071C18.3166 16.3166 17.6834 16.3166 17.2929 16.7071L16.9321 17.0679C16.5416 17.4584 16.5416 18.0916 16.9321 18.4821L24.45 26L16.9321 33.5179C16.5416 33.9084 16.5416 34.5416 16.9321 34.9321L17.2929 35.2929Z'
                        fill='currentColor'
                    />
                </svg>
            </button>
        </div>
    );
}`}
                />
            </div>

            <video
                src='/mosaic/mosaic-image13.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />

            

            <div
                ref={fourthSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Results and Impact</h2>
                    <p className={styles.section_description}>
                    The project successfully validated the need for structured practice in the design community.
                    </p>
                    <p className={styles.section_description}>
                        <strong>User Validation:</strong> Usability testing showed that users felt more confident starting a project when given specific constraints. The "randomized client" feature was cited as a key motivator to break creative blocks.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Functional Prototype:</strong> The application was fully developed and deployed using Next.js, demonstrating not just a design concept but a working tool that processes user logic to output dynamic content.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Skill Showcase:</strong> Beyond the tool itself, the development of Mosaic served as its own case study, proving the ability to build a full-stack application from concept to deployment.
                    </p>
                </div>
            </div>

            <img
                src='/mosaic/mosaic-image15.png'
                alt='Mosaic image'
                className={styles.image}
            />

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Future Iterations</h2>
                    <p className={styles.section_description}>
                    Future plans include integrating an AI API into the backend to generate infinite, unique client personas. We also aim to add a "Community Showcase," allowing users to upload their work and compare how different designers solved the exact same Mosaic brief.
                    </p>
                </div>
                <div className={styles.content}></div>
            </div>

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

export default Mosaic;
