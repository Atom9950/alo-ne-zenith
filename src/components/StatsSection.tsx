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
    </section>
  );
};

export default StatsSection;
