import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const HeroSection = () => {
  const headingRef = useRef(null);
  const [headingBottom, setHeadingBottom] = useState(0);

  useEffect(() => {
    const updateHeadingPosition = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        setHeadingBottom(rect.bottom);
      }
    };

    updateHeadingPosition();
    window.addEventListener('resize', updateHeadingPosition);
    return () => window.removeEventListener('resize', updateHeadingPosition);
  }, []);

  // Generate random heights once (not recalculating on each render)
  const [randomHeights] = useState(() => 
    Array.from({ length: 40 }, () => {
      // Check if desktop (window width >= 768px)
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
      // Desktop: 100vh to 200vh, Mobile: 60vh to 150vh
      const minHeight = isDesktop ? 100 : 60;
      const maxHeight = isDesktop ? 200 : 150;
      return minHeight + Math.random() * (maxHeight - minHeight);
    })
  );

 const verticalGridLines = Array.from({ length: 40 }, (_, i) => {
  const totalLines = 40;
  const centerIndex = totalLines / 2;
  const distanceFromCenter = Math.abs(i - centerIndex);
  const maxDistance = totalLines / 2;
  
  // Check if desktop
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  
  // Create inverted semicircular curve - center lines start lower, outer lines start higher
  const curveDepth = 200; // Adjust this value to control curve depth
  const curveOffset = (1 - Math.pow(distanceFromCenter / maxDistance, 2)) * curveDepth;
  
  // For desktop: start from a bit below top of screen with curve (e.g., 100px from top)
  // For mobile: keep original behavior (starting from heading bottom)
  const desktopTopOffset = 300; // Adjust this value to control how far from top
  const topPosition = isDesktop ? desktopTopOffset + curveOffset : headingBottom + curveOffset;
  
  return {
    left: `${i * 2.5}%`,
    height: `${randomHeights[i]}vh`,
    top: `${topPosition}px`,
    opacity: 0.2 + Math.random() * 0.4,
    delay: Math.random() * 2,
  };
});

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Vertical grid lines background - now starting from heading bottom in a curve */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {verticalGridLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: line.opacity, scaleY: 1 }}
            transition={{ duration: 1.5, delay: line.delay, ease: "easeOut" }}
            className="absolute"
            style={{
              left: line.left,
              top: line.top,
              width: '1px',
              height: line.height,
              background: `linear-gradient(to bottom, rgba(107, 157, 255, ${line.opacity}), transparent)`,
              transformOrigin: 'top',
              filter: 'blur(0.5px)',
            }}
          />
        ))}
        
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
      </div>

      {/* Shooting stars - outside overflow container */}
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-[1100px] mx-auto text-center space-y-8">
          {/* Badge - animated */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border border-white/10"
          >
            <span className="text-[12px] sm:text-[13px] text-white" style={{ fontWeight: 400 }}>Join our new Discord!</span>
            <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" />
          </motion.div>

          {/* Main headline - with ref to track position */}
          <motion.h1 
            ref={headingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[1.15] px-4"
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
            className="text-[14px] sm:text-[15px] md:text-[16px] text-muted-foreground max-w-[900px] mx-auto leading-[1.7] px-4"
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
              className="text-white hover:shadow-luxury hover:cursor-not-allowed group px-8 h-12 text-[16px] transition-all duration-200 hover:scale-105 active:scale-98 will-change-transform"
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
              className="border-border hover:bg-card hover:cursor-not-allowed px-8 h-12 text-[16px] hover:border-primary/50 transition-all duration-200 hover:scale-105 active:scale-98 will-change-transform"
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
            className="pt-12 md:pt-16 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[13px] md:text-[14px] text-muted-foreground px-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ backgroundColor: '#6b9dff' }} />
              <span>End-to-end encryption</span>
            </div>
            <span className="text-muted-foreground/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ backgroundColor: '#4d7fff', animationDelay: "1s" }} />
              <span>Zero-knowledge architecture</span>
            </div>
            <span className="text-muted-foreground/30 hidden sm:inline">•</span>
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