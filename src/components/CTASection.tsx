import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight animate-on-scroll">
            Ready to elevate
            <br />
            your <span className="gradient-text">digital presence?</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Join the exclusive community of privacy-conscious individuals who demand excellence.
          </p>

          {/* Email form */}
          <div className="max-w-md mx-auto pt-4 animate-on-scroll">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-card border-border h-12 text-base focus:border-primary/50 transition-colors"
              />
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-luxury font-medium group h-12 px-8 transition-all duration-200 hover:scale-105 active:scale-98 will-change-transform"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No credit card required. 14-day free trial.
            </p>
          </div>

          {/* Security badges */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-6 animate-on-scroll stagger-children">
            <div className="glass px-4 py-2 rounded-lg text-sm border border-border hover:border-primary/30 transition-all duration-200 hover:scale-105 will-change-transform animate-on-scroll">
              <span className="text-muted-foreground">Secured by</span>
              <span className="ml-2 font-semibold text-primary">AES-256</span>
            </div>
            <div className="glass px-4 py-2 rounded-lg text-sm border border-border hover:border-secondary/30 transition-all duration-200 hover:scale-105 will-change-transform animate-on-scroll">
              <span className="text-muted-foreground">Certified</span>
              <span className="ml-2 font-semibold text-secondary">ISO 27001</span>
            </div>
            <div className="glass px-4 py-2 rounded-lg text-sm border border-border hover:border-primary/30 transition-all duration-200 hover:scale-105 will-change-transform animate-on-scroll">
              <span className="text-muted-foreground">Compliant with</span>
              <span className="ml-2 font-semibold text-primary">GDPR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
