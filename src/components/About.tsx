import { Section } from "./Section";
import { MapPin, Lightbulb, Target, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="GET TO KNOW ME">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative grid md:grid-cols-2 gap-12 items-start">
        {/* Bio with gradient border */}
        <div className="space-y-6 animate-fade-in relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-30"></div>
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm <span className="text-gradient font-semibold">Ragul Nathan</span>, a passionate software engineer specializing in Flutter and cross-platform app development.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-4">
              With over <span className="text-gradient font-semibold">8 years of experience</span> in mobile development, I've worked across startups and global companies delivering user-centric, high-performance applications.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-4">
              I love building elegant solutions that combine code, design, and real-world impact. Recently, I've been exploring <span className="text-gradient font-semibold">AI engineering</span> and developing intelligent agents that combine automation and machine learning with app experiences.
            </p>
          </div>
        </div>

        {/* Quick Info Cards with enhanced styling */}
        <div className="space-y-4 animate-slide-in delay-500">
          <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 card-glow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Chennai, India</p>
              </div>
            </div>
          </div>
          
          <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 card-glow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Expertise</h3>
                <p className="text-muted-foreground">Flutter, Mobile Architecture, AI Integration, API Development</p>
              </div>
            </div>
          </div>
          
          <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 card-glow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Interests</h3>
                <p className="text-muted-foreground">Frontend architecture, Scalable app design, UI/UX engineering, Developer experience, Product innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline with enhanced design */}
      <div className="relative mt-16 animate-fade-in delay-1000">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
          <GraduationCap className="w-8 h-8 text-primary" />
          <h3 className="text-3xl font-bold">Education</h3>
          <GraduationCap className="w-8 h-8 text-primary" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-card border border-border rounded-lg p-8 h-full">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                2010 - 2014
              </div>
              <h4 className="text-2xl font-bold mt-4 mb-3 group-hover:text-gradient transition-all duration-300">
                Bachelor of Science
              </h4>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Computer Science</p>
              <p className="text-primary font-semibold text-lg mb-3">SRM University</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <p className="text-muted-foreground">GPA: <span className="text-foreground font-semibold">7.9/10</span></p>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-card border border-border rounded-lg p-8 h-full">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-accent to-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                2015 - 2020
              </div>
              <h4 className="text-2xl font-bold mt-4 mb-3 group-hover:text-gradient transition-all duration-300">
                Bachelor of Law
              </h4>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">LLB Honours</p>
              <p className="text-accent font-semibold text-lg mb-3">Dr. Ambedkar Global Law Institute</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                <p className="text-muted-foreground">GPA: <span className="text-foreground font-semibold">6.0/10</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};