import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Generate vertical line positions
  const verticalLines = Array.from({ length: 25 }, (_, i) => ({
    left: `${(i * 4) + (Math.random() * 2)}%`,
  }));

  // Generate rectangular blocks for top mosaic pattern - centered
  const topBlocks = [
    { width: 80, height: 190, top: 0, left: 'calc(50% - 467.5px)' },
    { width: 80, height: 230, top: 0, left: 'calc(50% - 382.5px)' },
    { width: 80, height: 270, top: 0, left: 'calc(50% - 297.5px)' },
    { width: 80, height: 310, top: 0, left: 'calc(50% - 212.5px)' },
    { width: 80, height: 350, top: 0, left: 'calc(50% - 127.5px)' },
    { width: 80, height: 390, top: 0, left: 'calc(50% - 42.5px)' },
    { width: 80, height: 350, top: 0, left: 'calc(50% + 42.5px)' },
    { width: 80, height: 310, top: 0, left: 'calc(50% + 127.5px)' },
    { width: 80, height: 270, top: 0, left: 'calc(50% + 212.5px)' },
    { width: 80, height: 230, top: 0, left: 'calc(50% + 297.5px)' },
    { width: 80, height: 190, top: 0, left: 'calc(50% + 382.5px)' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background with vertical lines and shooting stars */}
      <div className="fixed inset-0 bg-grid">
        {/* Rectangular blocks mosaic at top */}
        {topBlocks.map((block, i) => (
          <div
            key={`block-${i}`}
            className="absolute"
            style={{
              width: `${block.width}px`,
              height: `${block.height}px`,
              top: `${block.top}px`,
              left: block.left,
              background: 'rgba(107, 157, 255, 0.04)',
              border: '1px solid rgba(107, 157, 255, 0.12)',
              borderRadius: '8px',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Vertical lines pattern */}
        {verticalLines.map((line, i) => (
          <div key={i} className="vertical-line" style={{ left: line.left }} />
        ))}
        
        {/* Ambient glow */}
        <div className="ambient-glow" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 radial-gradient-overlay" />
      </div>

      {/* Shooting stars - outside overflow container */}
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1100px] mx-auto text-center space-y-8">
          {/* Badge - animated */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10"
          >
            <span className="text-[13px] text-white" style={{ fontWeight: 400 }}>Join our new Discord!</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </motion.div>

          {/* Main headline - matching reference exactly */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1.15]"
            style={{ letterSpacing: "-0.02em", fontWeight: 500 }}
          >
            Your digital space,{" "}
            <span className="gradient-text will-change-transform">simplified.</span>
          </motion.h1>

          {/* Subheadline - matching reference exactly */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-[15px] md:text-[16px] text-muted-foreground max-w-[900px] mx-auto leading-[1.7]"
            style={{ fontWeight: 400, letterSpacing: "0em" }}
          >
            The luxury privacy-based service dedicated to safeguarding your information in style with our personalized bio-link service, file hosting, and email service.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10"
          >
            <Button 
              size="lg" 
              className="text-white hover:shadow-luxury group px-8 h-12 text-[16px] transition-all duration-200 hover:scale-105 active:scale-98 will-change-transform"
              style={{ 
                fontWeight: 500,
                background: 'linear-gradient(90deg, #6b9dff, #4d7fff, #3366ff)',
                backgroundSize: '200% auto'
              }}
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-card px-8 h-12 text-[16px] hover:border-primary/50 transition-all duration-200 hover:scale-105 active:scale-98 will-change-transform"
              style={{ fontWeight: 500 }}
            >
              Learn More
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="pt-16 flex flex-wrap items-center justify-center gap-8 text-[14px] text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ backgroundColor: '#6b9dff' }} />
              <span>End-to-end encryption</span>
            </div>
            <span className="text-muted-foreground/30">•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ backgroundColor: '#4d7fff', animationDelay: "1s" }} />
              <span>Zero-knowledge architecture</span>
            </div>
            <span className="text-muted-foreground/30">•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ backgroundColor: '#3366ff', animationDelay: "2s" }} />
              <span>GDPR compliant</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
