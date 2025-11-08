import { useEffect, useRef } from "react";

const stats = [
  { value: "99.99%", label: "Uptime guarantee" },
  { value: "256-bit", label: "AES encryption" },
  { value: "< 100ms", label: "Global latency" },
  { value: "∞", label: "Bandwidth" },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Generate scattered squares for top-right area
  const scatteredSquares = [
    { size: 40, top: '8%', right: '5%' },
    { size: 35, top: '5%', right: '12%' },
    { size: 45, top: '12%', right: '8%' },
    { size: 30, top: '3%', right: '18%' },
    { size: 38, top: '15%', right: '15%' },
    { size: 42, top: '8%', right: '22%' },
    { size: 33, top: '18%', right: '20%' },
    { size: 36, top: '4%', right: '28%' },
  ];

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

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Scattered squares background pattern */}
      <div className="bg-pattern-squares">
        {scatteredSquares.map((square, i) => (
          <div
            key={i}
            className="scattered-square"
            style={{
              width: `${square.size}px`,
              height: `${square.size}px`,
              top: square.top,
              right: square.right,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="glass rounded-3xl p-12 md:p-16 animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 stagger-children">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-on-scroll"
              >
                <div className="text-[36px] gradient-text" style={{ fontWeight: 500 }}>
                  {stat.value}
                </div>
                <div className="text-[13px] text-muted-foreground" style={{ fontWeight: 400 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
