import { useEffect, useRef } from "react";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, 50);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    const section = sectionRef.current;
    if (!section) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const elements = section.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const elements = section.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // Generate floating squares positions
  const floatingSquares = [
    { size: 120, top: '10%', left: '5%', delay: 0 },
    { size: 100, top: '20%', left: '85%', delay: 2 },
    { size: 140, top: '45%', left: '10%', delay: 4 },
    { size: 110, top: '60%', left: '80%', delay: 1 },
    { size: 90, top: '75%', left: '15%', delay: 3 },
    { size: 130, top: '85%', left: '75%', delay: 5 },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Floating squares background pattern */}
      <div className="bg-pattern-squares">
        {floatingSquares.map((square, i) => (
          <div
            key={i}
            className="floating-square"
            style={{
              width: `${square.size}px`,
              height: `${square.size}px`,
              top: square.top,
              left: square.left,
              animationDelay: `${square.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-[36px] md:text-[42px] leading-tight mb-4" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>
            Share files, send emails and look cool.
          </h2>
        </div>

        {/* Feature cards - 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6 stagger-children">
          {/* 40+ Domains */}
          <div className="luxury-card rounded-2xl p-8 md:p-10 group transition-all duration-300 hover:shadow-glow hover:border-primary/30 hover:-translate-y-2 will-change-transform animate-on-scroll">
            <h3 className="text-[22px] mb-4 leading-tight" style={{ fontWeight: 500 }}>
              <span className="gradient-text">40+</span> Domains
            </h3>
            <p className="text-muted-foreground mb-6 leading-[1.7] text-[15px]" style={{ fontWeight: 400 }}>
              We offer a unique selection of domains that you can use to elevate your presence
            </p>
            <div className="grid grid-cols-3 gap-3">
              {['alo.ne', 'afra.id', 'ra.pe', 'sexu.al', 'deni.al', 'excus.es', 'bayon.et', 'karamb.it', 'trapst.ar'].map((domain, i) => (
                <div key={i} className="bg-background border border-border rounded-lg px-3 py-2 text-[13px] font-mono" style={{ fontWeight: 400, color: '#6b9dff' }}>
                  {domain}
                </div>
              ))}
            </div>
          </div>

          {/* Unique Email */}
          <div className="luxury-card rounded-2xl p-8 md:p-10 group transition-all duration-300 hover:shadow-glow hover:border-primary/30 hover:-translate-y-2 will-change-transform animate-on-scroll">
            <h3 className="text-[22px] mb-4 leading-tight" style={{ fontWeight: 500 }}>
              <span className="gradient-text">Unique</span> Email
            </h3>
            <p className="text-muted-foreground mb-6 leading-[1.7] text-[15px]" style={{ fontWeight: 400 }}>
              The only email provider designed with luxury and privacy in mind
            </p>
            <div className="bg-background border border-border rounded-lg px-4 py-3 mb-6 overflow-hidden">
              <div className="animate-scroll-horizontal">
                <code className="text-[13px] font-mono" style={{ fontWeight: 400, color: '#6b9dff' }}>
                  t@exitsc.am • doppler@bayon.et • super@sexu.al • walking@afra.id • t@exitsc.am • doppler@bayon.et • super@sexu.al • walking@afra.id
                </code>
              </div>
            </div>
            <p className="text-muted-foreground text-[14px] leading-[1.7]" style={{ fontWeight: 400 }}>
              Why have a boring email when you can have a cool one with the added bonus of our minimal-logs policy
            </p>
          </div>

          {/* Secure Filehost */}
          <div className="luxury-card rounded-2xl p-8 md:p-10 group transition-all duration-300 hover:shadow-glow hover:border-primary/30 hover:-translate-y-2 will-change-transform animate-on-scroll">
            <h3 className="text-[22px] mb-4 leading-tight" style={{ fontWeight: 500 }}>
              <span className="gradient-text">Secure</span> Filehost
            </h3>
            <p className="text-muted-foreground mb-6 leading-[1.7] text-[15px]" style={{ fontWeight: 400 }}>
              With Alone, you can upload files securely — even we can't access their content. Our open-source end-to-end encryption is also supported on ShareX.
            </p>
            <div className="flex flex-wrap gap-4 text-[13px]" style={{ fontWeight: 400 }}>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">End-to-End Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">ShareX Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">2GB Storage</span>
              </div>
            </div>
          </div>

          {/* Exclusive Biolink */}
          <div className="luxury-card rounded-2xl p-8 md:p-10 group transition-all duration-300 hover:shadow-glow hover:border-primary/30 hover:-translate-y-2 will-change-transform animate-on-scroll">
            <h3 className="text-[22px] mb-4 leading-tight" style={{ fontWeight: 500 }}>
              <span className="gradient-text">Exclusive</span> Biolink
            </h3>
            <p className="text-muted-foreground mb-6 leading-[1.7] text-[15px]" style={{ fontWeight: 400 }}>
              The best domains, with over 170 customization options to ensure you never run out of ways to stand out
            </p>
            <div className="flex flex-wrap gap-4 text-[13px]" style={{ fontWeight: 400 }}>
              <div className="flex items-center gap-2">
                <span style={{ color: '#6b9dff' }}>170+</span>
                <span className="text-muted-foreground">Customization Options</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: '#6b9dff' }}>•</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: '#6b9dff' }}>20+</span>
                <span className="text-muted-foreground">Domains</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
