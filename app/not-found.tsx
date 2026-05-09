import Link from 'next/link'
import styles from './NotFound.module.css'

export const metadata = {
  title: '404 — Page Not Found | Alle Golf Lab LLC',
}

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.logoMark}>A</div>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.sub}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link href="/" className={styles.btn}>Back to Home</Link>
      </div>
    </div>
  )
}
