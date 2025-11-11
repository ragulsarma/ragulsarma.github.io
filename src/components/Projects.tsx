import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Agent Development",
    description:
      "Built experimental AI agents capable of handling automation tasks and interactive workflows using LLMs and APIs.",
    tags: ["AI", "LangChain", "OpenAI", "Python"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Doctor Consult App",
    description:
      "Web application with video consultation features, appointment scheduling, and integrated payment gateway.",
    tags: ["Flutter", "Firebase", "WebRTC", "Payment Integration"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Uzhavan Online",
    description:
      "E-commerce grocery platform with real-time inventory, cart management, and order tracking.",
    tags: ["Flutter", "REST API", "State Management"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Betting App",
    description:
      "Custom calendar implementation, wallet integration, and responsive navigation for betting platform.",
    tags: ["Flutter", "Custom UI", "Payment Gateway"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "SelfAware (Yoga App)",
    description:
      "Cross-platform wellness app with workout tracking, meditation guides, and progress analytics.",
    tags: ["Flutter", "Firebase", "Analytics"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Retrieve Contacts App",
    description:
      "Utility app that encodes contacts into JSON format for backup and migration purposes.",
    tags: ["Flutter", "Local Storage", "JSON"],
    demoLink: "#",
    githubLink: "#",
  },
];

export const Projects = () => {
  return (
    <Section id="projects" subtitle="My Work" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="p-6 card-glow bg-card border-border animate-fade-in overflow-hidden group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image Placeholder */}
            <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-muted-foreground text-sm">Project Screenshot</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} className="mr-2" />
                  Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github size={14} className="mr-2" />
                  Code
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
