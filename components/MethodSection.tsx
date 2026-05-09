'use client'
import { scrollToSection } from '@/lib/utils'
import styles from '@/app/App.module.css'

const STEPS = [
  {
    n: '01',
    title: 'Movement Screen',
    desc: 'Full TPI body-swing connection assessment to map your physical profile.',
  },
  {
    n: '02',
    title: 'K-Vest 3D Analysis',
    desc: 'Motion capture reveals your kinematic sequence and power leaks in real time.',
  },
  {
    n: '03',
    title: 'Custom Program',
    desc: 'ELDOA, corrective exercise, and strength work tailored to your specific needs.',
  },
  {
    n: '04',
    title: 'On-Course Results',
    desc: 'Measurable improvements in distance, accuracy, and injury resilience.',
  },
]

export default function MethodSection() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <section id="method" className={styles.methodCta}>
      <div className={styles.ctaBannerOverlay} />
      <img
        src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1800&q=80"
        alt="Golf course fairway"
        className={styles.ctaBannerBg}
      />
      <div className={styles.methodCtaInner}>
        <p className={styles.ctaBannerEyebrow}>The Alle Golf Lab Method</p>
        <h2 className={styles.methodCtaTitle}>Assess. Train. Perform.</h2>
        <p className={styles.methodParagraph}>
          Every program begins with a thorough physical and movement screen.
          We identify your body&apos;s limitations, asymmetries, and strengths —
          then build a roadmap designed specifically around your game.
        </p>
        <div className={styles.stepsGrid}>
          {STEPS.map((step) => (
            <div key={step.n} className={styles.step}>
              <span className={styles.stepNum}>{step.n}</span>
              <div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className={styles.methodCtaDivider} />

        <h2 className={styles.ctaBannerTitle}>Ready to play your best golf?</h2>
        <p className={styles.ctaBannerSub}>
          Join Alessandra at Alle Golf Lab and start your science-based journey today.
        </p>
        <a
          href="#contact"
          className={styles.btnPrimary}
          onClick={(e) => handleNav(e, 'Contact')}
        >
          Book Your Assessment
        </a>
        <div className={styles.ctaBannerMeta}>
          <span>In-person &amp; online sessions available</span>
          <span className={styles.ctaBannerMetaDot}>·</span>
          <span>allemiller@allegolflab.com</span>
        </div>
      </div>
    </section>
  )
}
