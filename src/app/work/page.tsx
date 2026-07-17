import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Page() {
  const PROJECTS = [
    {
      name: 'Virtual Courses',
      description:
        'A polished LMS experience for course discovery, enrollment, lesson tracking, and progress analytics. Built to feel like a real learning product rather than a demo shell.',
      liveLink: 'https://example.com',
      previewImage:
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
      repoUrl: 'https://github.com/',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    },
    {
      name: 'TaskFlow Studio',
      description:
        'A collaborative task board with nested lists, team assignment views, and a lightweight analytics dashboard for staying organized.',
      liveLink: 'https://example.com',
      previewImage:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
      repoUrl: 'https://github.com/',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      name: 'Insight Portal',
      description:
        'A data-focused dashboard that turns raw tables into clear insights with search, filters, and a modern reporting layout.',
      liveLink: 'https://example.com',
      previewImage:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      repoUrl: 'https://github.com/',
      stack: ['Next.js', 'Chart.js', 'API integration'],
    },
  ]

  return (
    <div className="w600:px-[20px] w400:px-5 space-y-6 p-8">
      <div className="border-border shadow-shadow rounded-base border-4 bg-secondary-background p-6">
        <p className="text-sm font-bold uppercase tracking-[0.25em]">Selected work</p>
        <h1 className="mt-2 text-3xl font-black">Projects that feel real, usable, and ready to ship.</h1>
        <p className="mt-3 max-w-2xl text-base text-black/80">
          These projects were designed to reflect the kind of product thinking and engineering depth that fits an SDE intern role: clean UX, solid structure, and practical features.
        </p>
      </div>

      {PROJECTS.map((project, id) => {
        return (
          <div
            className="border-border shadow-shadow rounded-base border-4 bg-background p-6"
            key={id}
          >
            <div className="w800:w-full mx-auto w-full">
              <AspectRatio
                className="rounded-base shadow-shadow -bottom-[2px]! border-2 border-black"
                ratio={2 / 1}
              >
                <img
                  className="rounded-base h-full w-full object-cover"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

              <div className="mt-6">
                <h2 className="w700:text-2xl w450:text-xl text-3xl font-black">
                  {project.name}
                </h2>

                <p className="w450:text-base mt-4 text-lg text-black/80">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border-border rounded-base border-2 bg-secondary-background px-3 py-2 text-sm font-bold"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="w400:text-sm mt-8 grid grid-cols-2 gap-5 text-base">
                  <a
                    className="border-border text-main-foreground shadow-shadow rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center uppercase transition-all hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                  <a
                    className="border-border text-main-foreground shadow-shadow rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center uppercase transition-all hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
