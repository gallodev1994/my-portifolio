import { Navbar } from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { Expertise } from './components/expertise/expertise'
import { Experience } from './components/experience/experience'
import { Education } from './components/education/education'
import { Contact } from './components/contact/contact'
import { Params } from './layout'
import { useTranslation } from '../i18n'

import './styles/home.scss'

const skills = [
  { name: 'JavaScript', icon: '/assets/javascript.png' },
  { name: 'TypeScript', icon: '/assets/typescript.png' },
  { name: 'React', icon: '/assets/react.png' },
  { name: 'Node.js', icon: '/assets/node.png' },
  { name: 'Python', icon: '/assets/python.png' },
  { name: 'PHP', icon: '/assets/php.png' }
]

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
}

interface EducationItem {
  degree: string
  institution: string
  year: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    role: 'CTO',
    company: 'Pleno Skateshop',
    period: '03/2025 - Atual',
    description: 'Criação de um marketplace próprio para a indústria têxtil underground criando uma solução para diversos fornecedores que possuem skateshops.',
    technologies: ['TypeScript', 'React', 'Next.js', 'NestJS', 'TailwindCSS', 'GitHub Actions', 'Jest']
  },
  {
    role: 'Senior Full Stack Engineer',
    company: 'ICTS',
    period: '05/2024 - 03/2025',
    description: 'Sustentação de plataformas e sistemas em produção. Resolução de BUGs, implementação de melhorias em sistemas PHP/Laravel e React. Robôs de scraping em Python. Provisionar soluções rápidas com comandos automatizados e manipulação de dados.',
    technologies: ['TypeScript', 'React', 'PHP', 'Laravel', 'CSS3', 'HTML5', 'GIT', 'Next.js', 'PostgreSQL', 'Redis', 'SharePoint']
  },
  {
    role: 'Senior Front-end Engineer',
    company: 'Hubla',
    period: '12/2021 - 08/2022',
    description: 'Provisionamento de grupos para plataformas (WhatsApp, Telegram) e gerenciamento de assinaturas para criadores de conteúdos.',
    technologies: ['TypeScript', 'React', 'Jest', 'React Testing Library', 'CSS3', 'Sass', 'HTML5', 'GIT', 'Next.js', 'GitHub Actions']
  },
  {
    role: 'Senior Front-end Developer',
    company: 'Dasa',
    period: '02/2021 - 12/2021',
    description: 'Desenvolvimento do portal para área comercial com finalidade de diagnosticar glosas em procedimentos de atendimentos clínicos.',
    technologies: ['Node.js', 'React', 'Jest', 'RTL', 'Kafka', 'CSS3', 'HTML5', 'GIT', 'PostgreSQL', 'Docker', 'AWS', 'Lambda', 'Antd Design', 'Jenkins', 'Fortify', 'SonarQ']
  },
  {
    role: 'Desenvolvedor Web Full Stack Senior',
    company: 'Rojemac',
    period: '09/2020 - 03/2021',
    description: 'Desenvolvimento do portal de representantes da empresa, integrado com webservices do ERP SENIOR. Desenvolvimento, sustentação e suporte. Robôs de integração para espelhamento de informações.',
    technologies: ['Node.js', 'React', 'GraphQL', 'Kafka', 'CSS3', 'HTML5', 'GIT', 'PostgreSQL', 'MongoDB', 'Heroku', 'Vercel', 'Material UI', 'C#']
  },
  {
    role: 'Desenvolvedor Web Full Stack Senior',
    company: 'Agriconnected',
    period: '08/2018 - 09/2020',
    description: 'Desenvolvimento da plataforma web da empresa e aplicativo. Solução de IoT para monitoramento de maquinários agrícolas.',
    technologies: ['Python', 'Django', 'jQuery', 'JavaScript', 'React', 'CSS3', 'HTML5', 'GIT', 'MySQL', 'Bootstrap', 'React Native', 'Celery', 'Django REST Framework', 'Redux', 'Redux Saga', 'Watermelon DB']
  },
  {
    role: 'Desenvolvedor Web Full Stack Senior',
    company: 'Claro',
    period: '01/2016 - 12/2017',
    description: 'Na equipe de inovação em indicadores de negócio. Alterações, inovações e correções ao Portal de relatórios intranet da Claro/NET/Embratel. Projetos de Engenharia e RH.',
    technologies: ['PHP', 'CodeIgniter', 'jQuery', 'JavaScript', 'CSS3', 'HTML5', 'GIT', 'MySQL', 'Oracle', 'Bootstrap', 'ETL', 'Linux', 'Excel', 'BI', 'QlikView', 'Tableau']
  },
  {
    role: 'Desenvolvedor Web Front-end/Back-end',
    company: 'Microsistec',
    period: '2015',
    description: 'Criação de sites profissionais responsivos, consumo de dados da API, criação de integradores de sistemas.',
    technologies: ['PHP', 'Laravel', 'Limonade', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Fireworks', 'GIMP', 'SVN', 'MySQL', 'Bootstrap', 'Photoshop']
  },
  {
    role: 'Sócio',
    company: 'Startimob',
    period: '2013 - 2014',
    description: 'Empresa com rede social focada no mercado imobiliário. Participação em toda a criação do produto.',
    technologies: ['PHP', 'jQuery', 'CSS3', 'AJAX', 'Node.js', 'WebSocket', 'Redis', 'MySQL', 'HTML5', 'Amazon EC2', 'Bootstrap', 'LESS', 'SVN']
  },
  {
    role: 'Analista de Banco de Dados / Desenvolvedor PHP',
    company: 'Netagil',
    period: '2013',
    description: 'Criação e implementação de módulos ERP da empresa, NFE, Project. Manutenibilidade do ERP.',
    technologies: ['ASP', 'PHP', 'MySQL', 'Java', 'Oracle']
  },
  {
    role: 'Desenvolvedor Front-end',
    company: 'Plug7 - Inteligência Web',
    period: '2011 - 2012',
    description: 'Desenvolvimento de websites para o mercado imobiliário consumindo dados da API do sistema imobiliário.',
    technologies: ['PHP', 'ZEND', 'HTML5', 'CSS3', 'jQuery', 'JavaScript', 'Photoshop', 'Fireworks', 'MySQL', 'LESS', 'SVN']
  }
]

