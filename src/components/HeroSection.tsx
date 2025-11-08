import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const HeroSection = () => {
  // Generate vertical line positions
  const verticalLines = Array.from({ length: 25 }, (_, i) => ({
    left: `${(i * 4) + (Math.random() * 2)}%`,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background with vertical lines and shooting stars */}
      <div className="fixed inset-0 overflow-hidden bg-grid">
        {/* Vertical lines pattern */}
        {verticalLines.map((line, i) => (
          <div key={i} className="vertical-line" style={{ left: line.left }} />
        ))}
        
        {/* Shooting stars */}
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        
        {/* Ambient glow */}
        <div className="ambient-glow" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 radial-gradient-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge - animated */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Privacy by design</span>
          </div>

          {/* Main headline - larger, matching reference */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Your digital space,
            <br />
            <span className="gradient-text will-change-transform">simplified.</span>
          </h1>

          {/* Subheadline - matching reference size */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            The luxury bio link, image hosting, and email service designed for those who value discretion.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-luxury font-medium group px-8 h-12 text-base transition-all duration-200 hover:scale-105 active:scale-98 will-change-transform"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-card font-medium px-8 h-12 text-base hover:border-primary/50 transition-all duration-200 hover:scale-105 active:scale-98 will-change-transform"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className="pt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span>End-to-end encryption</span>
            </div>
            <span className="text-muted-foreground/30">•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" style={{ animationDelay: "1s" }} />
              <span>Zero-knowledge architecture</span>
            </div>
            <span className="text-muted-foreground/30">•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" style={{ animationDelay: "2s" }} />
              <span>GDPR compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
