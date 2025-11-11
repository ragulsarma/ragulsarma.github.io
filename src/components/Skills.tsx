import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Brain, Code, Layers, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & ML Skills",
    skills: [
      "AI Agent Development",
      "OpenAI API / LangChain",
      "LLM Integrations",
      "Prompt Engineering",
      "Model Fine-tuning",
    ],
  },
  {
    icon: Code,
    title: "Languages & Frameworks",
    skills: ["Dart", "Flutter", "Java", "Kotlin", "React.js", "TypeScript"],
  },
  {
    icon: Layers,
    title: "Architecture & State",
    skills: ["BLoC Pattern", "Provider", "MVVM", "Clean Architecture", "Modular Design"],
  },
  {
    icon: Wrench,
    title: "Tools & Backend",
    skills: ["Firebase", "REST APIs", "Git", "CI/CD", "Performance Optimization"],
  },
];

export const Skills = () => {
  return (
    <Section id="skills" subtitle="What I Bring" title="Skills & Expertise">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="p-6 card-glow bg-card border-border animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4">
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <category.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
