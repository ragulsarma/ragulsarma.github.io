import { Section } from "./Section";
import { Brain, Smartphone, Zap, Code2, Palette, Settings } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Integration & Automation",
    description:
      "Implementing AI-driven features and automation workflows into your applications using cutting-edge LLM technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building high-performance native and cross-platform mobile applications using Flutter and native Android technologies.",
  },
  {
    icon: Zap,
    title: "Cross-Platform Solutions",
    description:
      "Developing unified codebases that work seamlessly across iOS, Android, and web platforms with optimal performance.",
  },
  {
    icon: Code2,
    title: "API & Backend Integration",
    description:
      "Seamless integration with REST APIs, GraphQL, and third-party services including payment gateways and analytics.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Translating designs into pixel-perfect, responsive, and accessible user interfaces with smooth animations.",
  },
  {
    icon: Settings,
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing app performance, reducing load times, and ensuring smooth user experiences.",
  },
];

export const Services = () => {
  return (
    <Section id="services" title="Services" subtitle="WHAT I OFFER">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8 card-glow text-center h-full overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500"></div>
                
                <div className="relative">
                  {/* Animated icon container */}
                  <div className="inline-flex relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse"></div>
                    <div className="relative p-5 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </p>

                  {/* Decorative bottom bar */}
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 mx-auto"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};