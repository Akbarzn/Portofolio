"use client"

import { useEffect, useState } from "react"
import { Terminal, Shield, Database, Code2 } from "lucide-react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Backend Developer & Cyber Security Enthusiast"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    
    return () => clearInterval(timer)
  }, [])
  
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--cyber-green) 1px, transparent 1px), linear-gradient(90deg, var(--cyber-green) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating icons */}
      <div className="absolute top-20 left-10 text-primary/20 animate-pulse">
        <Shield className="w-16 h-16" />
      </div>
      <div className="absolute bottom-32 right-10 text-primary/20 animate-pulse delay-300">
        <Database className="w-12 h-12" />
      </div>
      <div className="absolute top-40 right-20 text-primary/20 animate-pulse delay-700">
        <Code2 className="w-10 h-10" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Terminal header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-8">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono text-muted-foreground">~/akbar/portfolio</span>
        </div>
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
          <span className="text-primary">{">"}</span> Akbar Zaelani{" "}
          <span className="text-primary">Nugroho</span>
        </h1>
        
        {/* Typing effect tagline */}
        <div className="h-12 flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl font-mono text-muted-foreground">
            {displayText}
            <span className={`inline-block w-3 h-6 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </p>
        </div>
        
        {/* Location */}
        <p className="text-muted-foreground mb-10 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Bandung, Indonesia
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="group px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,200,0.4)] hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-primary text-primary font-medium rounded-lg transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(0,255,200,0.2)]"
          >
            Contact Me
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
