import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectsGrid.module.css";
import { images } from "../../assets/images";
import Button from "../Button/Button";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsGrid = ({ filterMode = "design" }) => {
    const projects = [
        {
            image: "/askfolio/askfolio.png",
            title: "Askfolio",
            description: "Quick video calls with specialists",
            tags: ["Brand Design"],
        },
        {
            image: "/forge/forge-cover.png",
            title: "Forge",
            description: "AI-powered career discovery app for trades",
            tags: ["UX/UI Design", "Frontend"],
        },
        {
            image: "/goomer/goomer-image7.png",
            title: "Goomer",
            description: "Food digital menu platform for restaurants",
            tags: ["Brand Design"],
        },
        {
            image: "/mosaic/mosaic-cover.png",
            title: "Mosaic",
            description:
                "Interactive brief generator app for juniors’ portfolio",
            tags: ["UX/UI Design", "Frontend", "Motion", "Brand Design"],
        },
        {
            image: "/rumbazo/rumbazo-image7.png",
            title: "Rumbazo",
            description: "Las Vegas Latin music festival",
            tags: ["Brand Design"],
        },
        {
            image: "/brewly/brewly-cover.png",
            title: "Brewly",
            description: "Craft beer discovery app",
            tags: ["Frontend", "UX/UI Design"],
        },
    ];

    const gridLayout = [
        // Row 1-2: Item 0 (col1, row-start-2, row-span-2), Item 1 (col2, row-start-1, row-span-3), Item 2 (col3, row-start-2, row-span-2)
        { col: 1, rowStart: 2, rowSpan: 2, isLarger: false }, // Item 0
        {
            col: 2,
            rowStart: 1,
            rowSpan: 3,
            isLarger: true,
            isMiddleFirstRow: true,
        }, // Item 1 - middle column, first row, larger
        { col: 3, rowStart: 2, rowSpan: 2, isLarger: false }, // Item 2
        // Row 4-5: Item 3 (col1, row-start-4, row-span-2), Item 4 (col2, row-start-4, row-span-3), Item 5 (col3, row-start-4, row-span-2)
        { col: 1, rowStart: 4, rowSpan: 2, isLarger: false }, // Item 3
        {
            col: 2,
            rowStart: 4,
            rowSpan: 3,
            isLarger: true,
            isMiddleSecondRow: true,
        }, // Item 4 - middle column, second row, larger
        { col: 3, rowStart: 4, rowSpan: 2, isLarger: false }, // Item 5
        // Row 6-7: Item 6 (col1, row-start-6, row-span-2), Item 7 (col2, row-start-6, row-span-3), Item 8 (col3, row-start-6, row-span-2)
        { col: 1, rowStart: 6, rowSpan: 2, isLarger: false }, // Item 6
        {
            col: 2,
            rowStart: 6,
            rowSpan: 3,
            isLarger: true,
            isMiddleThirdRow: true,
        }, // Item 7 - middle column, third row, larger
        { col: 3, rowStart: 6, rowSpan: 2, isLarger: false }, // Item 8
        // Row 8-9: Item 4 (col1, row-start-8, row-span-2) - Mosaic
        { col: 1, rowStart: 8, rowSpan: 2, isLarger: false }, // Item 4 - Mosaic
        // Row 10-11: Item 5 (col2, row-start-10, row-span-2) - Brewly
        { col: 2, rowStart: 10, rowSpan: 2, isLarger: false }, // Item 5 - Brewly
    ];

    // Filter projects based on filterMode
    const designProjects = projects.filter((project) => {
        return project.tags.some((tag) => {
            const tagLower = tag.toLowerCase();
            return (
                tagLower.includes("brand design") || tagLower === "brand design"
            );
        });
    });

    const codeProjects = projects.filter((project) => {
        return project.tags.some((tag) => {
            const tagLower = tag.toLowerCase();
            return tagLower.includes("frontend") || tagLower === "frontend";
        });
    });

    // Select projects based on filterMode
    const selectedProjects =
        filterMode === "design" ? designProjects : codeProjects;

    // Ensure we always show a multiple of 3 projects to avoid incomplete rows
    // If we have less than 3 projects, show all. Otherwise, show the largest multiple of 3
    const projectsToShow =
        selectedProjects.length < 3
            ? selectedProjects.length
            : Math.floor(selectedProjects.length / 3) * 3;
    const filteredProjects = selectedProjects.slice(0, projectsToShow);

    // Map selected projects to the original grid layout positions
    // Only map as many projects as we have, without repetition
    const reorganizedProjects = filteredProjects.map(
        (project, projectIndex) => {
            // Use the layout from gridLayout, but only for available projects
            const layout = gridLayout[projectIndex] || gridLayout[0];

            // Find the original index in the full projects array
            const originalProjectIndex = projects.findIndex(
                (p) => p.image === project.image,
            );

            return {
                ...project,
                index: originalProjectIndex,
                ...layout,
            };
        },
    );

    return (
        <section
            id='projects'
            className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {reorganizedProjects.map((item) => (
                        <ProjectCard
                            key={item.index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            tags={item.tags}
                            index={item.index}
                            col={item.col}
                            rowStart={item.rowStart}
                            rowSpan={item.rowSpan}
                            isLarger={item.isLarger}
                            isMiddleFirstRow={item.isMiddleFirstRow}
                            isMiddleSecondRow={item.isMiddleSecondRow}
                            isMiddleThirdRow={item.isMiddleThirdRow}
                            href={
                                item.index === 0
                                    ? "/askfolio"
                                    : item.index === 1
                                      ? "/forge"
                                      : item.index === 2
                                        ? "/goomer"
                                        : item.index === 3
                                          ? "/mosaic"
                                          : item.index === 4
                                            ? "/rumbazo"
                                            : item.index === 5
                                              ? "/brewly"
                                              : undefined
                            }
                        />
                    ))}
                </div>
                <div className={styles.actions}>
                    <Link
                        to='/projects'
                        className={styles.allProjectsLink}>
                        See All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
