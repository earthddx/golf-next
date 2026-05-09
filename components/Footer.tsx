import LinkedInIcon from '@/components/LinkedInIcon'
import InstagramIcon from '@/components/InstagramIcon'
import styles from '@/app/App.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>
          <span className={styles.logoMark}>A</span>
          <span className={styles.logoText}>Alle Golf Lab LLC</span>
        </div>
        <p className={styles.footerTagline}>
          Dr. Kwon&apos;s Golf Biomechanics · TPI · K-Vest · ELDOA · NASM
        </p>
        <div className={styles.footerSocial}>
          <a
            href="https://www.linkedin.com/in/alessandra-miller-9a5580190/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerSocialLink}
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="https://www.instagram.com/alecxssgf/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerSocialLink}
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
        </div>
        <p className={styles.footerCopy}>
          © {new Date().getFullYear()} Alle Golf Lab LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
