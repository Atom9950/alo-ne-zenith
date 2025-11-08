import { useEffect, useRef } from "react";

const stats = [
  { value: "99.99%", label: "Uptime guarantee" },
  { value: "256-bit", label: "AES encryption" },
  { value: "< 100ms", label: "Global latency" },
  { value: "∞", label: "Bandwidth" },
];

const StatsSection = () => {
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
    <section ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-3xl p-12 md:p-16 animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 stagger-children">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-on-scroll"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
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
