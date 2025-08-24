"use client"
import { useState, useEffect, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Bot, Smartphone, Zap, Star, MessageSquare, Github, Search, Eye, Code, Sparkles, ArrowUpRight, Heart } from "lucide-react"
import Link from "next/link"
import { projectsData } from "@/data/projects"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedStatus, setSelectedStatus] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getIcon = (type: string) => {
    const iconMap = {
      "Full-Stack Application": <Globe className="h-5 w-5" />,
      "AI/ML Application": <Bot className="h-5 w-5" />,
      "E-commerce Platform": <Smartphone className="h-5 w-5" />,
      "Browser Extension": <Zap className="h-5 w-5" />,
      "Automation Tool": <MessageSquare className="h-5 w-5" />,
      "Web Application": <Globe className="h-5 w-5" />,
      "Mobile App": <Smartphone className="h-5 w-5" />,
      "API": <Code className="h-5 w-5" />,
      "Library": <Sparkles className="h-5 w-5" />
    }
    return iconMap[type as keyof typeof iconMap] || <Globe className="h-5 w-5" />
  }

  const getStatusColor = (status: string) => {
    const statusMap = {
      "Live": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "In Development": "bg-blue-100 text-blue-700 border-blue-200",
      "Completed": "bg-purple-100 text-purple-700 border-purple-200",
      "Published": "bg-amber-100 text-amber-700 border-amber-200"
    }
    return statusMap[status as keyof typeof statusMap] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  const projects = Object.values(projectsData)

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === "All" || project.type === selectedCategory
      const matchesStatus = selectedStatus === "All" || project.status === selectedStatus
      const matchesSearch = searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))

      return matchesCategory && matchesStatus && matchesSearch
    })
  }, [projects, selectedCategory, selectedStatus, searchTerm])

  const toggleFavorite = (projectId: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(projectId)) {
      newFavorites.delete(projectId)
    } else {
      newFavorites.add(projectId)
    }
    setFavorites(newFavorites)
  }

  const getProjectStats = () => {
    const liveProjects = projects.filter(p => p.status === "Live").length
    const totalTech = new Set(projects.flatMap(p => p.tech)).size
    return { total: projects.length, live: liveProjects, technologies: totalTech }
  }

  const stats = getProjectStats()

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header with Stats */}
      <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 font-serif bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Innovative solutions built with cutting-edge technologies and scalable architectures.
              Each project represents a unique challenge and creative solution.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 min-w-[150px]">
                <div className="text-2xl font-bold text-primary">{stats.total}</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 min-w-[150px]">
                <div className="text-2xl font-bold text-emerald-500">{stats.live}</div>
                <div className="text-sm text-muted-foreground">Live Projects</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 min-w-[150px]">
                <div className="text-2xl font-bold text-blue-500">{stats.technologies}</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transform hover:scale-[1.02] ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                style={{ animationDelay: "10ms" }}
              >
                {/* Project Preview */}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <div className="h-52 bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden group-hover:h-56 transition-all duration-500">
                    <iframe
                      src={project.liveUrl}
                      className="w-full h-full scale-50 origin-top-left transform group-hover:scale-55 transition-transform duration-500"
                      style={{ width: "200%", height: "200%" }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    {/* Overlay Controls */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <Link href={`/projects/${project.id}`}>
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white hover:text-black">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </Link>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white hover:text-black">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Status and Favorite */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge className={`${getStatusColor(project.status)} border shadow-sm`}>
                        <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                        {project.status}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleFavorite(project.id)}
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 h-8 w-8"
                      >
                        <Heart className={`w-4 h-4 ${favorites.has(project.id) ? 'fill-current text-red-400' : ''}`} />
                      </Button>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="p-2 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {getIcon(project.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-foreground font-serif group-hover:text-primary transition-colors line-clamp-1">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{project.type}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">{project.description}</p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-accent" />
                      <h4 className="font-semibold text-foreground text-sm">Key Features</h4>
                    </div>
                    <div className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <div key={i} className="flex items-start space-x-2 group/item">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="text-xs text-muted-foreground leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                      {project.highlights.length > 3 && (
                        <div className="text-xs text-primary cursor-pointer hover:underline">
                          +{project.highlights.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link href={`/projects/${project.id}`} className="flex-1">
                      <Button className="w-full group text-sm font-medium hover:shadow-md transition-all duration-300">
                        View Details
                        <ArrowUpRight className="ml-2 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                    </Link>

                    <div className="flex gap-1">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="bg-transparent hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 p-2">
                            <Globe className="h-3 w-3" />
                          </Button>
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="bg-transparent hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 p-2">
                            <Github className="h-3 w-3" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); setSelectedStatus("All"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}