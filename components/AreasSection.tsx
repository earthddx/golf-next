import styles from '@/app/App.module.css'

const AREAS = [
  {
    img: '/images/areas/nova.jpg',
    region: 'Northern Virginia',
    abbr: 'NoVA',
  },
  {
    img: '/images/areas/maryland.jpg',
    region: 'Maryland',
    abbr: 'MD',
  },
  {
    img: '/images/areas/dc.jpg',
    region: 'Washington, D.C.',
    abbr: 'DC',
  },
]

export default function AreasSection() {
  return (
    <section className={styles.areas}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Areas Served</h2>
          <p className={styles.sectionDesc}>
            Serving golfers across the DMV — in-person throughout Northern Virginia,
            Maryland, and Washington, D.C., and online worldwide.
          </p>
        </div>

        <div className={styles.areasGrid}>
          {AREAS.map(({ img, region, abbr }) => (
            <div key={region} className={styles.areaCard}>
              <div className={styles.areaCardImg}>
                <img src={img} alt={region} />
              </div>
              <div className={styles.areaCardBody}>
                <p className={styles.areaName}>{region}</p>
                <p className={styles.areaAbbr}>{abbr}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.areasOnline}>
          <a href="#contact" className={styles.areasOnlineLink}>
            Book a session →
          </a>
        </p>
      </div>
    </section>
  )
}
