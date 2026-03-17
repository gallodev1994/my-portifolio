'use client'

import './education.scss'

interface EducationItem {
  degree: string
  institution: string
  year: string
  description: string
}

interface EducationProps {
  title: string
  items: EducationItem[]
}

export function Education({ title, items }: EducationProps) {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="education-list">
        {items.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3>{item.degree}</h3>
              <span className="year">{item.year}</span>
            </div>
            <span className="institution">{item.institution}</span>
            {item.description && <p className="description">{item.description}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}