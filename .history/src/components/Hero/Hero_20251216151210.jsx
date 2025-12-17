import React from 'react'
import styles from './Hero.module.css'
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground'
import { images } from '../../assets/images'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      {images.heroBackground && (
        <AnimatedBackground 
          imageUrl={images.heroBackground} 
          speed={20}
          direction="parallax"
        />
      )}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Branding that you need <span className={styles.highlight}>Indeed</span>
          </h1>
          <p className={styles.description}>
            Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get Started Now</button>
            <button className={styles.secondaryButton} onClick={scrollToProjects}>See Projects</button>
          </div>
        </div>
        <div className={styles.carouselIndicators}>
          <span className={styles.indicator}></span>
          <span className={styles.indicator}></span>
          <span className={styles.indicator}></span>
        </div>
      </div>
    </section>
  )
}

export default Hero

