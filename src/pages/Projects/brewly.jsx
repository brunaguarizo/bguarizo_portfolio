import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import CodeWindow from "../../components/CodeWindow/CodeWindow";

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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                        }
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
                    }
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
                    }
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
                        }
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
                        }
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
                    }
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
                    trigger.kill()
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
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        Brewly is a mobile-first web application engineered to
                        create personalized beer lists fetching data from an
                        external API. The objective was to build an app with
                        React’s component-based structure, with a modular
                        scalable app and work with CRUD operations (create,
                        delete, retrieve, and update data).
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
                        The primary challenge was finding a good beer API, which
                        had:
                    </p>
                    <ul className={styles.section_list}>
                        <li className={styles.section_description}>
                            Free with no authentication needed
                        </li>
                        <li className={styles.section_description}>
                            High quality images
                        </li>
                        <li className={styles.section_description}>
                            Beer description and specifications
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
                            <strong>Vite Framework: </strong>Utilized Vite for
                            lightning-fast builds, ensuring the lightweight
                            bundle loads instantly on 4G networks typical of
                            mobile usage.
                        </li>
                        <li className={styles.section_description}>
                            <strong>Modular Component: </strong>Engineered a
                            system of reusable UI building blocks to ensure
                            visual consistency and reduce code duplication
                            across views. By integrating the classnames utility
                            within these modular components, I encapsulated
                            complex style logic directly inside the components,
                            keeping the parent page logic clean and strictly
                            focused on data flow.
                        </li>
                        <li className={styles.section_description}>
                            <strong>Routing: </strong>Leveraged React Router to
                            manage navigation without refreshing the page,
                            preserving the "app shell" while content updates
                            dynamically.
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
                        code={`// Beer API Service
// Fetches beer data from external API endpoints

const API_BASE_URL = 'https://api.punkapi.com/v2/beers';

/**
 * Fetch beers from the API
 * @param {Object} params - Query parameters
 * @param {number} params.page - Page number
 * @param {number} params.per_page - Items per page
 * @param {string} params.beer_name - Filter by beer name
 * @param {number} params.abv_gt - Filter by ABV greater than
 * @param {number} params.abv_lt - Filter by ABV less than
 * @param {string} params.brewed_before - Filter by brewed before date
 * @param {string} params.brewed_after - Filter by brewed after date
 * @returns {Promise<Array>} Array of beer objects
 */
export const fetchBeers = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams();
    
    // Add pagination
    if (params.page) queryParams.append('page', params.page);
    if (params.per_page) queryParams.append('per_page', params.per_page);
    
    // Add filters
    if (params.beer_name) queryParams.append('beer_name', params.beer_name);
    if (params.abv_gt) queryParams.append('abv_gt', params.abv_gt);
    if (params.abv_lt) queryParams.append('abv_lt', params.abv_lt);
    if (params.brewed_before) queryParams.append('brewed_before', params.brewed_before);
    if (params.brewed_after) queryParams.append('brewed_after', params.brewed_after);
    
    const url = \`\${API_BASE_URL}?\${queryParams.toString()}\`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(\`API Error: \${response.status} \${response.statusText}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching beers:', error);
    throw error;
  }
};

/**
 * Fetch a single beer by ID
 * @param {number} id - Beer ID
 * @returns {Promise<Object>} Beer object
 */
export const fetchBeerById = async (id) => {
  try {
    const response = await fetch(\`\${API_BASE_URL}/\${id}\`);
    
    if (!response.ok) {
      throw new Error(\`API Error: \${response.status} \${response.statusText}\`);
    }
    
    const data = await response.json();
    return data[0]; // API returns array with single beer
  } catch (error) {
    console.error(\`Error fetching beer \${id}:\`, error);
    throw error;
  }
};

/**
 * Fetch random beer
 * @returns {Promise<Object>} Random beer object
 */
export const fetchRandomBeer = async () => {
  try {
    const response = await fetch(\`\${API_BASE_URL}/random\`);
    
    if (!response.ok) {
      throw new Error(\`API Error: \${response.status} \${response.statusText}\`);
    }
    
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error('Error fetching random beer:', error);
    throw error;
  }
};

/**
 * Search beers by name
 * @param {string} searchTerm - Search query
 * @param {number} page - Page number
 * @returns {Promise<Array>} Array of matching beers
 */
export const searchBeers = async (searchTerm, page = 1) => {
  return fetchBeers({
    beer_name: searchTerm,
    page: page,
    per_page: 25
  });
};

/**
 * Filter beers by ABV range
 * @param {number} minAbv - Minimum ABV
 * @param {number} maxAbv - Maximum ABV
 * @param {number} page - Page number
 * @returns {Promise<Array>} Array of filtered beers
 */
export const filterBeersByAbv = async (minAbv, maxAbv, page = 1) => {
  return fetchBeers({
    abv_gt: minAbv,
    abv_lt: maxAbv,
    page: page,
    per_page: 25
  });
};`}
                    />
                </div>
            </div>

            <img
                src='/brewly/brewly-image3.png'
                alt='Brewly image'
                className={styles.image}
            />

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Solution</h2>
                    <p className={styles.section_description}>
                        <strong>Log In and Sign Up: </strong>Authentication flow
                        to verify legal drinking age and allow users to create
                        an account or log in.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Feed: </strong>Displays beers fetched from an
                        external API, including images, names, and key
                        specifications. Implements the Retrieve operation and
                        showcases data-fetching.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Filter: </strong>Users can filter beers based on
                        categories such as style, ABV, and brewery, to enhance
                        navigation and improve usability.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Collections: </strong>Full CRUD functionality to
                        create personalized beer collections, update collections
                        and their beers, delete collections or individual beers,
                        retrieve all stored collections.
                    </p>{" "}
                    <p className={styles.section_description}>
                        <strong>Profile: </strong>Users can view and edit their
                        profile information, applying update functionality and
                        improving personalization.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Settings: </strong>Includes Help, Security, and
                        About Us sections. Implements React Router for
                        navigation and uses a component library to ensure a
                        polished and consistent UI.
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
                    code={`import React from 'react';
import classNames from 'classnames';
import styles from './BeerCard.module.css';

/**
 * Modular BeerCard component
 * Reusable component for displaying beer information
 * Uses classnames utility for conditional styling
 */
const BeerCard = ({ 
  beer, 
  variant = 'default', 
  onClick,
  showDetails = true 
}) => {
  const cardClasses = classNames(
    styles.beerCard,
    {
      [styles.beerCardCompact]: variant === 'compact',
      [styles.beerCardFeatured]: variant === 'featured',
      [styles.beerCardClickable]: onClick !== undefined
    }
  );

  const handleClick = () => {
    if (onClick) {
      onClick(beer);
    }
  };

  return (
    <div 
      className={cardClasses}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.beerImageContainer}>
        <img 
          src={beer.image_url || '/placeholder-beer.png'} 
          alt={beer.name}
          className={styles.beerImage}
          loading="lazy"
        />
        {beer.abv && (
          <span className={styles.abvBadge}>
            {beer.abv}% ABV
          </span>
        )}
      </div>
      
      <div className={styles.beerInfo}>
        <h3 className={styles.beerName}>{beer.name}</h3>
        <p className={styles.beerTagline}>{beer.tagline}</p>
        
        {showDetails && (
          <div className={styles.beerDetails}>
            <span className={styles.beerStyle}>{beer.style}</span>
            {beer.ibu && (
              <span className={styles.beerIbu}>IBU: {beer.ibu}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

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
                        engaging, mobile-first interface that begins with a
                        secure authentication flow for age verification. The
                        core experience is powered by a dynamic Feed that
                        fetches data from an external API, allowing users to
                        explore beer specifications with the aid of smart
                        filters for style, ABV, and brewery. Beyond discovery,
                        we implemented full CRUD functionality within the
                        Collections feature, enabling users to create, update,
                        and delete personalized lists, while the Profile and
                        Settings sections utilize React Router to provide
                        seamless, app-like navigation and comprehensive user
                        data management.
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

            <div ref={navigationRef}>
                <NavigationButtons
                    prevLink='/'
                    nextLink='/projects'
                    prevLabel='Back to Home'
                    nextLabel='More Projects'
                />
            </div>
        </div>
    );
};

export default Brewly;
