import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectsGrid.module.css";
import { images } from "../../assets/images";
import Button from "../Button/Button";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsGrid = () => {
    const projectImages = [
        "/askfolio/askfolio.png", // Index 0 - Project1
        "/forge/forge-cover.png", // Index 1 - Project2
        "/goomer/goomer-image7.png", // Index 2 - Goomer
        "/rumbazo/rumbazo-image7.png", // Index 3 - Rumbazo
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
    ];

    const reorganizedImages = projectImages.map((image, index) => ({
        image: image,
        index: index,
        ...gridLayout[index],
    }));

    return (
        <section
            id='projects'
            className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {reorganizedImages.map((item) => (
                        <ProjectCard
                            key={item.index}
                            image={item.image}
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
                                    ? "/rumbazo"
                                    : undefined
                            }
                        />
                    ))}
                </div>
                <div className={styles.actions}>
                    <Link
                        to='/projects'
                        className={styles.allProjectsLink}>
                        See More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
