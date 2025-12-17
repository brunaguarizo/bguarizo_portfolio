import React, { useState, useEffect } from "react";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";

const ProjectPage = () => {
    const [selectedTag, setSelectedTag] = useState("all");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tags = [
        "all",
        "brand design",
        "UX/UI",
        "product design",
        "frontend",
        "motion",
    ];

    // Mock data - você pode substituir por dados reais
    const projects = [
        {
            id: 1,
            image: "/askfolio/askfolio.png",
            tags: ["product design", "ux/ui"],
            href: "/project1",
        },
        {
            id: 2,
            image: "/askfolio/askfolio.png",
            tags: ["brand design", "ux/ui"],
            href: undefined,
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
                <h1 className={styles.title}>Projects</h1>

                <div className={styles.tags_container}>
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

                <div className={styles.projects_grid}>
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

                <div className={styles.cta_section}>
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
