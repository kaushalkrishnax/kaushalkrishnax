"use client"

export const runtime = 'edge';

import React, { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Copy, CheckCircle, Star, Calendar, Clock, Users } from "lucide-react"
import Link from "next/link"
import { projectsData } from "@/data/projects"

export default function Project({ params }: { params: { slug: string } }) {
  const resolvedParams = React.use(params as any);
  const project = projectsData[resolvedParams?.slug as keyof typeof projectsData];
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!project) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      case "In Development":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Completed":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "Published":
        return "bg-amber-100 text-amber-700 border-amber-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const copyProjectUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className={`min-h-screen bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center py-20`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Navigation */}
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            <Link href="/projects">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Project Info */}
            <div className={`text-white space-y-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              {/* Status and Period */}
              <div className="flex items-center flex-wrap gap-3 mb-6">
                <Badge className={`${getStatusColor(project.status)} border px-4 py-2 font-medium shadow-sm`}>
                  <span className="mr-1">{project.status === "Live" ? "🟢" : project.status === "In Development" ? "🔵" : "⚪"}</span>
                  {project.status}
                </Badge>
                <div className="flex items-center text-white/80 text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Calendar className="w-3 h-3 mr-1" />
                  {project.period}
                </div>
                <Button
                  onClick={copyProjectUrl}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10 p-2"
                >
                  {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              {/* Title with animated typing effect */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-lg font-medium">{project.type}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight font-serif bg-gradient-to-r from-white via-white to-white/80 bg-clip-text">
                  {project.title}
                </h1>
              </div>

              <p className="text-xl leading-relaxed opacity-90 mb-8 max-w-2xl">
                {project.description}
              </p>

              {/* Tech Stack with enhanced styling */}
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-white/60 font-medium">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {project.links.live !== "#" && (
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      View Live Project
                    </Button>
                  </Link>
                )}
                {project.links.github !== "#" && (
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent hover:scale-105 transition-all duration-300 backdrop-blur-sm group"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      View Source Code
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Side - Enhanced Phone Preview */}
            {project.links.live !== "#" && (
              <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                  <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl hover:shadow-3xl transition-all duration-500">
                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">

                      {/* Loading shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>

                      {/* Website Preview */}
                      <iframe
                        src={project.links.live}
                        className="w-full h-full border-0 rounded-[2.5rem]"
                        title={`${project.title} Live Preview`}
                        loading="lazy"
                        scrolling="no"
                        allowFullScreen
                        frameBorder="0"
                      />
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-serif">Project Overview</h2>
                </div>
                <div className="bg-card border border-border/50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-serif">Key Features</h2>
                </div>
                <div className="grid gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-card border border-border/50 rounded-xl hover:shadow-md hover:border-primary/20 transition-all duration-300 group/item"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground font-serif">Challenges</h3>
                  </div>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="p-6 border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-transparent rounded-r-xl shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground font-serif">Solutions</h3>
                  </div>
                  <div className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <div
                        key={index}
                        className="p-6 border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-transparent rounded-r-xl shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <p className="text-muted-foreground leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 font-serif">Quick Actions</h3>
                <div className="space-y-3">
                  {project.links.live !== "#" && (
                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" className="w-full justify-start hover:bg-primary/10">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Project
                      </Button>
                    </Link>
                  )}
                  {project.links.github !== "#" && (
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" className="w-full justify-start hover:bg-primary/10">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </Link>
                  )}
                  <Button onClick={copyProjectUrl} variant="outline" className="w-full justify-start hover:bg-primary/10">
                    {copied ? <CheckCircle className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                    {copied ? 'Copied!' : 'Share Project'}
                  </Button>
                </div>
              </div>

              {/* Project Metrics */}
              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground font-serif">Project Metrics</h3>
                </div>
                <div className="space-y-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <span className="text-muted-foreground capitalize font-medium">{key}:</span>
                      <span className="font-bold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground font-serif">Project Details</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Type:</span>
                    <span className="font-bold text-foreground text-sm">{project.type}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Duration:</span>
                    <span className="font-bold text-foreground text-sm">{project.period}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Status:</span>
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}