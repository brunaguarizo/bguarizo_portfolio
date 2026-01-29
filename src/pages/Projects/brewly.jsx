import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import CodeWindow from "../../components/CodeWindow/CodeWindow";
import { FlatButton } from "../../components/Button/Button";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";

const Brewly = () => {
    const titleRef = useRef(null);
    const firstSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const firstImageRef = useRef(null);
    const aboutProjectRef = useRef(null);
    const challengeSectionRef = useRef(null);
    const firstListRef = useRef(null);
    const secondListRef = useRef(null);
    const image2ColRef = useRef(null);
    const thirdSectionRef = useRef(null);
    const thirdListRef = useRef(null);
    const secondImageRef = useRef(null);
    const fourthSectionRef = useRef(null);
    const secondImage2ColRef = useRef(null);
    const navigationRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
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
                    },
                );
            }

            // First section animation (Overview)
            if (firstSectionRef.current) {
                const children = firstSectionRef.current.children;
                gsap.fromTo(
                    children,
                    {
                        opacity: 0,
                        x: -50,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: firstSectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Second section animation (Year/Role)
            if (secondSectionRef.current) {
                const children = secondSectionRef.current.children;
                gsap.fromTo(
                    children,
                    {
                        opacity: 0,
                        x: 50,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: secondSectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // First image animation
            if (firstImageRef.current) {
                gsap.fromTo(
                    firstImageRef.current,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: firstImageRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // "About the project" section animation
            if (aboutProjectRef.current) {
                const children =
                    aboutProjectRef.current.querySelectorAll(`h2, p`);
                gsap.fromTo(
                    children,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: aboutProjectRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // "The Challenge" section animation
            if (challengeSectionRef.current) {
                const children =
                    challengeSectionRef.current.querySelectorAll(`h2, p`);
                gsap.fromTo(
                    children,
                    {
                        opacity: 0,
                        x: -30,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: challengeSectionRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // First list animation (The Challenge)
            if (firstListRef.current) {
                const listItems = firstListRef.current.querySelectorAll("li");
                gsap.fromTo(
                    listItems,
                    {
                        opacity: 0,
                        x: -30,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: firstListRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Second list animation (Research & Insights)
            if (secondListRef.current) {
                const listItems = secondListRef.current.querySelectorAll("li");
                gsap.fromTo(
                    listItems,
                    {
                        opacity: 0,
                        x: -30,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: secondListRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Two-column images animation
            if (image2ColRef.current) {
                const images = image2ColRef.current.querySelectorAll("img");
                gsap.fromTo(
                    images,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: image2ColRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Third section animation
            if (thirdSectionRef.current) {
                const children =
                    thirdSectionRef.current.querySelectorAll(`h2, p`);
                if (children.length > 0) {
                    gsap.fromTo(
                        children,
                        {
                            opacity: 0,
                            x: -30,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: thirdSectionRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }
            }

            // Third list animation (The Solution)
            if (thirdListRef.current) {
                const listItems = thirdListRef.current.querySelectorAll("li");
                gsap.fromTo(
                    listItems,
                    {
                        opacity: 0,
                        x: -30,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: thirdListRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Second image animation
            if (secondImageRef.current) {
                gsap.fromTo(
                    secondImageRef.current,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: secondImageRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Fourth section animation
            if (fourthSectionRef.current) {
                const children =
                    fourthSectionRef.current.querySelectorAll(`h2, p`);
                if (children.length > 0) {
                    gsap.fromTo(
                        children,
                        {
                            opacity: 0,
                            x: 50,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: fourthSectionRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }
            }

            // Second two-column images animation
            if (secondImage2ColRef.current) {
                const images =
                    secondImage2ColRef.current.querySelectorAll("img");
                if (images.length > 0) {
                    gsap.fromTo(
                        images,
                        {
                            opacity: 0,
                            y: 50,
                            scale: 0.95,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: "power3.out",
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: secondImage2ColRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        },
                    );
                }
            }

            // NavigationButtons animation
            if (navigationRef.current) {
                gsap.fromTo(
                    navigationRef.current,
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
                            trigger: navigationRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            }

            // Refresh ScrollTrigger to recalculate positions
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        };

        // Initialize when component mounts
        initScrollTrigger();

        // Refresh ScrollTrigger after a short delay to ensure DOM is fully rendered
        const refreshTimer = setTimeout(() => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        }, 100);

        // Also refresh when window loads to ensure all images are loaded
        const handleLoad = () => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        };
        window.addEventListener("load", handleLoad);

        // Cleanup
        return () => {
            clearTimeout(refreshTimer);
            window.removeEventListener("load", handleLoad);
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.getAll().forEach((trigger) =>
                    trigger.kill(),
                );
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <h1
                ref={titleRef}
                className={styles.title}>
                Brewly
            </h1>
            <h2 className={styles.title_details}>
                A platform for craft beer enthusiasts.
                <div className={styles.buttons_container}>
                    <FlatButton
                        disableGlow
                        onClick={() =>
                            window.open(
                                "https://app-brewly.vercel.app/",
                                "_blank",
                            )
                        }>
                        <span>Explore the Prototype</span>
                        <div className={styles.button_icon}>
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 256 256'>
                                <path
                                    fill='white'
                                    d='M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z'></path>
                            </svg>
                        </div>
                    </FlatButton>
                    <FlatButton
                        disableGlow
                        onClick={() =>
                            window.open(
                                "https://github.com/app-brewly/app-brewly",
                                "_blank",
                            )
                        }>
                        <span>View Source Code</span>
                        <div className={styles.button_icon}>
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 256 256'>
                                <path
                                    fill='white'
                                    d='M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z'></path>
                            </svg>
                        </div>
                    </FlatButton>
                </div>
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        Brewly is an <strong>application</strong> engineered to
                        create personalized beer lists by{" "}
                        <strong>fetching data from an external API.</strong> The
                        objective was to build a scalable, modular application
                        using React’s component-based structure while
                        implementing{" "}
                        <strong>
                            full CRUD operations (Create, Read, Update, Delete).
                        </strong>
                    </p>
                </div>

                <div
                    ref={secondSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2025</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        UI Designer
                        <br /> Frontend Developer <br />
                    </p>
                    <h2 className={styles.section_title}>Team</h2>
                    <p className={styles.section_description}>
                        Bruna Guarizo, Cesaria Monforte, Kunwar Manshahia
                    </p>
                </div>
            </div>

            <img
                src='/brewly/brewly-image1.png'
                alt='Brewly image'
                className={styles.image}
            />

            <div
                ref={aboutProjectRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>About the project</h2>
                </div>

                <div
                    ref={challengeSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>The Challenge</h2>
                    <p className={styles.section_description}>
                        Since the primary requirement of the project was
                        fetching data from an API,{" "}
                        <strong>
                            the challenge was sourcing a reliable API
                        </strong>{" "}
                        that met three specific criteria:
                    </p>
                    <ul className={styles.section_list}>
                        <li className={styles.section_description}>
                            Free access (no complex authentication
                            required).{" "}
                        </li>
                        <li className={styles.section_description}>
                            High-quality image assets.{" "}
                        </li>
                        <li className={styles.section_description}>
                            Detailed beer descriptions and specifications.{" "}
                        </li>
                    </ul>
                    <div className={styles.space}></div>
                    <h2 className={styles.section_title}>
                        Code Architecture & Strategy
                    </h2>
                    <p className={styles.section_description}>
                        The codebase was structured to prioritize mobile
                        performance and touch interaction.
                    </p>
                    <ul>
                        <li className={styles.section_description}>
                            <strong>Modular Components: </strong>Engineered a
                            system of reusable UI building blocks to ensure
                            visual consistency and reduce code duplication. By
                            integrating the classnames utility, I encapsulated
                            complex style logic directly within these
                            components, keeping the parent page logic clean and
                            strictly focused on data flow.
                        </li>
                        <li className={styles.section_description}>
                            <strong>Routing: </strong>Leveraged React Router to
                            manage navigation without refreshing the page,
                            preserving the "app shell" while content updates
                            dynamically.
                        </li>
                        <li className={styles.section_description}>
                            <strong>Vite Framework: </strong>We utilized Vite
                            for lightning-fast builds, ensuring the lightweight
                            bundle loads instantly on 4G networks typical of
                            mobile usage.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.content_2col}>
                <img
                    src='/brewly/brewly-image2.png'
                    alt='Brewly image'
                    className={styles.image}
                />
                <div>
                    <CodeWindow
                        title='services/beerApi.js'
                        language='javascript'
                        code={`// Brew Buddy API: https://brewbuddy.dev/
const API_BASE_URL = "https://brewbuddy.dev/api/v1/beers";

// Fetch API
const fetchAPI = async (url) => {
    try {
        const response = await fetch(url, {
            headers: { Accept: "application/json" },
        });

        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const data = await response.json();

        // Validate that we got an array
        if (!Array.isArray(data)) {
            throw new Error("API response is not an array");
        }

        return data;
    } catch (error) {
        // Handle network errors, CORS errors, etc.
        if (error.name === "TypeError" && error.message.includes("fetch")) {
            throw new Error(
                "Network error: Unable to reach the API. Please check your internet connection or CORS settings."
            );
        }
        throw error;
    }
};

/**
 * Fetch beers from the API
 * @param {Object} params - Query parameters
 * @param {number} params.per_page - Number of beers per page
 * @param {number} params.page - Page number
 * @returns {Promise<Array>} Array of beer objects
 */

export const fetchBeers = async (params = {}) => {
    try {
        const queryParams = new URLSearchParams();

        if (params.per_page) {
            queryParams.append("limit", params.per_page);
        }
        if (params.page) {
            queryParams.append(
                "offset",
                (params.page - 1) * (params.per_page || 25)
            );
        }

        const url = \`\${API_BASE_URL}\${
            queryParams.toString() ? \`?\${queryParams.toString()}\` : ""
        }\`;

        const data = await fetchAPI(url);
        return data;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetch a single beer by ID
 * @param {string} id - Beer ID (UUID)
 * @returns {Promise<Object>} Beer object
 */
export const fetchBeerById = async (id) => {
    try {
        // The API doesn't support direct ID, so we fetch in batches
        let offset = 0;
        const limit = 50;

        while (true) {
            const url = \`\${API_BASE_URL}?limit=\${limit}&offset=\${offset}\`;
            const data = await fetchAPI(url);

            const foundBeer = data.find((beer) => beer.id === id);
            if (foundBeer) return foundBeer;

            if (data.length < limit) break;
            offset += limit;
        }

        throw new Error(\`Beer with ID \${id} not found\`);
    } catch (error) {
        throw error;
    }
};

/**
 * Transform API beer data to app format
 * @param {Object} beer - Beer object from API
 * @returns {Object} Transformed beer object
 */
export const transformBeerData = (beer) => {
    // API stores description/tagline in translations array, get English version
    const englishTranslation =
        beer.translations?.find((t) => t.language?.code === "en") ||
        beer.translations?.[0] ||
        {};

    return {
        id: beer.id,
        name: beer.name,
        brewery:
            beer.brewery?.name ||
            englishTranslation.slogan ||
            "Unknown Brewery",
        tagline: englishTranslation.slogan || "",
        description: englishTranslation.description || "",
        image: beer.image?.url || null,
        abv: beer.abv,
        ibu: beer.ibu,
        srm: beer.srm,
        firstBrewed: beer.released_year?.toString() || null,
    };
};`}
                    />
                </div>
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Solution</h2>
                    <p className={styles.section_description}>
                        <strong>Log In and Sign Up: </strong>An authentication
                        flow that verifies the legal drinking age before
                        allowing users to create an account or log in.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Feed: </strong>A dynamic feed that displays
                        beers fetched from an external API, including images,
                        names, and key specifications. This feature demonstrates
                        real-time data retrieval.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Filter: </strong>To enhance navigation and
                        usability, users can filter beers based on categories
                        such as style, ABV, and brewery.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Collections: </strong>Full CRUD functionality
                        allowing users to create personalized beer collections,
                        add/remove beers, and update or delete entire lists.
                    </p>{" "}
                    <p className={styles.section_description}>
                        <strong>Profile and Settings: </strong>Users can manage
                        their personal data and view Help/About sections. We
                        implemented React Router here to ensure polished,
                        seamless navigation similar to a native app.
                    </p>
                </div>
            </div>

            <img
                src='/brewly/brewly-image4.png'
                alt='Brewly image'
                className={styles.image}
            />

            <div>
                <CodeWindow
                    title='components/BeerCard.jsx'
                    language='javascript'
                    code={`import styles from "./BeerCard.module.css";
import ButtonFav from "../ButtonFav/ButtonFav";
import ButtonKnowMore from "../ButtonKnowMore/ButtonKnowMore.jsx";
import beercan from "../../assets/beercan.png";

function BeerCard({
    type,
    collection_name,
    onCollectionClick,
    onKnowMoreClick,

    // Props from API
    beerName,
    brewery,
    image,
    beerId,

    //Favorite Props
    isFavorited,
    onFavClick,
}) {
    return (
        <div>
            {type === "feed" && (
                <div className={styles.card_container}>
                    <img
                        src={image || beercan}
                        alt={beerName || "Beer can"}
                        className={styles.card_image}
                    />
                    <div className={styles.card_text}>
                        <h3 className={styles.card_title}>
                            {beerName || "Beer not available"}
                        </h3>
                        <p className={styles.card_subtitle}>
                            {brewery || "Brewery not available."}
                        </p>
                    </div>
                    <div className={styles.button_container}>
                        <ButtonFav
                            onClick={onFavClick}
                            isFavorited={isFavorited}
                        />

                        <ButtonKnowMore onClick={onKnowMoreClick} />
                    </div>
                </div>
            )}
            {type === "collections" && (
                <div
                    className={styles.collection_container}
                    onClick={onCollectionClick}
                    style={{ cursor: "pointer" }}>
                    <img
                        src={image || beercan}
                        alt='Beer can'
                        className={styles.card_image}
                    />
                    <div className={styles.card_text}>
                        <h3 className={styles.card_title}>{collection_name}</h3>
                    </div>
                </div>
            )}
            {type === "collection info" && (
                <div className={styles.card_container}>
                    <img
                        src={image || beercan}
                        alt={beerName || "Beer can"}
                        className={styles.card_image}
                    />
                    <div className={styles.card_text}>
                        <h3 className={styles.card_title}>
                            {beerName || "Beer name"}
                        </h3>
                        <p className={styles.card_subtitle}>
                            {brewery || "Brewery name"}
                        </p>
                    </div>
                    <div className={styles.button_container}>
                        <ButtonKnowMore onClick={onKnowMoreClick} />
                    </div>
                </div>
            )}
            {type === "scroll" && (
                <div
                    className={styles.scroll_container}
                    onClick={onCollectionClick}
                    style={{
                        cursor: onCollectionClick ? "pointer" : "default",
                    }}>
                    <img
                        src={image || beercan}
                        alt='Beer can'
                        className={styles.scroll_image}
                    />

                    <h3 className={styles.scroll_title}>{collection_name}</h3>
                </div>
            )}
        </div>
    );
}

export default BeerCard;`}
                />
            </div>

            <img
                src='/brewly/brewly-image5.png'
                alt='Brewly image'
                className={styles.image}
            />

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>
                        Results and Code Quality
                    </h2>
                    <p className={styles.section_description}>
                        Brewly meets all project requirements through an
                        engaging, mobile-first interface. The core experience is
                        powered by a robust data-fetching strategy, allowing
                        users to explore beer specifications with the aid of
                        smart filters. Beyond discovery, the implementation of
                        full CRUD functionality within the "Collections" feature
                        and the seamless navigation provided by React Router
                        demonstrates a command of complex state management and
                        modern frontend architecture.
                    </p>
                </div>
            </div>

            <video
                src='/brewly/brewly-image6.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />
            <ProjectsCarousel />
        </div>
    );
};

export default Brewly;