const education: EducationItem[] = [
  {
    degree: 'MBA Full Stack Developer',
    institution: 'Impacta Tecnologia',
    year: '2021',
    description: 'Engenheiro Full Stack. Habilidades em microsserviços, Java com Spring, SPAs, metodologias ágeis, CI/CD, Terraform, GitHub Actions, Jenkins, SonarQ, Docker e Kubernetes.'
  },
  {
    degree: 'Bootcamp - Semana Omnistack Full',
    institution: 'Rocketseat',
    year: '2020',
    description: 'JavaScript Full Stack'
  },
  {
    degree: 'Django 2.1 & Python',
    institution: 'The Ultimate Web Development Bootcamp',
    year: '2018',
    description: ''
  },
  {
    degree: 'Python for Data Science',
    institution: 'Datacamp',
    year: '2017',
    description: ''
  },
  {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'Universidade',
    year: '2011 - 2015',
    description: 'Gestão de TI, programação, algoritmos, matemática avançada, estatística, banco de dados, engenharia elétrica, ITIL, PMBOK, redes de computadores.'
  },
  {
    degree: 'Curso Técnico em Informática',
    institution: 'ETEC',
    year: '2012',
    description: ''
  }
]


export default async function Home({ params: { lang }} : { params: Params}) {
  const { t } = await useTranslation(lang);

  return (
    <>
      <Navbar 
        homeLabel={t('navbar.home')}
        expertiseLabel={t('navbar.expertise')}
        experienceLabel={t('navbar.experience')}
        educationLabel={t('education.title')}
        contactLabel={t('navbar.contact')}
      />
      
      <main className="main-content">
        <div className="container">
          <Hero 
            welcome={t('header.welcome')}
            role={t('header.role')}
            description={t('header.description')}
          />
          
          <Expertise 
            title={t('expertise.title')}
            skills={skills}
          />
          
          <Experience 
            title={t('experience.title')}
            experiences={experiences}
          />
          
          <Education 
            title={t('education.title')}
            items={education}
          />
          
          <Contact 
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
            nameLabel={t('contact.nameLabel')}
            emailLabel={t('contact.emailLabel')}
            messageLabel={t('contact.messageLabel')}
            buttonText={t('contact.buttonText')}
            successMessage={t('contact.successMessage')}
            instagramLabel={t('footer.instagram')}
            linkedinLabel={t('footer.linkedin')}
            githubLabel={t('footer.github')}
            twitterLabel={t('footer.twitter')}
          />
        </div>
      </main>
    </>
  )
}