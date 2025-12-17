import React from 'react'
import styles from './About.module.css'
import { images } from '../../assets/images'

const About = () => {
  const skills = [
    'Product Design',
    'Brand Identity Design',
    'UX Design',
    'Branding',
    'Packaging Design',
    'Figma',
    'Photoshop'
  ]

  const experience = [
    {
      role: 'Brand Designer',
      company: 'UrbanFit Studio',
      period: '2023-24',
      current: false
    },
    {
      role: 'Package Designer',
      company: 'GreenK Studio',
      period: '2020-22',
      current: false
    },
    {
      role: 'Freelance',
      company: 'GreenLeaf Co',
      period: 'Currently',
      current: true
    }
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h2 className={styles.title}>Meet Meily</h2>
          <p className={styles.description}>
            I'm Meily, a passionate Brand Identity & Package Designer based in tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
          </p>
          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
          <div className={styles.experienceSection}>
            {experience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.experienceContent}>
                  <div className={styles.role}>{exp.role}</div>
                  <div className={styles.company}>{exp.company}</div>
                  <div className={styles.period}>{exp.period}</div>
                </div>
                {exp.current && <span className={styles.currentBadge}>Currently</span>}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.profileImage}>
          {images.profile ? (
            <img 
              src={images.profile} 
              alt="Meily - Brand Identity & Package Designer"
              className={styles.profileImg}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div className={styles.imagePlaceholder} style={{ display: images.profile ? 'none' : 'flex' }}>
            <span>Profile Picture</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

