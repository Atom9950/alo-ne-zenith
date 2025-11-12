import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = {
  general: [
    {
      question: "What makes alo.ne different from other services?",
      answer: "alo.ne combines three essential digital services with uncompromising privacy. Unlike competitors, we don't track, sell, or analyze your data. Every feature is built with privacy-first architecture.",
    },
    {
      question: "How quickly can I get started?",
      answer: "You can set up your account in under 2 minutes. No credit card required for the 14-day trial. All features are immediately available.",
    },
    {
      question: "Can I use my own domain?",
      answer: "Yes! You can connect custom domains to your bio links and email service. We support over 20+ domain extensions.",
    },
    {
      question: "What are the customization options?",
      answer: "We offer 170+ customization options including themes, layouts, fonts, colors, and advanced CSS controls for power users.",
    },
  ],
  security: [
    {
      question: "How is my data protected?",
      answer: "All data is encrypted with AES-256 encryption at rest and in transit. We use zero-knowledge architecture, meaning even we cannot access your private information.",
    },
    {
      question: "Are you GDPR compliant?",
      answer: "Yes, we're fully GDPR compliant and ISO 27001 certified. Your data is stored in secure European data centers with strict privacy laws.",
    },
    {
      question: "Do you track user activity?",
      answer: "No. We don't use tracking cookies, analytics scripts, or sell your data to third parties. Your privacy is non-negotiable.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You can export all your data at any time. After cancellation, your data is permanently deleted within 30 days.",
    },
  ],
};

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState<"general" | "security">("general");
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

  // Generate random heights once
  const [randomHeights] = useState(() => 
    Array.from({ length: 40 }, () => {
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
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
    
    // Create inverted semicircular curve - center lines start lower, outer lines start higher
    const curveDepth = 150;
    const curveOffset = (1 - Math.pow(distanceFromCenter / maxDistance, 2)) * curveDepth;
    
    return {
      left: `${i * 2.5}%`,
      height: `${randomHeights[i]}vh`,
      top: `${headingBottom + curveOffset}px`,
      opacity: 0.2 + Math.random() * 0.4,
      delay: Math.random() * 2,
    };
  });

  const scatteredSquares = [
    { size: 35, top: '15%', left: '5%' },
    { size: 40, top: '18%', left: '10%' },
    { size: 30, top: '12%', left: '8%' },
    { size: 38, top: '22%', left: '6%' },
    { size: 33, top: '25%', left: '12%' },
    
    { size: 42, top: '10%', left: '6%' },
    { size: 35, top: '15%', left: '18%' },
    { size: 30, top: '20%', left: '10%' },
    { size: 38, top: '25%', left: '20%' },
    { size: 33, top: '30%', left: '23%' },
    { size: 35, top: '35%', left: '22%' },
    { size: 40, top: '40%', left: '27%' },
    { size: 35, top: '45%', left: '25%' },  
    { size: 38, top: '50%', left: '9%' },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Vertical grid lines background - now starting from heading bottom in a curve */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {verticalGridLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: line.opacity, scaleY: 1 }}
            viewport={{ margin: "-100px" }}
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
        
        {scatteredSquares.map((square, i) => (
          <div
            key={i}
            className="scattered-square"
            style={{
              width: `${square.size}px`,
              height: `${square.size}px`,
              top: square.top,
              left: square.left,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
        {/* Section header - with ref to track position */}
        <motion.div 
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[800px] mx-auto text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-tight px-4" style={{ fontWeight: 300, letterSpacing: "-0.01em" }}>
            Frequently <span className="gradient-text">asked</span> questions
          </h2>
          <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-[1.7] px-4" style={{ fontWeight: 400 }}>
            Everything you need to know about our services. Can't find the answer you're looking for? Feel free to contact us.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12 px-4"
        >
          <button
            onClick={() => setActiveTab("general")}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[13px] sm:text-[14px] transition-all duration-200 ${
              activeTab === "general"
                ? "bg-white/10 text-white"
                : "bg-transparent text-muted-foreground hover:text-foreground"
            }`}
            style={{ fontWeight: 400 }}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[13px] sm:text-[14px] transition-all duration-200 ${
              activeTab === "security"
                ? "bg-white/10 text-white"
                : "bg-transparent text-muted-foreground hover:text-foreground"
            }`}
            style={{ fontWeight: 400 }}
          >
            Security
          </button>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-[900px] mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs[activeTab].map((faq, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-transparent border-b border-border/50"
                >
                  <AccordionTrigger className="text-left text-[15px] sm:text-[16px] hover:no-underline py-4 sm:py-6 hover:text-white" style={{ fontWeight: 300 }}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-[1.7] pb-4 sm:pb-6 text-[14px] sm:text-[15px]" style={{ fontWeight: 400 }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;