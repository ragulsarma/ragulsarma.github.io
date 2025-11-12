import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code2 } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-float delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/60 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent/60 rounded-full animate-float delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="text-primary" size={16} />
              <p className="text-primary font-medium text-sm tracking-wide">
                Available for new projects
              </p>
            </div>

            {/* Main Heading */}
            <div>
              <p className="text-muted-foreground font-medium tracking-wide mb-2">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight">
                Ragul <br />
                <span className="relative inline-block">
                  <span className="text-gradient">Nathan</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></span>
                </span>
              </h1>
            </div>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-lg bg-card border border-border backdrop-blur-sm">
                <p className="text-sm font-medium flex items-center gap-2">
                  <Code2 size={16} className="text-primary" />
                  Flutter Developer
                </p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-card border border-border backdrop-blur-sm">
                <p className="text-sm font-medium flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" />
                  AI Engineer
                </p>
              </div>
            </div>

            <p className="text-lg text-foreground/90 max-w-lg leading-relaxed">
              Building cross-platform experiences that merge design and performance.
              Exploring the intersection of AI and mobile development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="default" size="lg" asChild className="group">
                <a href="#contact" className="relative overflow-hidden">
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <a href="#projects">
                  View My Work
                  <ChevronDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/ragulsarma"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border hover:border-primary transition-all card-glow overflow-hidden"
              >
                <Github size={20} className="relative z-10 group-hover:text-primary-foreground transition-colors" />
                <div className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform"></div>
              </a>
              <a
                href="https://linkedin.com/in/ragulsarma"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border hover:border-primary transition-all card-glow overflow-hidden"
              >
                <Linkedin size={20} className="relative z-10 group-hover:text-primary-foreground transition-colors" />
                <div className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform"></div>
              </a>
              <a
                href="mailto:ragulsarma@gmail.com"
                className="group relative w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border hover:border-primary transition-all card-glow overflow-hidden"
              >
                <Mail size={20} className="relative z-10 group-hover:text-primary-foreground transition-colors" />
                <div className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform"></div>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block relative animate-slide-in">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-72 h-72 border-2 border-primary/20 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 border-2 border-accent/20 rounded-full"></div>
            
            {/* Main Profile Card */}
            <div className="relative">
              {/* Rotating Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-75 blur-xl animate-spin-slow"></div>
              
              {/* Profile Container */}
              <div className="relative w-full h-[600px] rounded-2xl bg-gradient-to-br from-card to-secondary border border-border backdrop-blur-sm overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-8">
                  {/* Profile Image Placeholder with Animated Border */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md group-hover:blur-lg transition-all"></div>
                    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-background flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,113,0.1),transparent_70%)]"></div>
                      <img
                        src="https://i.ibb.co/7trckr7v/IMG-0663.png"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full z-10"
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-6 w-full max-w-md">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">8+</p>
                      <p className="text-xs text-muted-foreground mt-1">Years Exp</p>
                    </div>
                    <div className="text-center border-x border-border">
                      <p className="text-3xl font-bold text-primary">40+</p>
                      <p className="text-xs text-muted-foreground mt-1">Projects</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">5</p>
                      <p className="text-xs text-muted-foreground mt-1">Companies</p>
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-accent/30 rounded-bl-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <p className="text-xs uppercase tracking-wider">Scroll</p>
          <ChevronDown size={20} />
        </div>
      </a>
    </section>
  );
};
