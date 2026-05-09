import {
  Bone,
  Dumbbell,
  Stethoscope,
  PersonStanding,
  ScanLine,
  Award,
} from 'lucide-react'
import styles from '@/app/App.module.css'

const SERVICES = [
  {
    Icon: Bone,
    title: 'Golf Biomechanics',
    desc: 'Detailed analysis of your swing mechanics using science-backed biomechanical principles to unlock power, consistency, and injury-free play.',
  },
  {
    Icon: Dumbbell,
    title: 'MyTPI Golf Fitness',
    desc: 'Titleist Performance Institute-certified screening and training programs tailored specifically to the demands of the golf athlete.',
  },
  {
    Icon: Stethoscope,
    title: 'Medical Golf Fitness',
    desc: 'Rehabilitation-informed training bridging the gap between medical recovery and peak on-course performance.',
  },
  {
    Icon: PersonStanding,
    title: 'ELDOA',
    desc: 'Targeted spinal decompression and postural exercises that enhance mobility, reduce pain, and improve your address position.',
  },
  {
    Icon: ScanLine,
    title: 'K-Vest 3D Analysis',
    desc: 'Real-time 3D motion capture of your kinematic sequence — see exactly how energy transfers from ground through club head.',
  },
  {
    Icon: Award,
    title: 'CES-NASM',
    desc: 'NASM Corrective Exercise Specialist methodology to identify and fix movement dysfunctions before they become injuries.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>What We Offer</p>
          <h2 className={styles.sectionTitle}>Training Methods &amp; Services</h2>
          <p className={styles.sectionDesc}>
            A full-spectrum approach to golf performance — from movement
            screening to on-course application.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s) => (
            <div key={s.title} className={styles.serviceCard}>
              <s.Icon size={32} className={styles.serviceIcon} />
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
