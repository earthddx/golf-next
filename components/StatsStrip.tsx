import styles from '@/app/App.module.css'

const STATS = [
  { value: '22+', label: 'Years Experience' },
  { value: '16', label: 'Certifications' },
  { value: '100%', label: 'Science-Based' },
]

export default function StatsStrip() {
  return (
    <section className={styles.statsStrip}>
      {STATS.map((s) => (
        <div key={s.label} className={styles.statItem}>
          <span className={styles.statValue}>{s.value}</span>
          <span className={styles.statLabel}>{s.label}</span>
        </div>
      ))}
    </section>
  )
}
