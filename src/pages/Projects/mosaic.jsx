import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Project.module.css";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import CodeWindow from "../../components/CodeWindow/CodeWindow";

const Mosaic = () => {
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
                Mosaic
            </h1>
            <h2 className={styles.title_details}>
                Bridging the skilled trades gap through AI-guided exploration.
            </h2>

            <div
                ref={firstSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Overview</h2>
                    <p className={styles.section_description}>
                        For junior designers and developers, the biggest hurdle
                        to landing a job is often the lack of a robust
                        portfolio. They have the skills, but without real
                        clients, they lack the "ammunition", such as the
                        context, constraints, and content, needed to build
                        impressive case studies. Mosaic is a web application
                        designed to solve this "experience paradox." It
                        functions as an interactive brief generator that
                        constructs realistic project scenarios based on the
                        user's answers. By simulating a real client
                        relationship, Mosaic provides the tailored content and
                        requirements users need to create meaningful projects
                        and showcase their true potential.
                    </p>
                </div>

                <div
                    ref={secondSectionRef}
                    className={styles.content}>
                    <h2 className={styles.section_title}>Year</h2>
                    <p className={styles.section_description}>2025</p>
                    <h2 className={styles.section_title}>Role</h2>
                    <p className={styles.section_description}>
                        Product Designer (UX/UI)
                        <br /> Frontend Developer <br />
                        Branding
                    </p>
                    <h2 className={styles.section_title}>Team</h2>
                    <p className={styles.section_description}>
                        Bruna Guarizo, Cesaria Monforte, Kyle Tria, Kunwar
                        Manshahia
                    </p>
                </div>
            </div>

            <img
                src='/mosaic/mosaic-image1.png'
                alt='Mosaic image'
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
                        The primary problem identified was the lack of depth in
                        student portfolios.
                    </p>
                    <p className={styles.section_description}>
                        <strong>The "Lorem Ipsum" Trap:</strong> Without a real
                        brief, personal projects often look superficial,
                        focusing only on visuals without solving a user problem.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Decision Paralysis:</strong> Emerging
                        professionals waste hours trying to invent a fake
                        company name or business goal instead of designing the
                        solution.
                    </p>
                    <p className={styles.section_description}>
                        <strong>The Goal:</strong> We needed a tool that would
                        act as a "Virtual Client," handing the user a concrete
                        problem to solve so they could focus entirely on
                        executing the design and code.
                    </p>
                    <div className={styles.space}></div>
                    <h2 className={styles.section_title}>Brand Strategy</h2>
                    <p className={styles.section_description}>
                        The strategy was anchored in the concept of "pieces of a
                        whole," reflecting the idea that just as a mosaic is
                        composed of individual fragments, a successful career is
                        built project by project. Our positioning focused on
                        empowerment, specifically "giving ammunition" to the
                        user by providing the necessary tools and scenarios to
                        execute their best work, rather than doing it for them.
                        This philosophy translated visually into a grid layout
                        within the UI, representing the diversity of challenges
                        and illustrating how distinct skills stack together to
                        form a complete, robust professional profile.
                    </p>
                </div>
            </div>
            <img
                src='/mosaic/mosaic-image2.png'
                alt='Mosaic image'
                className={styles.image}
            />

            <div
                ref={image2ColRef}
                className={styles.image_2col}>
                <img
                    src='/mosaic/mosaic-image3.png'
                    alt='Mosaic image'
                    className={styles.image}
                />
                <img
                    src='/mosaic/mosaic-image4.png'
                    alt='Mosaic image'
                    className={styles.image}
                />
            </div>

            <div
                ref={secondImage2ColRef}
                className={styles.image_2col}>
                <img
                    src='/mosaic/mosaic-image5.png'
                    alt='Mosaic image'
                    className={styles.image}
                />
                <img
                    src='/mosaic/mosaic-image6.png'
                    alt='Mosaic image'
                    className={styles.image}
                />
            </div>

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>The Solution</h2>
                    <p className={styles.section_description}>
                        Mosaic is a responsive web app that creates custom
                        design challenges.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Interactive Scenarios:</strong> Instead of a
                        static list of prompts, the app guides the user through
                        a questionnaire (e.g., "What industry interests you?",
                        "Do you want to practice Mobile or Web design?").
                    </p>

                    <p className={styles.section_description}>
                        <strong>The "Brief" Engine:</strong> Based on these
                        answers, the app generates a detailed "Client Case,"
                        complete with a company backstory, a specific problem
                        statement, target audience data, and project
                        constraints.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Outcome:</strong> This gives the user a solid
                        foundation to start their project immediately, ensuring
                        their final portfolio piece is grounded in a realistic
                        business context rather than abstract ideas.
                    </p>
                </div>
            </div>

            <video
                src='/mosaic/mosaic-image9.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />

            <img
                src='/mosaic/mosaic-image10.png'
                alt='Mosaic image'
                className={styles.image}
            />
            <img
                src='/mosaic/mosaic-image8.png'
                alt='Mosaic image'
                className={styles.image}
            />

            <video
                src='/mosaic/mosaic-image11.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>

                <div className={styles.content}>
                    <h2 className={styles.section_title}>
                        Technical Implementation
                    </h2>
                    <p className={styles.section_description}>
                        Built with Next.js and React, Mosaic leverages modern
                        web technologies to deliver a seamless user experience.
                        Here's a glimpse into our codebase:
                    </p>
                </div>
            </div>

            <img
                src='/mosaic/mosaic-image12.png'
                alt='Mosaic image'
                className={styles.image}
            />

            <div>
                <CodeWindow
                    title='components/OnboardingFlow.jsx'
                    language='javascript'
                    code={`'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  // Step One: Industry Selection
  const stepOne = {
    id: 'industry',
    title: 'Step One: Choose Your Industry',
    question: 'What industry interests you?',
    options: ['Tech', 'Healthcare', 'Finance', 'E-commerce', 'Education']
  };

  // Step Two: Platform Selection
  const stepTwo = {
    id: 'platform',
    title: 'Step Two: Select Platform',
    question: 'Do you want to practice Mobile or Web design?',
    options: ['Mobile', 'Web', 'Both']
  };

  // Step Three: Experience Level
  const stepThree = {
    id: 'experience',
    title: 'Step Three: Experience Level',
    question: 'What level of complexity are you looking for?',
    options: ['Beginner', 'Intermediate', 'Advanced']
  };

  // Step Four: Project Type
  const stepFour = {
    id: 'projectType',
    title: 'Step Four: Project Type',
    question: 'What type of project do you want to work on?',
    options: ['Landing Page', 'Dashboard', 'Mobile App', 'E-commerce', 'SaaS']
  };

  const steps = [stepOne, stepTwo, stepThree, stepFour];

  const handleAnswer = (stepId, answer) => {
    setAnswers(prev => ({ ...prev, [stepId]: answer }));
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Generate brief based on all answers
      generateBrief({ ...answers, [stepId]: answer });
    }
  };

  const generateBrief = async (userAnswers) => {
    // Call API to generate personalized brief
    const response = await fetch('/api/generate-brief', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userAnswers)
    });
    
    const brief = await response.json();
    router.push(\`/brief/\${brief.id}\`);
  };

  const renderStep = () => {
    const step = steps[currentStep];
    
    return (
      <div className="step-container">
        <div className="step-header">
          <h3>{step.title}</h3>
          <span className="step-indicator">
            {currentStep + 1} / {steps.length}
          </span>
        </div>
        
        <div className="question-card">
          <h2>{step.question}</h2>
          <div className="options-grid">
            {step.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(step.id, option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="onboarding-container">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: \`\${((currentStep + 1) / steps.length) * 100}%\` }}
                />
            </div>
      
      {renderStep()}
    </div>
  );
};

export default OnboardingFlow;`}
                />
            </div>

            <video
                src='/mosaic/mosaic-image13.mp4'
                autoPlay
                loop
                muted
                playsInline
                className={styles.image}
            />

            <div>
                <CodeWindow
                    title='hooks/useCreateProject.js'
                    language='javascript'
                    code={`'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useCreateProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const createProject = async (projectData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Step 1: Validate project data
      const validatedData = validateProjectData(projectData);
      
      // Step 2: Generate project brief
      const brief = await generateBrief(validatedData);
      
      // Step 3: Create project record
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...validatedData,
          brief: brief,
          createdAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      const project = await response.json();
      
      // Step 4: Save to user's project list
      await saveToUserProjects(project.id);
      
      // Step 5: Navigate to project page
      router.push(\`/projects/\${project.id}\`);
      
      return project;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const validateProjectData = (data) => {
    const required = ['industry', 'platform', 'experience', 'projectType'];
    const missing = required.filter(field => !data[field]);
    
    if (missing.length > 0) {
      throw new Error(\`Missing required fields: \${missing.join(', ')}\`);
    }
    
    return {
      industry: data.industry,
      platform: data.platform,
      experience: data.experience,
      projectType: data.projectType,
      preferences: data.preferences || {}
    };
  };

  const generateBrief = async (data) => {
    const response = await fetch('/api/generate-brief', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate brief');
    }
    
    return await response.json();
  };

  const saveToUserProjects = async (projectId) => {
    const userProjects = JSON.parse(
      localStorage.getItem('userProjects') || '[]'
    );
    
    userProjects.push({
      id: projectId,
      addedAt: new Date().toISOString()
    });
    
    localStorage.setItem('userProjects', JSON.stringify(userProjects));
  };

  return {
    createProject,
    isLoading,
    error
  };
};`}
                />
            </div>

            <div
                ref={fourthSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}></div>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Results and Impact</h2>
                    <p className={styles.section_description}>
                        The project successfully validated the need for
                        structured practice in the design community.
                    </p>
                    <p className={styles.section_description}>
                        <strong>User Validation:</strong> Usability testing
                        showed that users felt more confident starting a project
                        when given specific constraints. The "randomized client"
                        feature was cited as a key motivator to break creative
                        blocks.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Functional Prototype:</strong> The application
                        was fully developed and deployed using Next.js,
                        demonstrating not just a design concept but a working
                        tool that processes user logic to output dynamic
                        content.
                    </p>
                    <p className={styles.section_description}>
                        <strong>Skill Showcase:</strong> Beyond the tool itself,
                        the development of Mosaic served as its own case study,
                        proving my ability to build a full-stack application
                        from concept to deployment.
                    </p>
                </div>
            </div>

            <img
                src='/mosaic/mosaic-image15.png'
                alt='Mosaic image'
                className={styles.image}
            />

            <div
                ref={thirdSectionRef}
                className={styles.content_2col}>
                <div className={styles.content}>
                    <h2 className={styles.section_title}>Future Iterations</h2>
                    <p className={styles.section_description}>
                        Future plans include coding the backend integrating an
                        AI API to generate infinite unique client personas and
                        adding a "Community Showcase" where users can upload and
                        compare how different designers solved the exact same
                        Mosaic brief.
                    </p>
                </div>
                <div className={styles.content}></div>
            </div>

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

export default Mosaic;
