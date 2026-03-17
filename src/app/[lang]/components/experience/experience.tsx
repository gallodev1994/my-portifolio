import './experience.scss'

interface ExperienceProps {
  title: string
  experiences: {
    role: string
    company: string
    period: string
    description: string
    technologies: string[]
  }[]
}

export function Experience({ title, experiences }: ExperienceProps) {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <span className="period">{exp.period}</span>
            </div>
            <p className="description">{exp.description}</p>
            <div className="technologies">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}