"use client"

import { Briefcase, GraduationCap, Users } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Web Developer Intern",
    company: "PT Dirgantara Indonesia",
    period: "2025",
    description: "Built a Project Management System using Laravel (MVC architecture) and MySQL. Collaborated with cross-functional teams to deliver a robust internal tool for tracking and managing company projects.",
    tech: ["Laravel", "MySQL", "MVC", "Team Collaboration"],
    icon: Briefcase,
  },
  {
    type: "work",
    title: "MSIB - Full Stack Developer",
    company: "PT Stechoq Robotika Indonesia",
    period: "2024",
    description: "Developed a comprehensive Material Supply Management system. Built the frontend with Vue.js and backend with Node.js, Express.js, and Prisma ORM for database management.",
    tech: ["Vue.js", "Node.js", "Express.js", "MySQL", "Prisma ORM"],
    icon: Briefcase,
  },
  {
    type: "organization",
    title: "Creative Coordinator",
    company: "Informatics Student Association",
    period: "2023 - 2024",
    description: "Led the design team and managed digital content creation for the association. Coordinated creative projects and mentored junior members in design tools and techniques.",
    tech: ["Leadership", "Design", "Team Management", "Content Creation"],
    icon: Users,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          <span className="text-primary">{">"}</span> Experience
        </h2>
        <p className="text-muted-foreground mb-12">
          Professional experience and organizational involvement.
        </p>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 -translate-x-1/2">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                </div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.1)]">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Tech/Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
