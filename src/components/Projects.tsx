import { Section } from "./Section";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    title: "AI Agent Development",
    description:
      "Built experimental AI agents capable of handling automation tasks and interactive workflows using LLMs and APIs.",
    tags: ["AI", "LangChain", "OpenAI", "Python"],
    demo: "#",
    github: "#",
  },
  {
    title: "Doctor Consult App",
    description:
      "Web application with video consultation features, appointment scheduling, and integrated payment gateway.",
    tags: ["Flutter", "Firebase", "WebRTC", "Payment Integration"],
    demo: "#",
    github: "#",
  },
  {
    title: "Uzhavan Online",
    description:
      "E-commerce grocery platform with real-time inventory, cart management, and order tracking.",
    tags: ["Flutter", "REST API", "State Management"],
    demo: "#",
    github: "#",
  },
  {
    title: "Betting App",
    description:
      "Custom calendar implementation, wallet integration, and responsive navigation for betting platform.",
    tags: ["Flutter", "Custom UI", "Payment Gateway"],
    demo: "#",
    github: "#",
  },
  {
    title: "SelfAware (Yoga App)",
    description:
      "Cross-platform wellness app with workout tracking, meditation guides, and progress analytics.",
    tags: ["Flutter", "Firebase", "Analytics"],
    demo: "#",
    github: "#",
  },
  {
    title: "Retrieve Contacts App",
    description:
      "Utility app that encodes contacts into JSON format for backup and migration purposes.",
    tags: ["Flutter", "Local Storage", "JSON"],
    demo: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="WHAT I'VE BUILT">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-75 transition duration-500"></div>
            
            <div className="relative bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col">
              {/* Project image placeholder with gradient */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Animated dots */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/60 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-accent/60 animate-pulse delay-500"></div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-full text-xs font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-lg transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      <span className="font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      <span className="font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};