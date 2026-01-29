import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsData } from "../../data/projectsData";
import styles from "./ProjectsCarousel.module.css";

const ProjectsCarousel = () => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const projectsCount = projectsData.length;

    const scrollToIndex = (index) => {
        const container = carouselRef.current;
        if (!container) {
            return;
        }

        const card = container.children[index];
        if (!card) {
            return;
        }

        container.scrollTo({
            left: card.offsetLeft,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToIndex(activeIndex);
    }, [activeIndex]);

    const step = 4;

    const handlePrev = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - step + projectsCount) % projectsCount,
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + step) % projectsCount);
    };

    return (
        <section className={styles.carouselSection}>
            <div className={styles.carouselHeader}>
                <h2>How about check out some other projects?</h2>
                <div className={styles.controls}>
                    <button
                        type='button'
                        className={styles.controlButton}
                        onClick={handlePrev}
                        aria-label='Previous project'>
                        &lt;
                    </button>
                    <button
                        type='button'
                        className={styles.controlButton}
                        onClick={handleNext}
                        aria-label='Next project'>
                        &gt;
                    </button>
                </div>
            </div>
            <div
                className={styles.carousel}
                ref={carouselRef}>
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className={styles.cardWrapper}>
                        <ProjectCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            href={project.href}
                            simpleLayout={true}
                            compactLayout={true}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsCarousel;
