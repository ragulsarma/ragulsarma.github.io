import { Section } from "./Section";
import { Card } from "@/components/ui/card";
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
    <Section id="services" subtitle="What I Offer" title="Services">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="p-8 card-glow bg-card border-border animate-fade-in group hover:border-primary/50 transition-all"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <service.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-foreground/80 leading-relaxed">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
