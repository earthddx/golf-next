import styles from '@/app/App.module.css'

const MED_SERVICES = [
  'Weight Loss (GLP-1)',
  'Biote Hormone Replacement',
  'MonaLisa Laser Treatment',
  'Pelvic Floor Therapy',
  'IV Therapy',
  'CO₂ Laser',
  'PDO Threads',
  'Facials',
  'HydroFacial',
  'Botox',
  'Fillers',
]

export default function MedPartnersSection() {
  return (
    <section id="partners" className={styles.medPartners}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Service Affiliations</p>
          <h2 className={styles.sectionTitle} style={{ color: 'var(--white)' }}>
            Trusted Medical Partners
          </h2>
          <p className={styles.sectionDesc} style={{ color: 'rgba(255,255,255,0.65)' }}>
            Through Alle Golf Lab, Alessandra collaborates with leading medical
            specialists to offer her clients a complete path to health, recovery, and performance.
          </p>
        </div>

        <div className={styles.medPartnerCard}>
          <div className={styles.medPartnerHeader}>
            <div className={styles.medPartnerInfo}>
              <img
                src="/images/dr-iskander.jpg"
                alt="Dr. George Iskander"
                className={styles.medPartnerPhoto}
              />
              <div>
                <p className={styles.medPartnerEyebrow}>Medical Affiliation</p>
                <h3 className={styles.medPartnerName}>Dr. George Iskander</h3>
                <p className={styles.medPartnerPractice}>Reston OB/GYN &amp; Wellness</p>
              </div>
            </div>
            <a
              href="https://www.restonobgyn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.medPartnerLink}
            >
              Visit Practice
            </a>
          </div>

          <p className={styles.medPartnerBio}>
            Dr. Iskander is a board-certified OB/GYN specializing in minimally
            invasive and robotic-assisted surgery, with a focus on uterine
            fibroids, abnormal uterine bleeding, and hysterectomy. He trained
            at SUNY Downstate and the Icahn School of Medicine at Mount Sinai,
            and brings culturally sensitive, patient-centered care to the
            Northern Virginia community — fluent in both English and Arabic.
            Beyond his practice, he is actively involved in international
            medical missions serving underserved communities worldwide.
          </p>

          <div className={styles.medServicesGrid}>
            {MED_SERVICES.map((svc) => (
              <span key={svc} className={styles.medServiceTag}>
                {svc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
