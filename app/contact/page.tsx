"use client"

import type React from "react"
import { useEffect, useState } from "react"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Calendar,
  Mail,
  Send,
  Clock,
  CheckCircle,
  User,
  Book,
  Briefcase,
  DollarSign,
  Pen,
  MessageSquare,
  Globe,
  Shield,
  Zap,
  Timer,
  Heart,
  Target,
  Code,
  Building,
  ArrowRight,
  CheckSquare,
  ExternalLink
} from "lucide-react"

import { user } from "@/data/user";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: "",
    priority: "normal"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    document.title = `${user.name} | Contact`;
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "", email: "", company: "", subject: "", message: "",
        projectType: "", budget: "", timeline: "", priority: "normal"
      })
    }, 5000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-lg w-full p-8 text-center shadow-2xl border-2 border-green-200 dark:border-green-800">
          <div className="mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3 font-serif">Message Received!</h2>
            <p className="text-muted-foreground text-lg mb-4">
              Thanks for reaching out! I'll review your project details and get back to you within 24 hours.
            </p>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">What happens next:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckSquare className="h-4 w-4 text-green-500" />
                  I'll review your project requirements
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-blue-500" />
                  Expect a detailed response within 24 hours
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="h-4 w-4 text-purple-500" />
                  We'll schedule a call to discuss your project
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-6">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {user.contact.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {user.contact.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              24hr Response Time
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Free Consultation
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Agile Development
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-10 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">What I Can Help You Build</h2>
            <p className="text-muted-foreground text-lg">Specialized services tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {user.contact.services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 cursor-pointer"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white w-fit mb-4`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="space-y-1">
                  {service.deliverables.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      {item}
                    </div>
                  ))}
                  <p className="text-xs text-primary font-medium">+{service.deliverables.length - 2} more</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Side: Contact Info & Process */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                {user.contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href !== "#" ? info.href : undefined}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <Card className="p-5 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-foreground">{info.label}</p>
                            <Badge variant="outline" className="text-xs">{info.availability}</Badge>
                          </div>
                          <p className="text-primary font-medium mb-1">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold font-serif mb-4">Connect & Explore</h3>
                <div className="space-y-3">
                  {user.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`p-2 bg-background rounded-lg ${social.color} transition-colors`}>
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.description}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{social.followers}</div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Enhanced Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-10 shadow-2xl border border-border/40 bg-card/95 backdrop-blur-sm">
                <CardHeader className="p-0 mb-10">
                  <CardTitle className="text-3xl font-serif flex items-center gap-3">
                    <Pen className="h-7 w-7 text-primary" />
                    Tell Me About Your Project
                  </CardTitle>
                  <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                    The more details you provide, the better I can understand your needs and provide an accurate estimate.
                  </p>
                </CardHeader>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Full Name *"
                        required
                        className="pl-10 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/60"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address *"
                        required
                        className="pl-10 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/60"
                      />
                    </div>
                  </div>

                  {/* Company + Subject */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company / Organization (Optional)"
                        className="pl-10 rounded-xl shadow-sm"
                      />
                    </div>
                    <div className="relative">
                      <Book className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Title / Subject *"
                        required
                        className="pl-10 rounded-xl shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Project Type */}
                    <Select
                      name="projectType"
                      value={formData.projectType}
                      onValueChange={(value) => handleSelectChange("projectType", value)}
                    >
                      <SelectTrigger className="w-full rounded-xl shadow-sm">
                        <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder="Project Type *" />
                      </SelectTrigger>
                      <SelectContent>
                        {user.contact.projectTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center gap-2">{type.icon}{type.label}</div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Budget */}
                    <Select
                      name="budget"
                      value={formData.budget}
                      onValueChange={(value) => handleSelectChange("budget", value)}
                    >
                      <SelectTrigger className="w-full rounded-xl shadow-sm">
                        <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder="Budget Range *" />
                      </SelectTrigger>
                      <SelectContent>
                        {user.contact.budgetRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            <div>
                              <div className="font-medium">{range.label}</div>
                              <div className="text-xs text-muted-foreground">{range.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Timeline */}
                    <Select
                      name="timeline"
                      value={formData.timeline}
                      onValueChange={(value) => handleSelectChange("timeline", value)}
                    >
                      <SelectTrigger className="w-full rounded-xl shadow-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder="Timeline *" />
                      </SelectTrigger>
                      <SelectContent>
                        {user.contact.timelines.map((time) => (
                          <SelectItem key={time.value} value={time.value}>
                            <div>
                              <div className="font-medium">{time.label}</div>
                              <div className="text-xs text-muted-foreground">{time.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Priority */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">Project Priority</label>
                    <div className="flex gap-3">
                      {[
                        { value: "normal", label: "Normal", color: "bg-blue-100 text-blue-700" },
                        { value: "high", label: "High", color: "bg-orange-100 text-orange-700" },
                        { value: "urgent", label: "Urgent", color: "bg-red-100 text-red-700" },
                      ].map((priority) => (
                        <button
                          key={priority.value}
                          type="button"
                          onClick={() => handleSelectChange("priority", priority.value)}
                          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm ${formData.priority === priority.value
                            ? priority.color + " ring-2 ring-offset-2 ring-primary"
                            : "bg-muted hover:bg-muted/80 text-muted-foreground"
                            }`}
                        >
                          {priority.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <Pen className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project in detail..."
                      required
                      rows={8}
                      className="pl-10 rounded-xl shadow-sm resize-none focus:ring-2 focus:ring-primary/60"
                    />
                  </div>

                  {/* Submit */}
                  <div className="space-y-4">
                    <Button
                      type="submit"
                      size="default"
                      className="w-full font-semibold py-6 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                          Sending Your Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-6 w-6" />
                          Send Project Details
                          <ArrowRight className="ml-3 h-6 w-6" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">How We'll Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, collaborative process that ensures your project succeeds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {user.contact.workingProcess.map((process, index) => (
              <Card key={index} className="p-6 relative hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold font-serif mb-3">{process.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{process.description}</p>

                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      <Timer className="w-3 h-3 mr-1" />
                      {process.duration}
                    </Badge>

                    <div className="space-y-1 mt-3">
                      {process.deliverables.map((deliverable, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Clear answers to help you make an informed decision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {['Communication', 'Process', 'Technical', 'Support'].map((category) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 font-serif flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    {category === 'Communication' && <MessageSquare className="h-4 w-4 text-primary" />}
                    {category === 'Process' && <Target className="h-4 w-4 text-primary" />}
                    {category === 'Technical' && <Code className="h-4 w-4 text-primary" />}
                    {category === 'Support' && <Heart className="h-4 w-4 text-primary" />}
                  </div>
                  {category}
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {user.contact.faqs.filter(faq => faq.category === category).map((faq, index) => (
                    <AccordionItem key={index} value={`${category}-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Additional FAQ Categories */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/10">
            <div className="grid md:grid-cols-2 gap-8">
              {['Global', 'Business'].map((category) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold mb-4 font-serif flex items-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                      {category === 'Global' && <Globe className="h-4 w-4 text-primary" />}
                      {category === 'Business' && <Building className="h-4 w-4 text-primary" />}
                    </div>
                    {category}
                  </h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {user.contact.faqs.filter(faq => faq.category === category).map((faq, index) => (
                      <AccordionItem key={index} value={`${category}-${index}`} className="border rounded-lg px-4 bg-background/50">
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}