import Image from 'next/image'
import './hero.scss'

interface HeroProps {
  welcome: string
  role: string
  description?: string
}

export function Hero({ welcome, role, description }: HeroProps) {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{welcome}</h1>
          <h2>{role}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="hero-image">
          <Image 
            src="/assets/profile.jpg" 
            alt="Christian Gallo" 
            width={280} 
            height={280}
            priority
          />
        </div>
      </div>
    </section>
  )
}