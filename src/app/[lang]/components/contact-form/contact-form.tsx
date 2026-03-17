'use client'

import { useState, FormEvent } from 'react'
import './contact-form.scss'

interface ContactFormProps {
    contactTitle: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    buttonText: string
    successMessage: string
}

export function ContactForm({ 
    contactTitle, 
    nameLabel, 
    emailLabel, 
    messageLabel, 
    buttonText,
    successMessage
}: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="contact-form-container">
            <h3>{contactTitle}</h3>
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
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{messageLabel}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">{buttonText}</button>
                </form>
            )}
        </div>
    )
}