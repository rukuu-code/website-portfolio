import React, { useEffect, useState, useRef } from 'react'
import { FaTools, FaHeadset, FaCode, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { FaRobot, FaShareNodes } from 'react-icons/fa6'
import { SiPython, SiDiscord } from 'react-icons/si'
import { MdSupportAgent } from 'react-icons/md'
import { SiNodedotjs, SiGit, SiReact } from 'react-icons/si'
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Analytics } from '@vercel/analytics/react';
import Lanyard from './components/Lanyard'

const NAV_LINKS = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' },
]

const PROJECTS = [
  {
    name: 'Weather App Dashboard',
    path: '~/projects/weather-app',
    description:
      'A weather dashboard that shows live conditions and a 5-day forecast for any city, with a dark, animated background that actually reacts to the weather — clouds drift, rain falls, snow accumulates, matching what\u2019s really happening outside.',
    tags: ['React', 'API Integration'],
  },
  {
    name: 'Nocta Bot',
    path: '~/projects/nocta-bot',
    description:
      'A custom bot for managing and moderating Discord communities — handles routine server tasks so admins don\u2019t have to.',
    tags: ['Python', 'Discord'],
  },
  {
    name: 'YouTube / TikTok Automation',
    path: '~/projects/content-automation',
    description:
      'A workflow that automates repetitive parts of short-form content publishing, cutting the manual steps between edit and upload.',
    tags: ['Automation', 'SMM'],
  },
  {
    name: 'Web Designer / HTML',
    path: '~/projects/web-builds',
    description:
      'Hand-built HTML sites and layouts for small clients — clean markup, no bloat, fast to load.',
    tags: ['Web Development', 'HTML'],
  },
  {
    name: 'Google Workspace Management',
    path: '~/projects/google-workspace-management',
    description:
      'Managing Google Workspace (Docs, Sheets, Slides, Drive) to organize files, automate routine tasks, and keep teams working efficiently across shared documents.',
    tags: ['Workspace Management'],
  },
]

const SKILLS = [
  { label: 'Python', icon: SiPython },
  { label: 'Automation', icon: FaRobot },
  { label: 'Troubleshooting', icon: FaTools },
  { label: 'SMM', icon: FaShareNodes },
  { label: 'Technical Assistance', icon: MdSupportAgent },
  { label: 'Virtual Assistance', icon: FaHeadset },
  { label: 'Web Development', icon: FaCode },
  { label: 'Discord', icon: SiDiscord },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'Git', icon: SiGit },
  { label: 'HTML', icon: FaHtml5 },
  { label: 'CSS', icon: FaCss3Alt },
  { label: 'JSX', icon: SiReact },
]

const TECH_GROUPS = [
  { label: 'AI Tools', items: ['ChatGPT', 'Claude', 'Gemini', 'ElevenLabs', 'Opusclip'] },
  { label: 'Productivity', items: ['Google Workspace', 'Microsoft 365'] },
  { label: 'Communication', items: ['Zoom', 'Google Meet', 'Discord', 'Cal'] },
  { label: 'Project Management', items: ['Trello', 'Canva', 'Google Workspace'] },
  { label: 'Design / Social', items: ['Canva', 'CapCut', 'Sejda'] },
]

const STRENGTHS = [
  'Fast learner',
  'Problem-solving mindset',
  'Detail-oriented',
  'Willing to learn new software and technologies',
  'Comfortable learning independently',
  'Interested in automation and improving repetitive workflows',
]

function useTypedLine(text, speed = 42, startDelay = 300) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let interval
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { output, done }
}

function SectionMark({ children }) {
  return (
    <p className="font-mono text-sm text-amber mb-4 select-none">// {children}</p>
    
  )
}

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(el)
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

