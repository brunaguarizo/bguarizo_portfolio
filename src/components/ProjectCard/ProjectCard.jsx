import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { ProjectButton } from "../Button/Button";

const ProjectCard = ({
    image,
    index,
    col,
    rowStart,
    rowSpan,
    isLarger,
    isMiddleFirstRow,
    isMiddleSecondRow,
    isMiddleThirdRow,
    href,
}) => {
    const isInternalLink = href && !href.startsWith('http');
    const linkProps = {
        className: `${styles.projectItem} ${
            isLarger ? styles.largerCard : ""
        } ${isMiddleFirstRow ? styles.middleFirstRow : ""} ${
            isMiddleSecondRow ? styles.middleSecondRow : ""
        } ${isMiddleThirdRow ? styles.middleThirdRow : ""}`,
        style: {
            gridColumn: col,
            gridRow: `${rowStart} / span ${rowSpan}`,
        },
    };

    const content = (
        <>
            <img
                src={image}
                alt={`Project ${index + 1}`}
                className={styles.projectImage}
            />
            <div className={styles.projectButtonWrapper}>
                <ProjectButton />
            </div>
        </>
    );

    if (isInternalLink) {
        return (
            <Link to={href} {...linkProps}>
                {content}
            </Link>
        );
    }

    return (
        <a
            href={href || 'https://www.behance.net/'}
            target={href ? undefined : '_blank'}
            rel={href ? undefined : 'noopener noreferrer'}
            {...linkProps}>
            {content}
        </a>
    );
};

export default ProjectCard;
