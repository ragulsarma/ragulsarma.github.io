import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer / Personal Projects",
    company: "Independent",
    period: "Aug 2025 – Present",
    description: [
      "Developing AI agents for task automation and intelligent system interaction",
      "Experimenting with LLM-based architectures and API integrations",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Tushop",
    period: "2024 – Present",
    description: [
      "Developing mobile and web apps using Flutter and React.js",
      "Leading frontend architecture and implementation",
    ],
  },
  {
    title: "Senior Software Engineer - Flutter",
    company: "XA Group",
    period: "2023 – 2024",
    description: [
      "Built dynamic form builder with advanced validation",
      "Implemented SignalR real-time notifications and WhatsApp integration",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company: "Nearcast, Inc.",
    period: "2022 – 2023",
    description: [
      "Created responsive components with BLoC state management",
      "Integrated REST APIs and implemented complex UI patterns",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company: "LegalForce RAPC Worldwide",
    period: "2021 – 2022",
    description: [
      "Led API-driven Flutter projects with modular architecture",
      "Implemented comprehensive testing and CI/CD pipelines",
    ],
  },
  {
    title: "Mobile App Developer",
    company: "Excrin",
    period: "2019 – 2021",
    description: [
      "Built and deployed Flutter apps with Firebase analytics",
      "Created custom animations and hotel booking systems",
    ],
  },
  {
    title: "Android Developer",
    company: "Messiah Technologies",
    period: "2017 – 2019",
    description: [
      "Developed real-time job search app features",
      "Implemented Facebook login and social integrations",
    ],
  },
];

export const Experience = () => {
  return (
    <Section id="experience" subtitle="My Journey" title="Work Experience">
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:flex md:justify-between md:gap-12">
                {/* Left side (odd items) or Right side (even items) */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"
                  }`}
                >
                  <Card className="p-6 card-glow bg-card border-border">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <ul className="space-y-2 text-sm text-foreground/80">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
