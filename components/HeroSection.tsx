'use client'
import { scrollToSection } from '@/lib/utils'
import styles from '@/app/App.module.css'

export default function HeroSection() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <img
        className={styles.heroBg}
        src="/hero.avif"
        alt="Golf course at sunrise"
      />
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Alle Golf Lab LLC</p>
        <h1 className={styles.heroTitle}>
          Elevate Your Game
          <br />
          <span className={styles.heroTitleAccent}>Through Science</span>
        </h1>
        <p className={styles.heroSub}>
          Expert golf fitness & biomechanics specialist Alessandra Miller —
          <br />
          TPI Certified | K-Vest | NASM | ELDOA | Dr. Kwon&apos;s Golf Biomechanics
        </p>
        <div className={styles.heroCtas}>
          <a
            href="#contact"
            className={styles.btnPrimary}
            onClick={(e) => handleNav(e, 'Contact')}
          >
            Book a Session
          </a>
          <a
            href="#services"
            className={styles.btnGhost}
            onClick={(e) => handleNav(e, 'Services')}
          >
            Explore Services
          </a>
        </div>
      </div>
      <div className={styles.heroScroll}>
        <span />
      </div>
    </section>
  )
}
