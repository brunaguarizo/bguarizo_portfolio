import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";

const Forge = () => {
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
                Forge
            </h1>
            <h2 className={styles.title_details}>
                Bridging the skilled trades gap through AI-guided exploration.
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        Navigating career choices after high school can be
                        overwhelming, especially when students lack awareness or
                        face social stigmas regarding skilled trades. To address
                        this, we developed Forge, an AI-powered career discovery
                        app, by transforming traditional, text-heavy guidance
                        into an engaging and interactive experience. This
                        platform introduces a core feature called AI Career
                        Simulations, which allows students to virtually
                        "experience" a day in the life of various trades while
                        receiving personalized feedback based on their skills
                        and interests. By breaking down complex certification
                        steps and highlighting local opportunities in British
                        Columbia, Forge creates a more transparent and engaging
                        discovery process. The result is a gamified tool that
                        empowers students to move from uncertainty to making
                        confident and informed decisions about their
                        professional futures.
                    </p>
                </div>

                <div
                    ref={secondSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2025</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        Project Leader
                        <br /> Brand Designer
                        <br /> UI/UX Designer <br />
                        Frontend Developer
                    </p>
                    <h2 className={styles.section_title}>Team</h2>
                    <p className={styles.section_description}>
                        A multidisciplinary squad of 8 members <br /> including
                        Designers and Full-stack Developers.
                    </p>
                </div>
            </div>

            <video
                ref={firstImageRef}
                src='/forge/forge-image1.mp4'
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
                        By 2028, over 700,000 skilled tradespeople are expected
                        to retire across Canada, yet the industry faces a
                        critical lack of new talent. Our research identified
                        three primary barriers for students:
                    </p>
                    <ul
                        ref={firstListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>Social Stigma:</strong> Trades are often
                            viewed as "lesser" compared to university paths.
                        </li>
                        <li>
                            <strong>Information Overload:</strong> Current
                            resources are scattered, text-heavy, and difficult
                            to navigate.
                        </li>
                        <li>
                            <strong>The "Too Late" Factor:</strong> 89% of
                            students only discover these pathways when they are
                            already under pressure to make a final decision.
                        </li>
                    </ul>
                    <p className={styles.section_description}>
                        Our goal was to create a trusted digital guide that
                        grows with the student, moving from vague curiosity to a
                        confident, informed career path. We aimed to make career
                        discovery personalized, engaging, and accessible.
                    </p>
                    <div className={styles.space}></div>
                    <h2 className={styles.section_title}>
                        Research & Insights
                    </h2>
                    <p className={styles.section_description}>
                        We conducted a comprehensive study involving 9 survey
                        participants, secondary research via the Canadian
                        Apprenticeship Forum, and Reddit forum analysis to
                        capture real-world frustrations.
                    </p>
                    <ul
                        ref={secondListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>Accessibility:</strong> 77.8% of
                            participants struggle to find clear information on
                            trade job types.
                        </li>
                        <li>
                            <strong>Insecurity:</strong> 89% feel overwhelmed by
                            requirements and certification steps.
                        </li>
                        <li>
                            <strong> Preference:</strong> Students favor
                            hands-on, visual learning over traditional
                            government websites.
                        </li>
                    </ul>
                </div>
            </div>

            <div
                ref={image2ColRef}
                className={styles.image_2col}>
                <video
                    src='/forge/forge-image2.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`${styles.image} ${styles.image_video_3}`}
                />
                <video
                    src='/forge/forge-image3.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`${styles.image} ${styles.image_video_3}`}
                />
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Process</h2>
                    <p className={styles.section_description}>
                        Forge was developed through an Agile framework of
                        constant iteration, utilizing daily standups and weekly
                        execution meetings to align our multidisciplinary squad.
                        Guided by advisors across design, full-stack, and the
                        trades industry, we performed competitive analysis and
                        deep user research, including surveys, secondary
                        research analysis, until we mapped out a comprehensive
                        user journey. This workflow progressed from wireframes
                        and lo-fi sketches through hi-fi prototyping to full
                        frontend and backend coding . Every feature was
                        validated through rigorous usability testing before our
                        final presentation in December 2025.
                    </p>
                </div>
                <div className={styles.content}></div>
            </div>
            <img
                src='/forge/forge-image8.png'
                alt='Forge image'
                className={styles.image}
            />
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/forge/forge-image6.png'
                    alt='Forge image'
                    className={styles.image}
                />
                <img
                    src='/forge/forge-image7.png'
                    alt='Forge image'
                    className={styles.image}
                />
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/forge/forge-image9.png'
                    alt='Forge image'
                    className={styles.image}
                />
                <img
                    src='/forge/forge-image10.png'
                    alt='Forge image'
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
                        Experience before committing. For that, we designed a
                        brand that embodies optimism, growth, and clarity. The
                        brand uses a vibrant palette of orange, representing
                        action and energy, and green for growth and success. The
                        typography is bold and modern, designed to resonate with
                        Gen Z while maintaining professional trust. Forge isn't
                        just an information hub, it has much more to offer:
                    </p>
                    <ul
                        ref={thirdListRef}
                        className={styles.section_list}>
                        <li>
                            <strong>AI Simulation: </strong>Users "play" through
                            a day in the life of a trade (e.g., an industrial
                            plumber) to see if it fits their lifestyle.
                        </li>
                        <li>
                            <strong>Gamified Pathways:</strong>
                            Progress is tracked through milestones, turning
                            complex certifications into achievable steps.
                        </li>
                        <li>
                            <strong>Interactive Map: </strong>Connecting
                            students to local training programs and in-demand
                            jobs in British Columbia.
                        </li>
                    </ul>
                </div>
            </div>

            <video
                src='/forge/forge-image4.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />
            <video
                src='/forge/forge-image11.mp4'
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
                    src='/forge/forge-image12.png'
                    alt='Forge image'
                    className={styles.image}
                />

                <video
                    src='/forge/forge-image13.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.image}
                />
            </div>
            <video
                ref={firstImageRef}
                src='/forge/forge-image18.mp4'
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
                    <h2 className={styles.section_title}>Results & Impact</h2>
                    <p className={styles.section_description}>
                        Presenting Forge at the Telus Theatre (BCIT Burnaby) in
                        December 2025 served as the ultimate validation of our
                        mission to humanize the trades. While our initial
                        research showed that students were often overwhelmed by
                        broad career categories, our final testing proved that
                        introducing specific trade subcategorization, such as
                        distinguishing between Industrial and Commercial roles,
                        effectively eliminated choice paralysis for our users.
                        <br /> <br /> The project culminated in a high-stakes
                        showcase for an audience of over 300 attendees,
                        including key government and academic figures such as
                        Mayor Mike Hurley, and several Members of Parliament and
                        the Legislative Assembly. <br /> <br />
                        By demonstrating the app's capability to senior
                        leadership from global tech leaders, we moved beyond a
                        conceptual prototype to a recognized, viable tool. The
                        result is a platform that both government officials and
                        industry experts now view as a critical bridge between
                        British Columbia’s high schools and the future of
                        technical institutions.
                    </p>
                </div>
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/forge/forge-image14.png'
                    alt='Forge image'
                    className={styles.image}
                />
                <img
                    src='/forge/forge-image15.png'
                    alt='Forge image'
                    className={styles.image}
                />
            </div>
            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/forge/forge-image16.png'
                    alt='Forge image'
                    className={styles.image}
                />
                <img
                    src='/forge/forge-image17.png'
                    alt='Forge image'
                    className={styles.image}
                />
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Future Iterations</h2>
                    <p className={styles.section_description}>
                        Moving forward, we plan to pilot Forge directly within
                        British Columbia high schools to gather real-world
                        feedback from students and educators. This phase will
                        involve iterative usability testing to refine our AI
                        simulations, ensuring they effectively bridge the gap
                        between classroom discovery and technical career entry.{" "}
                        <br /> <br />
                        Our long-term roadmap expands Forge into an "every-day
                        app" that supports users throughout their professional
                        journey. This includes establishing government
                        partnerships for grant access, launching a mentorship
                        module to connect students with industry pros, and
                        developing a career tracker for apprentices to log
                        certifications and worked hours in real-time.
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

export default Forge;
