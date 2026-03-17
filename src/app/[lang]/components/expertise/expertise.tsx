import Image from 'next/image'
import './expertise.scss'

interface ExpertiseProps {
  title: string
  skills: { name: string; icon: string }[]
}

export function Expertise({ title, skills }: ExpertiseProps) {
  return (
    <section id="expertise" className="expertise">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                width={48} 
                height={48}
              />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}