'use client'

import Link from 'next/link'
import './navbar.scss'

interface NavbarProps {
  homeLabel: string
  expertiseLabel: string
  experienceLabel: string
  educationLabel: string
  contactLabel: string
}

export function Navbar({ homeLabel, expertiseLabel, experienceLabel, educationLabel, contactLabel }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="#hero" className="logo">
          CG
        </Link>
        <ul className="nav-links">
          <li><a href="#hero">{homeLabel}</a></li>
          <li><a href="#expertise">{expertiseLabel}</a></li>
          <li><a href="#experience">{experienceLabel}</a></li>
          <li><a href="#education">{educationLabel}</a></li>
          <li><a href="#contact">{contactLabel}</a></li>
        </ul>
      </div>
    </nav>
  )
}