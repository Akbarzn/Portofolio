"use client"

import { ExternalLink, Github, QrCode, Package, Globe } from "lucide-react"

const projects = [
  {
    title: "QR Code Ordering System",
    description: "A QR code-based meatball ordering system that allows customers to scan and order directly from their table. Built with modern web technologies.",
    tech: ["Node.js", "Express.js", "MySQL", "REST API"],
    icon: QrCode,
    featured: true,
  },
  {
    title: "Material Supply Management",
    description: "Comprehensive system for managing material supply and inventory. Features real-time tracking, reporting, and user management with role-based access.",
    tech: ["Vue.js", "Node.js", "Express.js", "Prisma ORM", "MySQL"],
    icon: Package,
    featured: true,
  },
  {
    title: "Informatics Study Program Website",
    description: "Official website for the Informatics Study Program featuring course information, faculty profiles, and student resources. Currently in development.",
    tech: ["Laravel", "MySQL", "MVC Architecture"],
    icon: Globe,
    featured: false,
    status: "In Progress",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          <span className="text-primary">{">"}</span> Projects
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Featured projects showcasing my backend development skills and problem-solving abilities.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.1)] ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Project status badge */}
              {project.status && (
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-mono bg-accent/20 text-accent rounded-full">
                  {project.status}
                </span>
              )}
              
              {/* Icon */}
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                  Code
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
