"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  GraduationCap,
  Code,
  Award,
  Cloud,
  Bot,
  Zap,
  Settings,
  TrendingUp,
  Rocket,
  Target,
  CheckCircle,
  Layers,
  Timer,
  Lightbulb,
  ArrowUpRight,
  Heart,
  Shield,
  Clock,
  Coffee,
  Puzzle,
  Building,
  Star
} from "lucide-react"
import Link from "next/link"

import { user } from "@/data/user";

export default function About() {
  document.title = `${user.name} | About`;

  const [activeSkillCategory, setActiveSkillCategory] = useState("Frontend")
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("skills")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background pt-6">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 font-serif bg-gradient-to-r from-orange-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
              {user.about.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {user.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <div className="flex flex-wrap bg-muted/50 rounded-xl p-1 gap-1">
              {[
                { id: 'skills', label: 'Technical Skills', icon: <Code className="h-4 w-4" /> },
                { id: 'experience', label: 'Experience', icon: <TrendingUp className="h-4 w-4" /> },
                { id: 'approach', label: 'Work Style', icon: <Target className="h-4 w-4" /> },
                { id: 'values', label: 'Core Values', icon: <Heart className="h-4 w-4" /> },
                { id: 'methodology', label: 'Problem Solving', icon: <Puzzle className="h-4 w-4" /> },
                { id: 'interests', label: 'Interests', icon: <Star className="h-4 w-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm ${activeTab === tab.id
                    ? 'bg-card text-primary shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                    }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {activeTab === 'skills' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-8 font-serif flex items-center">
                      <Code className="mr-3 h-7 w-7 text-primary" />
                      Technical Expertise
                    </h2>

                    {/* Skill Categories */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {Object.entries(user.about.skills).map(([category, data]) => {
                        const isActive = activeSkillCategory === category

                        return (
                          <Button
                            key={category}
                            variant={isActive ? "default" : "outline"}
                            onClick={() => setActiveSkillCategory(category)}
                            className={`flex items-center space-x-2 transition-all duration-300 ${isActive
                              ? `bg-gradient-to-r ${data.color} shadow-lg text-white`
                              : "bg-transparent hover:bg-primary/10"}`
                            }
                          >
                            {data.icon}
                            <span>{category}</span>
                          </Button>
                        )
                      })}
                    </div>

                    {/* Active Skill Category */}
                    <Card className="p-8 bg-gradient-to-r from-card to-muted/20 border-2 border-border/50">
                      <div className="grid md:grid-cols-2 gap-8">
                        {user.about.skills[activeSkillCategory].technologies.map((tech, index) => (
                          <div key={index} className="space-y-4 p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                                  alt={tech.name}
                                  className="w-8 h-8"
                                  loading="lazy"
                                />
                                <span className="font-semibold text-foreground text-lg">{tech.name}</span>
                              </div>
                              <Badge variant="outline" className="text-xs font-medium">
                                {tech.level}%
                              </Badge>
                            </div>

                            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                              <div
                                className={`bg-gradient-to-r ${user.about.skills[activeSkillCategory].color} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                                style={{ width: `${tech.level}%` }}
                              >
                                <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <Timer className="w-3 h-3 text-muted-foreground" />
                                <span className="text-muted-foreground">{tech.experience}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Layers className="w-3 h-3 text-muted-foreground" />
                                <span className="text-muted-foreground">{tech.projects} projects</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-8 font-serif flex items-center">
                    <TrendingUp className="mr-3 h-7 w-7 text-primary" />
                    Professional Experience
                  </h2>
                  <div className="space-y-8">
                    {user.about.experience.map((exp, index) => (
                      <Card key={index} className="p-8 hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20">
                        <div className="flex items-start space-x-6">
                          <div className={`p-4 rounded-xl text-white bg-gradient-to-r ${exp.color} flex-shrink-0`}>
                            {exp.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                              <div>
                                <h3 className="text-2xl font-semibold text-foreground font-serif mb-1">{exp.title}</h3>
                                <div className="flex items-center gap-3">
                                  <p className="text-primary font-medium text-lg">{exp.company}</p>
                                  <Badge variant="secondary" className="text-xs">{exp.type}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">{exp.duration}</p>
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{exp.description}</p>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                              {Object.entries(exp.metrics).map(([key, value]) => (
                                <div key={key} className="text-center p-3 bg-muted/30 rounded-lg">
                                  <div className="font-bold text-primary text-lg">{value}</div>
                                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                </div>
                              ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-3">
                              {exp.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg hover:bg-muted/40 transition-colors">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="space-y-12">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-8 font-serif flex items-center">
                      <Target className="mr-3 h-7 w-7 text-primary" />
                      My Work Approach
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      {user.about.workApproach.map((approach, index) => (
                        <Card key={index} className="p-8 hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${approach.color} text-white w-fit mb-6`}>
                            {approach.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-4 font-serif">{approach.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Working Style */}
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6 font-serif flex items-center">
                      <Clock className="mr-3 h-6 w-6 text-primary" />
                      Working Style & Schedule
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {user.about.workingStyle.map((style, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border hover:border-primary/20">
                          <div className="flex items-start space-x-4">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                              {style.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-2">{style.title}</h4>
                              <p className="text-muted-foreground text-sm mb-2">{style.description}</p>
                              <Badge variant="outline" className="text-xs">{style.time}</Badge>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-8 font-serif flex items-center">
                    <Heart className="mr-3 h-7 w-7 text-primary" />
                    Core Values & Philosophy
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {user.about.coreValues.map((value, index) => (
                      <Card key={index} className="p-8 hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${value.color} text-white w-fit mb-6`}>
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-4 font-serif">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </Card>
                    ))}
                  </div>

                  {/* Personal Philosophy */}
                  <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/10">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 font-serif flex items-center">
                      <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                      Personal Philosophy
                    </h3>

                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      {user.about.personalPhilosophy.map((point, idx) => (
                        <p
                          key={idx}
                          className={idx === 0 ? "text-lg" : ""}
                        >
                          {point}
                        </p>
                      ))}
                    </div>
                  </Card>

                </div>
              )}

              {activeTab === 'methodology' && (
                <div className="space-y-12">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-8 font-serif flex items-center">
                      <Puzzle className="mr-3 h-7 w-7 text-primary" />
                      Problem Solving Methodology
                    </h2>
                    <div className="space-y-8">
                      {user.about.problemSolvingApproach.map((step, index) => (
                        <Card key={index} className="p-8 hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20">
                          <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {step.step}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                  {step.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground font-serif">{step.title}</h3>
                              </div>
                              <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Technical Decision Making */}
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6 font-serif flex items-center">
                      <Settings className="mr-3 h-6 w-6 text-primary" />
                      Technical Decision Framework
                    </h3>
                    <Card className="p-8 bg-gradient-to-r from-card to-muted/20">
                      <div className="grid md:grid-cols-3 gap-8">
                        {user.about.technicalDecisionFramework.map((item, idx) => (
                          <div key={idx} className="text-center">
                            <div
                              className={`p-4 rounded-xl w-fit mx-auto mb-4 bg-gradient-to-r ${item.color}`}
                            >
                              {item.icon}
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </Card>

                  </div>
                </div>
              )}

              {activeTab === 'interests' && (
                <div className="space-y-12">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-8 font-serif flex items-center">
                      <Star className="mr-3 h-7 w-7 text-primary" />
                      Personal Interests
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {user.about.personalInterests.map((interest, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border hover:border-primary/20">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 bg-muted/30 rounded-lg ${interest.color}`}>
                              {interest.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-2">{interest.title}</h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">{interest.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Achievement Highlights */}
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6 font-serif flex items-center">
                      <Award className="mr-3 h-6 w-6 text-primary" />
                      Key Achievements
                    </h3>
                    <div className="space-y-6">
                      {user.about.achievements.map((achievement, index) => (
                        <Card key={index} className="p-6 hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 bg-muted/20 rounded-xl ${achievement.color}`}>
                              {achievement.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xl font-semibold text-foreground">{achievement.title}</h4>
                                <Badge variant="outline" className="text-xs">{achievement.year}</Badge>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Fun Facts */}
                  <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/10">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 font-serif flex items-center">
                      <Coffee className="mr-3 h-6 w-6 text-primary" />
                      Quick Facts About Me
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      {user.about.quickFacts.map((fact, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{fact.text}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Education */}
              <Card className="p-6">
                <CardHeader className="p-0">
                  <CardTitle className="font-serif flex items-center text-xl">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 space-y-4">
                  {user.about.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border ${idx === 0
                          ? "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800"
                          : "bg-muted/50 border-border"
                        }`}
                    >
                      <div className="font-semibold text-foreground">{edu.degree}</div>
                      <div className="text-sm text-primary font-medium">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground">{edu.details}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Current Focus */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-serif flex items-center">
                    <Rocket className="mr-2 h-5 w-5 text-primary" />
                    Current Focus
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 space-y-4">
                  <div className="space-y-3">
                    {user.about.currentFocus.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">{item.icon}</div>
                        <div>
                          <div className="font-medium text-foreground text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>


              {/* Quick Contact */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-serif flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ready to discuss your next project, explore collaboration opportunities, or just want to say hello?
                    I'm always excited to connect with fellow developers and innovators.
                  </p>
                  <div className="space-y-3">
                    <Link href="/contact" className="block">
                      <Button className="w-full group transition-all duration-300">
                        <Mail className="mr-2 h-4 w-4" />
                        Start a Conversation
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}