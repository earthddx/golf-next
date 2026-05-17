'use client'
import { useState } from 'react'
import { Mail } from 'lucide-react'
import styles from '@/app/App.module.css'

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xrejywzj', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      })
      setFormStatus(res.ok ? 'success' : 'error')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Get in Touch</p>
          <h2 className={styles.sectionTitle}>Start Your Journey</h2>
          <p className={styles.sectionDesc}>
            Ready to take your golf game to the next level? Send a message and
            Alessandra will be in touch.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>First Name</label>
                <input
                  className={styles.input}
                  type="text"
                  name="firstName"
                  placeholder="John"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Last Name</label>
                <input
                  className={styles.input}
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Golf Services — Interested In</label>
              <select className={styles.input} name="interest">
                <option value="">Select a service…</option>
                <option>Golf Biomechanics Assessment</option>
                <option>TPI Golf Fitness Program</option>
                <option>K-Vest 3D Analysis</option>
                <option>ELDOA &amp; Corrective Exercise</option>
                <option>Full Performance Program</option>
              </select>
            </div>

            <div className={styles.formDivider}>
              <span>Also interested in Dr. Iskander&apos;s services?</span>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Medical Services — Interested In</label>
              <select className={styles.input} name="medicalInterest">
                <option value="">Select a service (optional)…</option>
                <option>Weight Loss (GLP-1)</option>
                <option>Biote Hormone Replacement</option>
                <option>MonaLisa Laser Treatment</option>
                <option>Pelvic Floor Therapy</option>
                <option>IV Therapy</option>
                <option>CO₂ Laser</option>
                <option>PDO Threads</option>
                <option>Facials</option>
                <option>HydroFacial</option>
                <option>Botox</option>
                <option>Fillers</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                name="message"
                rows={4}
                placeholder="Tell us about your golf goals..."
              />
            </div>
            {formStatus === 'success' ? (
              <p className={styles.formSuccess}>
                Message sent! Alessandra will be in touch soon.
              </p>
            ) : (
              <>
                {formStatus === 'error' && (
                  <p className={styles.formError}>
                    Something went wrong. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  className={styles.btnSubmit}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </>
            )}
          </form>

          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <Mail size={22} className={styles.contactIcon} />
              <div>
                <h4>Email</h4>
                <p>allemiller@allegolflab.com</p>
              </div>
            </div>
            <div className={styles.contactQuote}>
              <p>
                &ldquo;The body controls the club. Train the body, transform the
                game.&rdquo;
              </p>
              <span>— Alessandra Miller</span>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactSteps}>
                <h4>What to expect</h4>
                <ol>
                  <li>Send your message</li>
                  <li>Hear back within 24 hours</li>
                  <li>Map out your plan together</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
