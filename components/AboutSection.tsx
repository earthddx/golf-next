import styles from "@/app/App.module.css";

const CERTIFICATIONS = [
  {
    title: "Uniararas University",
    sub: "Bachelor's Degree ·  Physical Education / Exercise Physiology · 2000 – 2004",
  },
  {
    title: "MyTPI Golf Fitness / Medical",
    sub: "Titleist Performance Institute",
  },
  {
    title: "K-Vest 3D Motion (Kinematic Sequence)",
    sub: "Kinematic Sequence Analysis",
  },
  { title: "ELDOA", sub: "Spinal Decompression Method" },
  { title: "CES-NASM", sub: "Corrective Exercise Specialist" },
  {
    title: "SMFA — Golf Injuries",
    sub: "Selective Functional Movement Assessment · Diagnostic system identifying root causes of musculoskeletal pain in golfers",
  },
  { title: "Golf Biomechanics", sub: "Level 1 & 2 (Dr. Kwon)" },
  { title: "Sport Psychology", sub: "Mental Performance & Athletic Mindset" },
  { title: "Personal Trainer", sub: "UNIMES University" },
  {
    title: "Aquatic Sports Science",
    sub: "PUC University · Hydro Science, Business & Practical Plus",
  },
  { title: "Kids Swimming Coach", sub: "Youth Aquatic Coaching Certification" },
  { title: "Brazilian Jiu-Jitsu & Judo", sub: "Competitive Grappling Arts" },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <img
              src="/thumbnail.jpeg"
              alt="Alessandra Miller"
              className={styles.avatar}
            />
            <p className={styles.sectionEyebrow}>About Alessandra</p>
            <h2 className={styles.sectionTitle}>
              Where Biomechanics
              <br />
              Meets the Fairway
            </h2>
            <p className={styles.aboutParagraph}>
              Alessandra Miller is a certified golf fitness specialist and
              biomechanics expert based at Alle Golf Lab LLC. With a deep
              commitment to evidence-based coaching, she bridges the worlds of
              sports science, rehabilitation, and high-performance golf
              training.
            </p>
            <p className={styles.aboutParagraph}>
              Her multidisciplinary background — spanning TPI Golf Fitness,
              K-Vest 3D motion analysis, ELDOA, and NASM Corrective Exercise —
              allows her to assess each golfer as a whole athlete and build
              individualized programs that produce lasting results on the
              course.
            </p>
          </div>

          <div className={styles.aboutCertsCol}>
            <p className={styles.certSectionLabel}>
              Education &amp; Certifications
            </p>
            <ul className={styles.certCardList}>
              {CERTIFICATIONS.map((c) => (
                <li key={c.title} className={styles.certCard}>
                  <span className={styles.certCardDot} />
                  <div>
                    <span className={styles.certCardTitle}>{c.title}</span>
                    <span className={styles.certCardSub}>{c.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
