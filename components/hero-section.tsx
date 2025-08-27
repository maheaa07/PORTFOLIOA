"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter, Instagram, Code2, Terminal } from "lucide-react"

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["FRONTEND DEVELOPER", "AI/ML ENTHUSIAST", "HACKATHON WINNER"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/amisha20223", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amisha-singh-69a790230/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/maheaa_07", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/maheaa_07", label: "Instagram" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,166,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(35,134,54,0.05),transparent_50%)]" />

        {/* GitHub contribution-style dots */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary/60 rounded-sm animate-pulse"></div>
        <div className="absolute top-32 left-32 w-2 h-2 bg-accent/50 rounded-sm animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-primary/40 rounded-sm animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-accent/60 rounded-sm animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary/50 rounded-sm animate-ping"></div>
        <div className="absolute top-60 right-60 w-2 h-2 bg-accent/40 rounded-sm animate-pulse"></div>

        {/* Terminal-style grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(48,54,61,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(48,54,61,0.15)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Code-like floating elements */}
        <div className="absolute top-1/4 left-10 opacity-20 text-accent font-mono text-sm">
          <Code2 className="w-6 h-6 animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-20 text-primary font-mono text-sm">
          <Terminal className="w-6 h-6 animate-bounce" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="text-accent font-mono text-sm mb-2 opacity-80">amisha@portfolio:~$ whoami</div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                Hi There! <span className="inline-block animate-bounce text-accent">👋🏻</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                I'm{" "}
                <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded border border-accent/20">
                  Amisha Singh
                </span>
              </h2>
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-accent font-mono text-sm mr-2">&gt;</span>
                <span className="text-xl md:text-2xl font-semibold text-primary typewriter font-mono">
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-4 mb-8 backdrop-blur-sm">
              <p className="text-lg text-muted-foreground max-w-2xl">
                <span className="text-accent font-mono">class</span> <span className="text-primary">AmishaSingh</span>{" "}
                {"{"}
                <br />
                <span className="ml-4 text-muted-foreground">// B.Tech ECE Graduate from KIET (70%)</span>
                <br />
                <span className="ml-4 text-accent font-mono">skills:</span>{" "}
                <span className="text-foreground">["React", "NextJS", "TypeScript", "AI/ML"]</span>
                <br />
                <span className="ml-4 text-accent font-mono">achievements:</span>{" "}
                <span className="text-primary">["Graph-Ethon 2024 🥈", "KICCS-D-HACK 🥈"]</span>
                <br />
                <span className="ml-4 text-accent font-mono">currentRole:</span>{" "}
                <span className="text-foreground">"Frontend Developer Intern @ Jobsphere"</span>
                <br />
                {"}"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="github-button github-glow bg-primary hover:bg-primary/90 border border-primary/20"
              >
                <Code2 className="w-4 h-4 mr-2" />
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="github-button border-border hover:bg-card bg-transparent hover:border-accent/50"
              >
                <Terminal className="w-4 h-4 mr-2" />
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="github-button hover:bg-card hover:text-accent transition-all duration-300 border border-transparent hover:border-accent/20"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-card via-muted to-card github-card-hover flex items-center justify-center shadow-2xl border border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
                <img
                  src="/amisha-singh-profile.jpg"
                  alt="Amisha Singh - Frontend Developer"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-xl object-cover border-2 border-accent/30 shadow-xl relative z-10"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center animate-bounce shadow-lg border border-border backdrop-blur-sm">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center animate-pulse shadow-lg border border-border backdrop-blur-sm">
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-primary/80 rounded-lg flex items-center justify-center animate-ping border border-border backdrop-blur-sm">
                <span className="text-sm">💻</span>
              </div>

              <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-3 py-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground font-mono">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-full p-2">
            <ArrowDown className="h-6 w-6 text-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
