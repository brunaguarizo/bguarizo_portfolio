import React from "react";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";
import Button from "../../components/Button/Button";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";

const Project1 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Forge</h1>

            <div className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        Managing approvals for financial actions like issuing
                        cards, changing limits, or reviewing reimbursements can
                        be complex. Each organization has unique rules,
                        approvers, and hierarchies, which makes scaling
                        difficult. To address this, we introduced Approval
                        Policies: a unified system that centralizes approval
                        logic and provides a consistent experience across
                        workflows. Phase 1 focused on Card Requests: the most
                        common and sensitive approval flow.
                    </p>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2025</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        Product Designer
                    </p>
                </div>
            </div>

            <img
                src='/askfolio/askfolio.png'
                alt='Phase 1: Rule builder'
                className={styles.image}
            />

            <div className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>About the project</h2>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Challenge</h2>
                    <p className={styles.section_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec viverra sit amet erat vestibulum viverra. Nam
                        maximus ex sed diam tempor, eu eleifend nibh aliquet.
                        Suspendisse bibendum metus felis, eu dapibus enim auctor
                        at. Suspendisse dictum felis vehicula mauris
                        pellentesque cursus. Sed in suscipit nulla. Aliquam non
                        viverra sapien, at varius elit. In eu ipsum leo. Nam
                        iaculis massa sit amet urna posuere consectetur. Nunc
                        pharetra risus nulla, dignissim bibendum metus
                        pellentesque sit amet. Integer tincidunt tellus lectus,
                        ac dapibus lacus accumsan eget.
                    </p>
                    <div className={styles.space}></div>
                    <h2 className={styles.section_title}>Objectives</h2>
                    <p className={styles.section_description}>
                        In eu ipsum leo. Nam iaculis massa sit amet urna posuere
                        consectetur. Nunc pharetra risus nulla, dignissim
                        bibendum metus pellentesque sit amet. Integer tincidunt
                        tellus lectus, ac dapibus lacus accumsan eget. Aliquam
                        mi tellus, pulvinar a venenatis nec, tempor ut sapien.
                        Nulla egestas ex velit, in accumsan sapien egestas
                        aliquam. Donec sollicitudin mollis magna, nec venenatis
                        neque efficitur sagittis. Pellentesque et ex quis sapien
                        vehicula consectetur sed in tortor.
                    </p>
                </div>
            </div>

            <div className={styles.image_2col}>
                <img
                    src='/askfolio/askfolio.png'
                    alt='Phase 1: Rule builder'
                    className={styles.image}
                />
                <img
                    src='/askfolio/askfolio.png'
                    alt='Phase 1: Rule builder'
                    className={styles.image}
                />
            </div>

            <div className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Challenge</h2>
                    <p className={styles.section_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec viverra sit amet erat vestibulum viverra. Nam
                        maximus ex sed diam tempor, eu eleifend nibh aliquet.
                        Suspendisse bibendum metus felis, eu dapibus enim auctor
                        at. Suspendisse dictum felis vehicula mauris
                        pellentesque cursus. Sed in suscipit nulla. Aliquam non
                        viverra sapien, at varius elit. In eu ipsum leo. Nam
                        iaculis massa sit amet urna posuere consectetur. Nunc
                        pharetra risus nulla, dignissim bibendum metus
                        pellentesque sit amet. Integer tincidunt tellus lectus,
                        ac dapibus lacus accumsan eget.
                    </p>
                </div>
                <div className={styles.content}></div>
            </div>

            <img
                src='/askfolio/askfolio.png'
                alt='Phase 1: Rule builder'
                className={styles.image}
            />

            <div className={styles.content_2col}>
                <div className={styles.content}></div>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Challenge</h2>
                    <p className={styles.section_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec viverra sit amet erat vestibulum viverra. Nam
                        maximus ex sed diam tempor, eu eleifend nibh aliquet.
                        Suspendisse bibendum metus felis, eu dapibus enim auctor
                        at. Suspendisse dictum felis vehicula mauris
                        pellentesque cursus. Sed in suscipit nulla. Aliquam non
                        viverra sapien, at varius elit. In eu ipsum leo. Nam
                        iaculis massa sit amet urna posuere consectetur. Nunc
                        pharetra risus nulla, dignissim bibendum metus
                        pellentesque sit amet. Integer tincidunt tellus lectus,
                        ac dapibus lacus accumsan eget.
                    </p>
                </div>
            </div>

            <div className={styles.image_2col}>
                <img
                    src='/askfolio/askfolio.png'
                    alt='Phase 1: Rule builder'
                    className={styles.image}
                />
                <img
                    src='/askfolio/askfolio.png'
                    alt='Phase 1: Rule builder'
                    className={styles.image}
                />
            </div>

            <NavigationButtons
                prevLink='/'
                nextLink='/#projects'
                prevLabel='Back to Home'
                nextLabel='Next Project'
            />
        </div>
    );
};

export default Project1;
