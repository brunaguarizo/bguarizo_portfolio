import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { ProjectButton } from "../Button/Button";

const defaultProjectContent = {
    image: "/askfolio/askfolio.png",
    title: "Askfolio",
    description: "Quick video calls with specialists",
    tags: ["Brand Design"],
};

const ProjectCard = ({
    image = defaultProjectContent.image,
    title = defaultProjectContent.title,
    description = defaultProjectContent.description,
    tags = defaultProjectContent.tags,
    index,
    col,
    rowStart,
    rowSpan,
    isLarger,
    isMiddleFirstRow,
    isMiddleSecondRow,
    isMiddleThirdRow,
    href,
    simpleLayout = false,
    compactLayout = false,
}) => {
    const isInternalLink = href && !href.startsWith("http");
    const linkProps = {
        className: `${styles.projectItem} ${
            isLarger ? styles.largerCard : ""
        } ${isMiddleFirstRow ? styles.middleFirstRow : ""} ${
            isMiddleSecondRow ? styles.middleSecondRow : ""
        } ${isMiddleThirdRow ? styles.middleThirdRow : ""} ${
            compactLayout ? styles.compact : ""
        }`,
        style: simpleLayout
            ? {}
            : {
                  gridColumn: col,
                  gridRow: `${rowStart} / span ${rowSpan}`,
              },
    };

    const content = (
        <>
            <img
                src={image}
                alt={title || `Project ${index + 1}`}
                className={styles.projectImage}
            />
            <div className={styles.projectInfo}>
                {title && <h3 className={styles.projectTitle}>{title}</h3>}
                {description && (
                    <p className={styles.projectDescription}>{description}</p>
                )}
                {tags && tags.length > 0 && (
                    <div className={styles.projectTags}>
                        {tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className={styles.projectTag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className={styles.projectButtonWrapper}>
                <ProjectButton />
            </div>
        </>
    );

    if (isInternalLink) {
        return (
            <Link
                to={href}
                {...linkProps}>
                {content}
            </Link>
        );
    }

    return (
        <a
            href={href || "https://www.behance.net/"}
            target={href ? undefined : "_blank"}
            rel={href ? undefined : "noopener noreferrer"}
            {...linkProps}>
            {content}
        </a>
    );
};

export default ProjectCard;
