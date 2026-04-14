"use client"

import { Database, Server, Code, Shield, GitBranch, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Laravel", "PHP"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "API & Auth",
    icon: Shield,
    skills: ["RESTful API", "JWT Authentication", "API Security"],
  },
  {
    title: "Frontend",
    icon: Code,
    skills: ["Vue.js", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Postman", "VS Code", "Linux"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          <span className="text-primary">{">"}</span> Skills & Technologies
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Tools and technologies I use to build secure, scalable backend systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.1)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-mono bg-secondary text-secondary-foreground rounded-full border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