function Reveal({ children, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur border-b border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight text-ink">
          jason<span className="text-amber">.</span>cruz
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-muted">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="mailto:cruzjasonn.7@gmail.com"
            className="text-ink border border-line rounded px-3 py-1.5 hover:border-amber hover:text-amber transition-colors"
          >
            say hello
          </a>
        </nav>

        <button
          className="md:hidden font-mono text-sm text-ink border border-line rounded px-3 py-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'close' : 'menu'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 font-mono text-sm text-muted">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href="mailto:cruzjasonn.7@gmail.com" className="text-amber">
            say hello
          </a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  const { output, done } = useTypedLine('IT Support & Virtual Assistant', 38, 400)

  return (
    <section id="top" className="max-w-5xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="max-w-content flex-1">
          <div className="font-mono text-sm text-muted mb-6 leading-relaxed">
            <p>
              <span className="text-amber">$</span> whoami
            </p>
            <p className="mt-1 text-ink">
              {output}
              <span className={done ? 'opacity-0' : 'inline-block w-2 bg-amber ml-0.5 animate-pulse'}>&nbsp;</span>
            </p>
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-ink">
            Jason Cruz
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-[560px]">
            I build small tools, automate the boring parts of a workflow, and keep systems
            running for people who&rsquo;d rather focus on their work than their tech stack.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="mailto:cruzjasonn.7@gmail.com"
              className="font-mono text-sm bg-amber text-bg font-medium rounded px-5 py-3 hover:bg-[#f2b45c] transition-colors"
            >
              Email me
            </a>
            <a
              href="#projects"
              className="font-mono text-sm border border-line text-ink rounded px-5 py-3 hover:border-amber transition-colors"
            >
              View projects
            </a>
                    </div>
        </div>

        <div className="flex-1 w-full h-[700px] border border-line rounded-lg overflow-hidden">
  <Lanyard
    position={[0, 0, 25]}
    gravity={[0, -40, 0]}
    fov={25}
    frontImage="/my-photo.jpg"
    imageFit="cover"
    lanyardWidth={1.2}
  />
</div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
        <div>
          <SectionMark>about</SectionMark>
        </div>
        <div className="max-w-content">
          <p className="text-lg md:text-xl leading-relaxed text-ink/90">
            I&rsquo;m a tech-savvy, detail-oriented virtual assistant with hands-on
            experience across python, automation, discord server management, web development,
            social media management, and general technical support.
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
            I pick up new tools quickly and enjoy the problem-solving part of the job &mdash;
            figuring out where a process is wasting time, then building something small that
            fixes it. My focus is on keeping clients organized, trimming repetitive work, and
            following through reliably on the tasks that matter.
          </p>

          <div className="mt-10 pt-8 border-t border-line">
            <p className="font-mono text-xs text-muted mb-2">Education</p>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <p className="text-ink font-medium">
                University of the Cordilleras
            </p>
            </div>
            <p className="text-muted font-medium mt-3">
              Bachelor of Science in Information Technology
            </p>
            </div>
          </div>
        </Reveal>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
        <div>
          <SectionMark>projects</SectionMark>
        </div>
        <div className="flex flex-col">
          {PROJECTS.map((p, idx) => (
            <div
              key={p.name}
              className={`group py-7 ${idx !== 0 ? 'border-t border-line' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3 className="font-display text-xl md:text-2xl text-ink group-hover:text-amber transition-colors">
                  {p.name}
                </h3>
                <p className="font-mono text-xs text-muted">{p.path}</p>
              </div>
              <p className="mt-3 text-muted leading-relaxed max-w-content">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-ink/80 border border-line rounded px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
        <div>
          <SectionMark>skills</SectionMark>
        </div>
        <div>
          <div className="flex flex-wrap gap-2.5">
           {SKILLS.map((s) => {
            const Icon = s.icon
             return (
      <span
        key={s.label}
        className="font-mono text-sm text-ink border border-line rounded px-3 py-1.5 flex items-center gap-2 hover:border-amber hover:text-amber transition-colors"
      >
        <Icon size={14} />
        {s.label}
      </span>
          )
         })}
        </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {TECH_GROUPS.map((g) => (
              <div key={g.label}>
                <p className="font-mono text-xs text-muted mb-2.5">{g.label}</p>
                <p className="text-ink/90 leading-relaxed">{g.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Strengths() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 border-t border-line">
       <Reveal className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
        <div>
          <SectionMark>strengths</SectionMark>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {STRENGTHS.map((s) => (
            <p key={s} className="text-ink/90 leading-relaxed flex gap-3">
              <span className="text-amber font-mono">&middot;</span>
              <span>{s}</span>
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-line">
      <Reveal className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
        <div>
          <SectionMark>contact</SectionMark>
        </div>
        <div className="max-w-content">
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            Have a task that needs automating, or a site that needs building?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            I reply quickly and I&rsquo;m comfortable getting started fast.
          </p>

          <div className="mt-8 flex flex-col gap-3 font-mono text-sm">
            <a href="mailto:cruzjasonn.7@gmail.com" className="text-ink hover:text-amber transition-colors w-fit">
              cruzjasonn.7@gmail.com
            </a>
            <a href="tel:+639630224096" className="text-ink hover:text-amber transition-colors w-fit">
              +63 963 022 4096
            </a>
            <div className="flex items-center gap-5 mt-2">
            <a
            href="https://www.linkedin.com/in/cruzjasonn/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink hover:text-amber transition-colors w-fit"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://t.me/azqwxc"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="text-ink hover:text-amber transition-colors w-fit"
          >
            <FaTelegram className="text-2xl" />
          </a>
          <a
            href="https://github.com/rukuu-code"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink hover:text-amber transition-colors w-fit"
          >
            <FaGithub className="text-2xl" />
          </a>
          </div>
          </div>

          <p className="mt-10 font-mono text-xs text-muted">English &middot; Filipino</p>
        </div>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 md:px-10 py-8 border-t border-line">
      <p className="font-mono text-xs text-muted">
        &copy; {new Date().getFullYear()} Jason Cruz
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
