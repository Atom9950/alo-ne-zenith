import { useEffect, useRef } from "react";

const TeamSection = () => {
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
    <section ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Team Members */}
          <div className="flex gap-12 justify-center animate-on-scroll">
            {/* Ryan */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mb-4 mx-auto overflow-hidden border border-border" style={{ background: 'linear-gradient(135deg, rgba(107, 157, 255, 0.2), rgba(51, 102, 255, 0.2))' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full" style={{ background: 'linear-gradient(135deg, #6b9dff, #3366ff)' }}></div>
                </div>
              </div>
              <h3 className="text-[18px] mb-1" style={{ fontWeight: 500 }}>Ryan</h3>
              <p className="text-[13px] text-muted-foreground uppercase tracking-wider" style={{ fontWeight: 400 }}>FOUNDER</p>
            </div>

            {/* Iniqus */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mb-4 mx-auto overflow-hidden border border-border" style={{ background: 'linear-gradient(135deg, rgba(51, 102, 255, 0.2), rgba(107, 157, 255, 0.2))' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full" style={{ background: 'linear-gradient(135deg, #3366ff, #6b9dff)' }}></div>
                </div>
              </div>
              <h3 className="text-[18px] mb-1" style={{ fontWeight: 500 }}>Iniqus</h3>
              <p className="text-[13px] text-muted-foreground uppercase tracking-wider" style={{ fontWeight: 400 }}>DEVELOPER</p>
            </div>
          </div>

          {/* Team Info */}
          <div className="space-y-6 animate-on-scroll">
            <div>
              <p className="text-[12px] text-muted-foreground uppercase tracking-wider mb-2" style={{ fontWeight: 400 }}>THE TEAM</p>
              <h2 className="text-[36px] md:text-[42px] leading-tight" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>
                Meet Our <span className="gradient-text">Team</span>
              </h2>
            </div>

            <div className="space-y-4 text-[15px] text-muted-foreground leading-[1.8]" style={{ fontWeight: 400 }}>
              <p>
                The team behind Alone, a privacy-focused service, includes Ryan and Iniqus as of this moment. Ryan launched the Alo.ne email service in 2023, file hosting in 2024 and a biolink service in 2025.
              </p>
              <p>
                Ryan had maintained alo.ne since its beginning in 2022, managing the service infrastructure as well as the team responsible for development.
              </p>
              <p>
                Iniqus has taken over the development of alo.ne and has been appointed the owner position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
