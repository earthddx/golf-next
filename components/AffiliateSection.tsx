import styles from '@/app/App.module.css'

export default function AffiliateSection() {
  return (
    <section className={styles.affiliate}>
      <div className={styles.container}>
        <p className={styles.affiliateLabel}>Official Affiliates</p>
        <p className={styles.affiliateSub}>
          Brands Alessandra personally uses and recommends — affiliate links,
          she may earn a commission on purchases.
        </p>
        <div className={styles.affiliateGrid}>
          <a
            href="https://my.lactigo.com/alle"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.affiliateItem}
          >
            <img
              src="/lactigo.avif"
              alt="LactiGo"
              className={styles.affiliateLogo}
            />
            <p className={styles.affiliateDesc}>
              Topical athletic recovery gel that reduces muscle soreness and
              fatigue — applied directly before and after activity.
            </p>
            <span className={styles.affiliateBadge}>Affiliate</span>
          </a>
        </div>
      </div>
    </section>
  )
}
