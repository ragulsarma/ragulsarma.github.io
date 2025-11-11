import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { MapPin, Award, Heart } from "lucide-react";

export const About = () => {
  return (
    <Section id="about" subtitle="Get to know me" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-6 animate-fade-in">
          <p className="text-lg text-foreground/90 leading-relaxed">
            I'm Ragul Nathan, a passionate software engineer specializing in Flutter and
            cross-platform app development. With over 8 years of experience in mobile
            development, I've worked across startups and global companies delivering
            user-centric, high-performance applications.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            I love building elegant solutions that combine code, design, and real-world
            impact. Recently, I've been exploring AI engineering and developing intelligent
            agents that combine automation and machine learning with app experiences.
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 gap-4 pt-6">
            <Card className="p-6 card-glow bg-card border-border">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground">Tamil Nadu, India</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-glow bg-card border-border">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Expertise</h4>
                  <p className="text-muted-foreground">
                    Flutter, Mobile Architecture, AI Integration, Performance Optimization
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-glow bg-card border-border">
              <div className="flex items-start gap-4">
                <Heart className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Interests</h4>
                  <p className="text-muted-foreground">
                    Building products, open-source collaboration, continuous learning
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6 animate-slide-in">
          <h3 className="text-3xl font-serif font-bold mb-8">Education</h3>

          <div className="space-y-6">
            <Card className="p-6 card-glow bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">
                    Bachelor of Science (Computer Science)
                  </h4>
                  <p className="text-primary font-medium mb-2">SRM University</p>
                  <p className="text-sm text-muted-foreground">GPA: 7.9/10</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-glow bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Bachelor of Law (LLB Hons)</h4>
                  <p className="text-primary font-medium mb-2">
                    Dr. Ambedkar Global Law Institute
                  </p>
                  <p className="text-sm text-muted-foreground">GPA: 6.0/10</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
