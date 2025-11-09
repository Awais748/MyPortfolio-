import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "A fully responsive Netflix-inspired streaming platform built with React and Firebase, featuring secure authentication, protected routes, and video playback for a production-grade experience.",
    image: "/projects/netflix.png",
    tags: ["React", "Firebase", "JavaScript", "CSS"],
    demoUrl: "https://netflix-clone-six-lake.vercel.app/",
    githubUrl: "https://github.com/Awais748/netflix-clone",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Fully responsive portfolio with a clean design, built as a frontend practice project.",
    image: "/projects/project-2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://portfolioweb-coral-five.vercel.app/",
    githubUrl: "https://github.com/Awais748/Portfolio-.git",
  },
  {
    id: 3,
    title: "PayPal Landing Page",
    description: "Responsive PayPal-inspired landing page (practice project)",
    image: "/projects/paypal.png",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demoUrl: "https://paypal-landing-page-eight.vercel.app/",
    githubUrl: "https://github.com/Awais748/paypal-landing-page-.git",
  },
  {
    id: 4,
    title: "Tic Tac Toe in React",
    description:
      "A modern, interactive Tic Tac Toe game built with React featuring dynamic gameplay and a clean dark UI.",
    image: "/projects/tic-tac.png",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://tictactoe-game-ruddy.vercel.app/",
    githubUrl: "https://github.com/Awais748/Tic-Tac-Toe",
  },
  {
    id: 5,
    title: "Monarachy Landing Page",
    description:
      "Modern, fully responsive landing page with a clean, seamless design",
    image: "/projects/project-1.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "https://monarchy-nine.vercel.app/",
    githubUrl: "https://github.com/Awais748/MONARCHY.git",
  },
  {
    id: 6,
    title: "Digital Clock",
    description:
      "A real-time digital clock built with React and CSS, featuring live updates, a sleek dark theme, and smooth transitions for a modern UI experience.",
    image: "/projects/digitalclock.png",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://digital-clock-amber-tau.vercel.app/",
    githubUrl: "https://github.com/Awais748/Digital-clock",
  },
  {
    id: 7,
    title: "To-Do List App",
    description:
      "A responsive To-Do List app built with React and Tailwind CSS, featuring easy task add, complete, and delete options.",
    image: "/projects/todolist.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://todo-list-five-xi-85.vercel.app/",
    githubUrl: "https://github.com/Awais748/Todo-list.git",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          I started my web development journey and have worked on several
          practice projects focusing on responsive design, clean code, and
          improving my skills step by step.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/Awais748"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center gap-2 py-3 px-6 bg-primary text-white shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
