import { motion } from "framer-motion";

const stats = [
  { value: "99.99%", label: "Uptime guarantee" },
  { value: "256-bit", label: "AES encryption" },
  { value: "< 100ms", label: "Global latency" },
  { value: "∞", label: "Bandwidth" },
];

const StatsSection = () => {

  // Generate scattered squares for top-right area
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
    <section className="py-24 relative overflow-hidden">
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

      {/* <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass rounded-3xl p-12 md:p-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="text-center space-y-2"
              >
                <div className="text-[36px] gradient-text" style={{ fontWeight: 500 }}>
                  {stat.value}
                </div>
                <div className="text-[13px] text-muted-foreground" style={{ fontWeight: 400 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div> */}
    </section>
  );
};

export default StatsSection;
