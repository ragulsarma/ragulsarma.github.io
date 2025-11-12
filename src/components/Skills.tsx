import { Section } from "./Section";
import { Brain, Code, Layers, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & Automation Skills",
    skills: [
      "AI Agent Development (Lua, LLM-driven workflows)",
      "LLM Architecture & Tool Orchestration",
      "Prompt Design & System Instructions",
      "API Integration & Automation Pipelines",
      "LangChain / OpenAI API",
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
    skills: [
      "BLoC Pattern",
      "Provider",
      "MVVM",
      "Clean Architecture",
      "Modular Design",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Backend",
    skills: [
      "Firebase",
      "REST APIs",
      "Git",
      "CI/CD",
      "Performance Optimization",
    ],
  },
];

export const Skills = () => {
  return (
    <Section id="skills" title="Skills & Expertise" subtitle="WHAT I BRING">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-10 left-20 w-6 h-6 text-primary/20 animate-pulse" />
        <Sparkles className="absolute top-40 right-32 w-4 h-4 text-accent/30 animate-pulse delay-500" />
        <Sparkles className="absolute bottom-20 left-1/3 w-5 h-5 text-primary/20 animate-pulse delay-1000" />
      </div>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500 animate-gradient-x"></div>

              <div className="relative bg-card/90 backdrop-blur-sm border border-border rounded-lg p-8 h-full overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>

                <div className="relative">
                  {/* Icon header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
