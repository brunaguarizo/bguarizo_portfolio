import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";

const ProjectPage = () => {
    const [selectedTag, setSelectedTag] = useState("all");
    const titleRef = useRef(null);
    const tagsRef = useRef(null);
    const projectsGridRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
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
                    }
                );
            }

            // Tags animation
            if (tagsRef.current) {
                const tagButtons = tagsRef.current.children;
                gsap.fromTo(
                    tagButtons,
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
                            trigger: tagsRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            // Projects Grid animation
            if (projectsGridRef.current) {
                const projectCards = projectsGridRef.current.children;
                gsap.fromTo(
                    projectCards,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: projectsGridRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            // CTA animation
            if (ctaRef.current) {
                gsap.fromTo(
                    ctaRef.current,
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
                            trigger: ctaRef.current,
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

    // Re-animate projects when filter changes
    useEffect(() => {
        if (projectsGridRef.current && typeof window !== "undefined" && window.ScrollTrigger) {
            const projectCards = projectsGridRef.current.children;
            if (projectCards.length > 0) {
                gsap.fromTo(
                    projectCards,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.05,
                        ease: "power3.out",
                    }
                );
            }
        }
    }, [selectedTag]);

    const tags = [
        "all",
        "brand design",
        "UX/UI",
        "product design",
        "frontend",
        "motion",
    ];

    // Mock data - you can replace with real data
    const projects = [
        {
            id: 1,
            image: "/askfolio/askfolio.png",
            tags: ["product design", "ux/ui"],
            href: "/askfolio",
        },
        {
            id: 2,
            image: "/forge/forge-cover.png",
            tags: ["brand design", "ux/ui"],
            href: "/forge",
        },
        {
            id: 3,
            image: "/askfolio/askfolio.png",
            tags: ["frontend", "product design"],
            href: undefined,
        },
        {
            id: 4,
            image: "/askfolio/askfolio.png",
            tags: ["motion", "brand design"],
            href: undefined,
        },
        {
            id: 5,
            image: "/askfolio/askfolio.png",
            tags: ["ux/ui", "product design"],
            href: undefined,
        },
        {
            id: 6,
            image: "/askfolio/askfolio.png",
            tags: ["frontend"],
            href: undefined,
        },
        {
            id: 7,
            image: "/askfolio/askfolio.png",
            tags: ["brand design"],
            href: undefined,
        },
        {
            id: 8,
            image: "/askfolio/askfolio.png",
            tags: ["motion", "ux/ui"],
            href: undefined,
        },
        {
            id: 9,
            image: "/askfolio/askfolio.png",
            tags: ["product design"],
            href: undefined,
        },
    ];

    const filteredProjects =
        selectedTag === "all"
            ? projects
            : projects.filter((project) =>
                  project.tags.some(
                      (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
                  )
              );

    return (
        <div className={styles.project_page}>
            <div className={styles.container}>
                <h1 ref={titleRef} className={styles.title}>Projects</h1>

                <div ref={tagsRef} className={styles.tags_container}>
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            className={`${styles.tag} ${
                                selectedTag === tag ? styles.tag_active : ""
                            }`}
                            onClick={() => setSelectedTag(tag)}>
                            {tag}
                        </button>
                    ))}
                </div>

                <div ref={projectsGridRef} className={styles.projects_grid}>
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image}
                            index={index}
                            col={1}
                            rowStart={1}
                            rowSpan={1}
                            isLarger={false}
                            isMiddleFirstRow={false}
                            isMiddleSecondRow={false}
                            isMiddleThirdRow={false}
                            href={project.href}
                            simpleLayout={true}
                        />
                    ))}
                </div>

                <div ref={ctaRef} className={styles.cta_section}>
                    <Button
                        onClick={() =>
                            (window.location.href =
                                "mailto:b.guarizo@hotmail.com")
                        }>
                        Get in Touch
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
