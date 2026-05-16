'use client'
import { useState, useEffect } from 'react'
import { scrollToSection } from '@/lib/utils'

const NAV_LINKS = ['About', 'Services', 'Method', 'Partners', 'Contact']
import styles from '@/app/App.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    e.stopPropagation()
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <a
        href="#"
        className={styles.logo}
        onClick={(e) => e.preventDefault()}
      >
        <span className={styles.logoMark}>A</span>
        <span className={styles.logoText}>Alle Golf Lab</span>
      </a>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={styles.navLink}
            onClick={(e) => handleNav(e, link)}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.navCta}
          onClick={(e) => handleNav(e, 'Contact')}
        >
          Book a Session
        </a>
      </nav>

      <button
        className={styles.burger}
        onClick={(e) => { e.stopPropagation(); setMenuOpen((o) => !o) }}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.burgerLineTop : ''} />
        <span className={menuOpen ? styles.burgerLineMid : ''} />
        <span className={menuOpen ? styles.burgerLineBot : ''} />
      </button>
    </header>
  )
}
