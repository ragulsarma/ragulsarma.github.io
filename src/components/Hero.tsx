import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary font-medium tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight">
              Ragul <br />
              <span className="text-gradient">Nathan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Senior Flutter Developer | Mobile App Engineer
            </p>
            <p className="text-lg text-foreground/80 max-w-lg leading-relaxed">
              Building cross-platform experiences that merge design and performance.
              Exploring the intersection of AI and mobile development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="default" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/ragulsarma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all card-glow"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ragulsarma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all card-glow"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ragulsarma@gmail.com"
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all card-glow"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Image - Placeholder for now */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full h-[600px] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-primary/30 mb-4"></div>
                  <p className="text-muted-foreground">Profile Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
