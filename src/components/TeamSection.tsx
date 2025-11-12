import { motion } from "framer-motion";

const TeamSection = () => {
    const scatteredSquares = [
    { size: 40, top: '8%', right: '5%' },
    { size: 35, top: '5%', right: '12%' },
    { size: 45, top: '12%', right: '8%' },
    { size: 30, top: '3%', right: '18%' },
    { size: 38, top: '15%', right: '15%' },
    { size: 42, top: '8%', right: '22%' },
    { size: 33, top: '18%', right: '35%' },
    { size: 36, top: '4%', right: '28%' },
    { size: 30, top: '10%', right: '27%' },
    { size: 35, top: '20%', right: '30%' },
    { size: 30, top: '25%', right: '27%' },
    { size: 32, top: '30%', right: '5%' },
    { size: 34, top: '35%', right: '23%' },
    { size: 36, top: '40%', right: '17%' },
    { size: 38, top: '45%', right: '6%' },
    { size: 40, top: '50%', right: '15%' },
  ];
  return (
    <section className="py-24 md:py-32 relative">
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
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Team Members */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-8 sm:gap-12 justify-center order-2 md:order-1"
          >
            {/* Ryan */}
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-3 sm:mb-4 mx-auto overflow-hidden border border-border" style={{ background: 'linear-gradient(135deg, rgba(107, 157, 255, 0.2), rgba(51, 102, 255, 0.2))' }}>
                <img 
                  src="/image1.png" 
                  alt="Ryan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[16px] sm:text-[18px] mb-1" style={{ fontWeight: 300 }}>Ryan</h3>
              <p className="text-[11px] sm:text-[13px] text-muted-foreground uppercase tracking-wider" style={{ fontWeight: 400 }}>FOUNDER</p>
            </div>

            {/* Iniqus */}
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-3 sm:mb-4 mx-auto overflow-hidden border border-border" style={{ background: 'linear-gradient(135deg, rgba(51, 102, 255, 0.2), rgba(107, 157, 255, 0.2))' }}>
                <img 
                  src="/image.png" 
                  alt="Iniqus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[16px] sm:text-[18px] mb-1" style={{ fontWeight: 300 }}>Iniqus</h3>
              <p className="text-[11px] sm:text-[13px] text-muted-foreground uppercase tracking-wider" style={{ fontWeight: 400 }}>DEVELOPER</p>
            </div>
          </motion.div>

          {/* Team Info */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 order-1 md:order-2"
          >
            <div>
              <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wider mb-2" style={{ fontWeight: 400 }}>THE TEAM</p>
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-tight" style={{ fontWeight: 300, letterSpacing: "-0.01em" }}>
                Meet Our <span className="gradient-text">Team</span>
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] text-muted-foreground leading-[1.8]" style={{ fontWeight: 400 }}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
