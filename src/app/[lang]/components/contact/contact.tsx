'use client'

import { useState, FormEvent, useEffect } from 'react'
import Link from 'next/link'
import './contact.scss'

interface ContactProps {
  title: string
  subtitle: string
  emailLabel: string
  nameLabel: string
  messageLabel: string
  buttonText: string
  successMessage: string
  instagramLabel: string
  linkedinLabel: string
  githubLabel: string
  twitterLabel: string
}

const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
const EMAILJS_SERVICE_ID = 'W2lnkeBxA5yPBCRgg'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'

declare global {
  interface Window {
    emailjs: any
  }
}

export function Contact({ 
  title, 
  subtitle,
  emailLabel,
  nameLabel, 
  messageLabel, 
  buttonText, 
  successMessage,
  instagramLabel,
  linkedinLabel,
  githubLabel,
  twitterLabel
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [emailjsReady, setEmailjsReady] = useState(false)

  useEffect(() => {
    if (window.emailjs) {
      window.emailjs.init(EMAILJS_PUBLIC_KEY)
      setEmailjsReady(true)
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (emailjsReady && window.emailjs) {
        await window.emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'contato.gallodev@gmail.com'
          }
        )
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('EmailJS not configured. Form data:', formData)
      }
      
      setSubmitted(true)
      
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error sending email:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          
          <div className="social-links">
            <Link href="https://www.instagram.com/ak_gallo/" target="_blank" aria-label={instagramLabel}>
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/christian-gallo-b4291bb0/" target="_blank" aria-label={linkedinLabel}>
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link href="https://github.com/gallodev" target="_blank" aria-label={githubLabel}>
              <i className="fab fa-github"></i>
            </Link>
            <Link href="https://twitter.com/" target="_blank" aria-label={twitterLabel}>
              <i className="fab fa-twitter"></i>
            </Link>
          </div>

          <a href="mailto:contato.gallodev@gmail.com" className="email-link">
            <i className="fas fa-envelope"></i>
            contato.gallodev@gmail.com
          </a>
        </div>

        <div className="contact-form-container">
          {loading && (
            <div className="linear-progress">
              <div className="progress-bar"></div>
            </div>
          )}
          
          {submitted ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <p>{successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
              <button type="submit" disabled={loading}>
                {loading ? 'Enviando...' : buttonText}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}