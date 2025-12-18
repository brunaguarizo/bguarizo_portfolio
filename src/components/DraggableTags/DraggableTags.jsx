import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";
import styles from "./DraggableTags.module.css";

const TAGS = [
    "Art History",
    "Painting",
    "Handmade Crafts",
    "Sketching & Doodling",
    "Video Games",
    "Music",
    "Series & Movies",
    "Board Games",
    "DIY",
    "Cooking",
];

const DraggableTags = ({ tags = TAGS, title }) => {
    const containerRef = useRef(null);
    const tagRefs = useRef([]);
    const engineRef = useRef(null);
    const renderRef = useRef(null);
    const runnerRef = useRef(null);
    const bodiesRef = useRef([]);
    const mouseConstraintRef = useRef(null);
    const [isDragging, setIsDragging] = useState(null);

    useEffect(() => {
        if (!containerRef.current || tags.length === 0) return;

        const container = containerRef.current;
        let engine,
            bodies = [],
            walls = [],
            mouseConstraint,
            runner;
        let animationFrameId;

        const initPhysics = () => {
            const containerRect = container.getBoundingClientRect();
            if (containerRect.width === 0 || containerRect.height === 0) return;

            // Create engine
            engine = Matter.Engine.create();
            engine.world.gravity.y = 0.2; // Light gravity
            engine.world.gravity.scale = 0.001;
            engineRef.current = engine;

            // Create bodies for each tag
            const tagElements = tagRefs.current;

            tagElements.forEach((tagElement, index) => {
                if (!tagElement) return;

                const tagRect = tagElement.getBoundingClientRect();
                const width = tagRect.width || 120;
                const height = tagRect.height || 40;

                // Random initial position (accounting for padding)
                const computedStyle = getComputedStyle(container);
                const paddingTop = parseFloat(computedStyle.paddingTop) || 16;
                const paddingLeft = parseFloat(computedStyle.paddingLeft) || 16;
                const paddingRight =
                    parseFloat(computedStyle.paddingRight) || 16;
                const paddingBottom =
                    parseFloat(computedStyle.paddingBottom) || 16;

                const maxX =
                    containerRect.width - width - paddingLeft - paddingRight;
                const maxY =
                    containerRect.height - height - paddingTop - paddingBottom;
                const x =
                    paddingLeft + Math.random() * Math.max(0, maxX) + width / 2;
                const y =
                    paddingTop + Math.random() * Math.max(0, maxY) + height / 2;

                // Create rounded rectangle body
                const body = Matter.Bodies.rectangle(x, y, width, height, {
                    chamfer: { radius: 9 }, // Rounded corners
                    frictionAir: 0.02, // Air resistance
                    friction: 0.1,
                    restitution: 0.4, // Bounciness
                    density: 0.0008, // Light weight
                    render: {
                        visible: false, // We'll render with DOM elements
                    },
                });

                // Store reference to DOM element
                body.element = tagElement;
                bodies.push(body);
                bodiesRef.current.push(body);

                // Set initial DOM position
                Matter.Body.setPosition(body, { x, y });
                Matter.Body.setAngle(body, (Math.random() - 0.5) * 0.2);
            });

            // Create walls (bounds)
            const wallThickness = 50;
            walls = [
                // Top
                Matter.Bodies.rectangle(
                    containerRect.width / 2,
                    -wallThickness / 2,
                    containerRect.width,
                    wallThickness,
                    { isStatic: true }
                ),
                // Bottom
                Matter.Bodies.rectangle(
                    containerRect.width / 2,
                    containerRect.height + wallThickness / 2,
                    containerRect.width,
                    wallThickness,
                    { isStatic: true }
                ),
                // Left
                Matter.Bodies.rectangle(
                    -wallThickness / 2,
                    containerRect.height / 2,
                    wallThickness,
                    containerRect.height,
                    { isStatic: true }
                ),
                // Right
                Matter.Bodies.rectangle(
                    containerRect.width + wallThickness / 2,
                    containerRect.height / 2,
                    wallThickness,
                    containerRect.height,
                    { isStatic: true }
                ),
            ];

            // Add all bodies to world
            Matter.World.add(engine.world, [...bodies, ...walls]);

            // Mouse constraint for dragging
            mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: Matter.Mouse.create(container),
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false,
                    },
                },
            });

            Matter.World.add(engine.world, mouseConstraint);
            mouseConstraintRef.current = mouseConstraint;

            // Handle mouse events
            Matter.Events.on(mouseConstraint, "startdrag", (event) => {
                const body = event.body;
                if (body && body.element) {
                    setIsDragging(body.element);
                    body.element.style.scale = "1.1";
                    body.element.style.zIndex = "1000";
                }
            });

            Matter.Events.on(mouseConstraint, "enddrag", (event) => {
                const body = event.body;
                if (body && body.element) {
                    setIsDragging(null);
                    body.element.style.scale = "1";
                    body.element.style.zIndex = "1";
                }
            });

            // Update DOM positions based on physics
            const updatePositions = () => {
                bodies.forEach((body) => {
                    if (body.element) {
                        const pos = body.position;
                        const angle = body.angle;
                        const width = body.bounds.max.x - body.bounds.min.x;
                        const height = body.bounds.max.y - body.bounds.min.y;

                        body.element.style.left = `${pos.x - width / 2}px`;
                        body.element.style.top = `${pos.y - height / 2}px`;
                        body.element.style.transform = `rotate(${angle}rad)`;
                    }
                });
                animationFrameId = requestAnimationFrame(updatePositions);
            };

            // Run physics engine
            runner = Matter.Runner.create();
            runnerRef.current = runner;
            Matter.Runner.run(runner, engine);

            // Start update loop
            updatePositions();
        };

        // Wait for DOM to be ready
        const timeoutId = setTimeout(initPhysics, 100);

        // Handle resize
        const handleResize = () => {
            if (walls.length === 0) return;
            const newRect = container.getBoundingClientRect();
            const wallThickness = 50;

            // Update wall positions
            Matter.Body.setPosition(walls[0], {
                x: newRect.width / 2,
                y: -wallThickness / 2,
            });
            Matter.Body.setPosition(walls[1], {
                x: newRect.width / 2,
                y: newRect.height + wallThickness / 2,
            });
            Matter.Body.setPosition(walls[2], {
                x: -wallThickness / 2,
                y: newRect.height / 2,
            });
            Matter.Body.setPosition(walls[3], {
                x: newRect.width + wallThickness / 2,
                y: newRect.height / 2,
            });
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (runner) {
                Matter.Runner.stop(runner);
            }
            if (engine) {
                Matter.Engine.clear(engine);
            }
            bodiesRef.current = [];
        };
    }, [tags]);

    return (
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>Things I like</h2>}
            <div
                ref={containerRef}
                className={styles.tagsContainer}>
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        ref={(el) => (tagRefs.current[index] = el)}
                        className={`${styles.tag} ${
                            isDragging === tagRefs.current[index]
                                ? styles.dragging
                                : ""
                        }`}>
                        <div className={styles.tagContent}>{tag}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DraggableTags;
