import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, subtitle, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 px-6 md:px-12 lg:px-24", className)}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-12 text-center animate-fade-in">
            {subtitle && (
              <p className="text-sm uppercase tracking-wider text-primary mb-2 font-medium">
                {subtitle}
              </p>
            )}
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
