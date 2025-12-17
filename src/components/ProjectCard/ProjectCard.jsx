import React from "react";
import styles from "./ProjectCard.module.css";
import { ProjectButton } from "../Button/Button";

const ProjectCard = ({ image, index, col, rowStart, rowSpan, isLarger, isMiddleFirstRow, isMiddleSecondRow, isMiddleThirdRow }) => {
    return (
        <a
            href='https://www.behance.net/'
            target='_blank'
            rel='noopener'
            className={`${styles.projectItem} ${
                isLarger ? styles.largerCard : ""
            } ${
                isMiddleFirstRow ? styles.middleFirstRow : ""
            } ${
                isMiddleSecondRow ? styles.middleSecondRow : ""
            } ${
                isMiddleThirdRow ? styles.middleThirdRow : ""
            }`}
            style={{
                gridColumn: col,
                gridRow: `${rowStart} / span ${rowSpan}`,
            }}>
            <img
                src={image}
                alt={`Project ${index + 1}`}
                className={styles.projectImage}
            />
            <div className={styles.projectButtonWrapper}>
                <ProjectButton />
            </div>
        </a>
    );
};

export default ProjectCard;
