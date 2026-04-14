"use client"

import { useEffect, useState } from "react"

const commands = [
  { prompt: "akbar@portfolio:~$", command: "whoami", output: "Akbar Zaelani Nugroho" },
  { prompt: "akbar@portfolio:~$", command: "cat about.txt", output: "Final-year Informatics student with experience in web development, REST API, and backend systems." },
  { prompt: "akbar@portfolio:~$", command: "ls skills/", output: "node.js  express.js  laravel  mysql  postgresql  prisma  jwt  rest-api  git" },
  { prompt: "akbar@portfolio:~$", command: "cat interests.txt", output: "Passionate about building secure, scalable backend systems and exploring cyber security." },
]

export function TerminalSection() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedCommands, setDisplayedCommands] = useState<typeof commands>([])
  const [isTyping, setIsTyping] = useState(true)
  const [typedCommand, setTypedCommand] = useState("")

  useEffect(() => {
    if (currentLine >= commands.length) {
      setIsTyping(false)
      return
    }

    const command = commands[currentLine]
    let charIndex = 0

    const typeCommand = setInterval(() => {
      if (charIndex <= command.command.length) {
        setTypedCommand(command.command.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeCommand)
        setTimeout(() => {
          setDisplayedCommands(prev => [...prev, command])
          setTypedCommand("")
          setCurrentLine(prev => prev + 1)
        }, 300)
      }
    }, 50)

    return () => clearInterval(typeCommand)
  }, [currentLine])

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          <span className="text-primary">{">"}</span> About Me
        </h2>
        <p className="text-muted-foreground mb-10">Get to know me through this interactive terminal.</p>
        
        {/* Terminal Window */}
        <div className="relative bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-4 text-sm font-mono text-muted-foreground">terminal@akbar-portfolio</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base min-h-[300px] bg-background/50 relative scanlines">
            {/* Displayed commands */}
            {displayedCommands.map((cmd, index) => (
              <div key={index} className="mb-4">
                <div className="flex gap-2 text-muted-foreground">
                  <span className="text-primary">{cmd.prompt}</span>
                  <span className="text-foreground">{cmd.command}</span>
                </div>
                <div className="text-accent mt-1 pl-4">{cmd.output}</div>
              </div>
            ))}
            
            {/* Current typing line */}
            {isTyping && currentLine < commands.length && (
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-primary">{commands[currentLine].prompt}</span>
                <span className="text-foreground">
                  {typedCommand}
                  <span className="inline-block w-2 h-4 bg-primary ml-0.5 cursor-blink" />
                </span>
              </div>
            )}
            
            {/* Final cursor */}
            {!isTyping && (
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-primary">akbar@portfolio:~$</span>
                <span className="inline-block w-2 h-4 bg-primary cursor-blink" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
