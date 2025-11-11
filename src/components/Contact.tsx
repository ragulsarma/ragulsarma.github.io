import { Section } from "./Section";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="LET'S CONNECT">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8 animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Let's Work Together</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a mobile app, want to integrate AI features, or just want to chat about tech, feel free to reach out!
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <a
              href="mailto:ragulsarma@gmail.com"
              className="group relative block"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative flex items-center gap-4 p-5 bg-card/90 backdrop-blur-sm border border-border rounded-xl card-glow">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur group-hover:blur-xl transition-all"></div>
                  <div className="relative p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold text-lg group-hover:text-gradient transition-all">ragulsarma@gmail.com</p>
                </div>
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/ragulsarma"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative flex items-center gap-4 p-5 bg-card/90 backdrop-blur-sm border border-border rounded-xl card-glow">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur group-hover:blur-xl transition-all"></div>
                  <div className="relative p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-semibold text-lg group-hover:text-gradient transition-all">linkedin.com/in/ragulsarma</p>
                </div>
              </div>
            </a>
            
            <a
              href="https://github.com/ragulsarma"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative flex items-center gap-4 p-5 bg-card/90 backdrop-blur-sm border border-border rounded-xl card-glow">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur group-hover:blur-xl transition-all"></div>
                  <div className="relative p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                  <p className="font-semibold text-lg group-hover:text-gradient transition-all">github.com/ragulsarma</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-slide-in delay-500">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative w-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x"></div>
                  <div className="relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all group-hover/btn:scale-[1.02]">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};