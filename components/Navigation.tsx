"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, FolderOpen, Mail } from "lucide-react"

import { user } from "@/data/user"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const pathname = usePathname()

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  // Hide/reveal nav only on desktop
  useEffect(() => {
    if (!isDesktop) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, isDesktop])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-transform duration-300 
        ${isDesktop ? (showNav ? "translate-y-0" : "-translate-y-full") : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo + Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border">
              <Image
                src={user.avatarUrl}
                alt={user.name}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <span className="font-bold text-lg text-primary font-serif">
              {user.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted/30 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 fade-in-80">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 py-3 text-sm font-medium transition-colors ${isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
