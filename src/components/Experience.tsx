import { Section } from "./Section";
import { Calendar, TrendingUp } from "lucide-react";

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
    <Section id="experience" title="Work Experience" subtitle="MY JOURNEY">
      {/* Decorative timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block"></div>
      
      <div className="relative space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative animate-fade-in ${
              index % 2 === 0 ? 'lg:pr-[50%] lg:text-right' : 'lg:pl-[50%] lg:ml-8'
            }`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Timeline dot */}
            <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                <div className="relative w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 card-glow overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-xl font-semibold text-primary mb-2">{exp.company}</p>
                      <div className={`inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full ${index % 2 === 0 ? 'lg:float-right' : ''}`}>
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className={`space-y-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    {exp.description.map((achievement, idx) => (
                      <li key={idx} className={`flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="p-1.5 bg-primary/10 rounded group-hover/item:bg-primary/20 transition-colors">
                          <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                        </div>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};