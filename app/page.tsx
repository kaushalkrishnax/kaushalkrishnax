"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import {
  Mail,
  ExternalLink,
  ArrowRight,
  Code2,
  Download,
  Zap,
  Clock,
  Quote
} from "lucide-react"
import Link from "next/link"

import { user } from "@/data/user";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  function downloadResume(driveLink: string) {
    const fileIdMatch = driveLink.match(/\/d\/(.+?)\//);
    if (!fileIdMatch) {
      console.error("Invalid Google Drive link");
      return;
    }

    const fileId = fileIdMatch[1];
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Kaushal_Krishna_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div
          className="absolute inset-0 opacity-10 transition-all duration-500 hidden lg:block"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59,130,246,0.15), transparent 50%)`,
          }}
        />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Side - Main Content */}
            <div className={`col-span-1 lg:col-span-7 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
              <div className="flex justify-start mb-4">
                <Badge
                  variant="outline"
                  className="text-sm sm:text-lg font-semibold py-2 px-6 bg-gradient-to-r from-background via-muted/50 to-background border-2 border-primary/30 shadow-lg"
                >
                  <Zap className="w-5 h-5 mr-3 text-primary animate-pulse" />
                  {user.title}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground font-serif leading-tight mb-4">
                Kaushal&nbsp;
                <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Krishna
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
                {user.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="group font-semibold w-full sm:w-auto px-6 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/20">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="group font-semibold w-full sm:w-auto px-6 py-3 text-lg bg-transparent hover:scale-105 transition-all duration-300">
                    Get In Touch
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Availability */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm text-muted-foreground pt-4 gap-2 sm:gap-6">
                <div className="flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Available for new projects
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })} IST
                </div>
              </div>
            </div>

            {/* Right Side - Avatar & Stats */}
            <div className={`col-span-1 lg:col-span-5 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
              <div className="flex flex-col items-center relative gap-6">
                <div className="text-center mb-8">
                  <div className="relative group">
                    <Avatar className="w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 mx-auto ring-4 ring-primary/20 shadow-2xl transition-all duration-500 group-hover:ring-primary/40 group-hover:scale-105">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/132030841?s=400&v=4" alt="Kaushal Krishna" />
                      <AvatarFallback className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent text-white">
                        KK
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-5 right-5 w-10 sm:w-12 h-10 sm:h-12 bg-green-500 rounded-full border-4 sm:border-6 border-background flex items-center justify-center shadow-lg">
                      <div className="w-4 sm:w-6 h-4 sm:h-6 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-4">
                  {user.socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="icon"
                      asChild
                      className={`hover:scale-110 transition-all p-3 ${link.color}`}
                    >
                      <Link href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                      </Link>
                    </Button>
                  ))}
                  {user.email && (
                    <Button variant="ghost" size="icon" className="hover:text-zinc-900 hover:scale-110 transition-all p-3" asChild>
                      <Link href={`mailto:${user.email}`}><Mail className="h-6 w-6" /></Link>
                    </Button>
                  )}
                  <Button variant="outline" className="ml-0 sm:ml-4 hover:scale-105 transition-all duration-300 w-full sm:w-auto" onClick={() => downloadResume(user.resumeLink)}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Enhanced About Section - Refined Layout */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-muted/20 via-background to-primary/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Part 1: My Story & Narrative */}
          <div>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
                My Story
              </h2>
              <p className="text-xl font-medium text-primary max-w-3xl mx-auto leading-relaxed">
                A journey from a single line of code to leading high-impact technology teams.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-center">

              <p className="text-lg text-muted-foreground leading-relaxed">
                {user.about.story}
              </p>

              <blockquote className="border-l-4 border-primary/50 inline-block text-left p-4 my-4 bg-muted/40 rounded-r-lg">
                <p className="text-xl font-serif italic text-foreground">
                  <Quote className="inline-block mr-2 opacity-70" size={20} />{user.about.quote}<Quote className="inline-block ml-2 opacity-70" size={20} />
                </p>
              </blockquote>
            </div>
          </div>

          {/* Part 2: Details - A perfectly aligned 2-column grid for Stats and Skills */}
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Column 1: Stats */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">By The Numbers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.about.stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group border-2 hover:border-primary/20 relative overflow-hidden sm:[&:last-child:nth-child(odd)]:col-span-2"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    <div className="relative">
                      <div className={`mb-4 group-hover:scale-105 transition-transform duration-300 ${stat.iconColor}`}>
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Column 2: Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Expertise Areas</h3>
              <div className="grid gap-4">
                {Object.entries(user.about.skills).map(([category, skill], index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card/50 rounded-xl border hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium text-foreground">{category}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {skill.technologies.length} Technologies
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROFESSIONAL JOURNEY SECTION --- */}
      <section className="py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">Building innovative solutions across different domains</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.about.experience.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 group relative overflow-hidden h-full flex flex-col"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative flex-1 flex flex-col">
                  <div>
                    <div className={`p-3 rounded-xl text-white bg-gradient-to-r ${exp.color} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                      {exp.icon}
                    </div>
                    <div className="space-y-2 mb-4">
                      <h3 className="text-xl font-semibold text-foreground font-serif">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-auto pt-4">{exp.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Live applications built with cutting-edge technologies and real-world impact
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {user.featuredProjects.map((project, index) => (
              <Link key={index} href={project.href}>
                <Card
                  className="group cursor-pointer bg-card rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 relative"
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  {/* Live Preview */}
                  {project.liveUrl && (
                    <div className="h-48 relative overflow-hidden">
                      <iframe
                        src={project.liveUrl}
                        className="w-full h-full scale-50 origin-top-left transform"
                        style={{ width: "200%", height: "200%" }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className={`absolute top-4 right-4 transition-all duration-300 ${activeProject === index ? 'opacity-100 scale-110' : 'opacity-0'}`}>
                        <div className="bg-primary/50 backdrop-blur-sm rounded-full p-2">
                          <ExternalLink className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                              <span className="font-bold">{value}</span> <span className="opacity-75 capitalize">{key}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {!project.liveUrl && (
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <Code2 className="h-16 w-16 text-white opacity-80" />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-serif group-hover:text-zinc-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm text-muted-foreground">View Details</span>
                      <ArrowRight className={`h-4 w-4 text-primary transition-transform group-hover:translate-x-1 ${activeProject === index ? 'translate-x-1' : ''}`} />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group bg-transparent hover:scale-105 transition-all duration-300 px-8 py-4">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Quick Stats Footer */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {user.quickStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className={`w-6 h-6 mx-auto ${stat.color}`}>{stat.icon}</div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}