import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Timer,
  ArrowRight,
  Calendar,
  TrendingUp,
} from 'lucide-react';

import { user } from "@/data/user"

const FooterCta = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl transform -translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl transform -translate-y-1/2 animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="space-y-8">

          <h2 className="text-4xl md:text-6xl font-bold text-foreground font-serif leading-tight">
            Let's Build Something
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Extraordinary</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a startup looking to build your MVP, an enterprise seeking to modernize your tech stack,
            or a fellow developer interested in collaboration—I'm here to help turn your vision into reality.
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Email Me</h3>
              <p className="text-sm text-muted-foreground mb-2">Quick response</p>
              <a href="mailto:kaushalkrishna011@gmail.com" className="text-primary hover:underline font-medium text-sm">
                Send Message
              </a>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 text-center">
              <Phone className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Call Me</h3>
              <p className="text-sm text-muted-foreground mb-2">Direct conversations</p>
              <a href="tel:+919279193310" className="text-green-500 hover:underline font-medium text-sm">
                {user.phone}
              </a>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Location</h3>
              <p className="text-sm text-muted-foreground mb-2">Based in India</p>
              <span className="text-blue-500 font-medium text-sm">{user.location}</span>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 text-center">
              <Timer className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
              <p className="text-sm text-muted-foreground mb-2">Quick turnaround</p>
              <span className="text-purple-500 font-medium text-sm">Within 24 hours</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            {/* Main CTA */}
            <Link href="/contact">
              <Button
                size="lg"
                className="font-semibold px-8 py-4 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {user.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.description}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className={`bg-background hover:scale-105 transition-all duration-300 ${link.color}`}
                  >
                    {link.icon}
                    {link.name}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>15+ successful projects delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCta;