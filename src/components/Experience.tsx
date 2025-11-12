import { Section } from "./Section";
import { Calendar, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend & AI Engineer",
    company: "Tushop",
    period: "2025 – Present",
    description: [
      "Building and scaling Tushop’s web (Next.js) and mobile (Flutter) platforms",
      "Leading frontend architecture and introducing AI-driven automation tools",
      "Exploring LLMs and intelligent workflows to enhance user and developer experiences",
    ],
  },
  {
    title: "Senior Software Engineer - Flutter",
    company: "XA Group",
    period: "2022 – 2025",
    description: [
      "Led the development of a dynamic form builder that enabled 100% API-driven UI configuration, reducing release dependency on frontend updates",
      "Implemented real-time communication with SignalR for instant workflow updates across user roles",
      "Integrated WhatsApp messaging to enhance customer engagement and streamline FNOL (First Notice of Loss) processes",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company: "Nearcast, Inc. (LegalForce RAPC Worldwide)",
    period: "2021 – 2022",
    description: [
      "Architected and developed core mobile features for a neighborhood-based social media app with livestreaming, short-video sharing, and real-time interactions",
      "Optimized performance and responsiveness across video feeds, group messaging, and local business modules using BLoC and API-driven architecture",
      "Delivered seamless UX for large-scale, location-aware user engagement—contributing to higher app retention and smoother cross-feature integration",
    ],
  },
  {
    title: "Mobile App Developer",
    company: "Excrin Think Labs",
    period: "2018 – 2021",
    description: [
      "Built and deployed production-ready Flutter apps for multiple clients, delivering end-to-end mobile solutions from concept to release",
      "Integrated Firebase analytics, database, and push notifications, improving user engagement by over 40%",
      "Developed and beta-launched a hotel room booking app with native Android notifications and custom animations for smoother UX",
    ],
  },
  {
    title: "Android Developer",
    company: "Messiah Technologies",
    period: "2017 – 2018",
    description: [
      "Developed and optimized core modules for a real-time job search Android application using Java and REST APIs",
      "Enhanced app usability and retention by integrating Facebook login and API-driven user onboarding",
      "Collaborated with backend teams to improve API efficiency, reducing feature delivery time significantly",
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
              index % 2 === 0
                ? "lg:pr-[50%] lg:text-right"
                : "lg:pl-[50%] lg:ml-8"
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
                    <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-xl font-semibold text-primary mb-2">
                        {exp.company}
                      </p>
                      <div
                        className={`inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full ${
                          index % 2 === 0 ? "lg:float-right" : ""
                        }`}
                      >
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul
                    className={`space-y-3 ${
                      index % 2 === 0 ? "lg:text-right" : ""
                    }`}
                  >
                    {exp.description.map((achievement, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors ${
                          index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        }`}
                      >
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
