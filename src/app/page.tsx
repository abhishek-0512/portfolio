import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'
import { ArrowRight, Code2, GraduationCap, Rocket, Sparkles } from 'lucide-react'

export default function Home() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:abhishekgangwar9876@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/',
    },
  ]

  const skills = [
    'React & Next.js',
    'TypeScript',
    'Node.js & APIs',
    'Tailwind CSS',
    'SQL & databases',
    'Problem solving',
  ]

  const highlights = [
    {
      title: 'Full-stack focus',
      text: 'I enjoy building polished interfaces and reliable backend flows end to end.',
      icon: Code2,
    },
    {
      title: 'Fast learner',
      text: 'I pick up new tools quickly and like turning ideas into shipped features.',
      icon: Rocket,
    },
    {
      title: 'Strong fundamentals',
      text: 'Clean architecture, readable code, and thoughtful product decisions matter to me.',
      icon: GraduationCap,
    },
  ]

  return (
    <div className="w600:p-[30px] w400:p-5 w400:text-base p-8 text-lg leading-[1.7]">
      <section className="border-border shadow-shadow rounded-base border-4 bg-secondary-background p-6">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-black/80">
          <Sparkles size={16} />
          Aspiring SDE Intern
        </div>
        <h1 className="w450:text-3xl mt-4 text-4xl font-black tracking-tight">
          Hi, I'm Abhishek. I build thoughtful software with curiosity and care.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-black/80">
          I’m a software-focused developer who enjoys turning ideas into practical
          products. My work spans clean UI experiences, modern web apps, and
          thoughtful engineering choices that make features feel effortless.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/work"
            className="border-border text-main-foreground shadow-shadow rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY inline-flex items-center gap-2 border-2 px-4 py-2 font-bold uppercase transition-all hover:shadow-none"
          >
            View projects <ArrowRight size={16} />
          </a>
          <a
            href="mailto:abhishekgangwar9876@gmail.com"
            className="border-border text-foreground shadow-shadow rounded-base bg-background hover:translate-x-boxShadowX hover:translate-y-boxShadowY inline-flex items-center gap-2 border-2 px-4 py-2 font-bold uppercase transition-all hover:shadow-none"
          >
            Let’s connect
          </a>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="border-border shadow-shadow rounded-base border-2 bg-background p-4"
            >
              <div className="mb-3 inline-flex rounded-full border-2 border-black bg-main p-2">
                <Icon size={16} />
              </div>
              <h2 className="text-lg font-black">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-black/80">{item.text}</p>
            </div>
          )
        })}
      </section>

      <section className="mt-6 border-border shadow-shadow rounded-base border-4 bg-background p-6">
        <h2 className="text-2xl font-black">Core skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border-border rounded-base border-2 bg-secondary-background px-3 py-2 text-sm font-bold"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-6 border-border shadow-shadow rounded-base border-4 bg-background p-6">
        <h2 className="text-2xl font-black">What I’m aiming for</h2>
        <p className="mt-3 text-base text-black/80">
          I’m looking for an SDE internship where I can contribute to real products,
          learn from strong engineering teams, and grow through hands-on delivery.
        </p>
      </section>

      <div className="mt-6 flex w-full flex-wrap items-center gap-6">
        {links.map((link, id) => {
          const Icon = link.icon
          return (
            <a
              target="_blank"
              rel="noreferrer"
              key={id}
              href={link.href}
              className="rounded-base border-2 border-black bg-background p-2 transition-transform hover:-translate-y-1"
            >
              <Icon title="" size={22} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
