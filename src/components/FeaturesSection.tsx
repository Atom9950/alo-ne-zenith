import { motion } from "framer-motion";

const FeaturesSection = () => {

  // Generate floating squares positions
  const floatingSquares = [
    { size: 120, top: '10%', left: '5%', delay: 0 },
    { size: 100, top: '20%', left: '85%', delay: 2 },
    { size: 140, top: '45%', left: '10%', delay: 4 },
    { size: 90, top: '75%', left: '15%', delay: 3 },
    { size: 130, top: '30%', left: '50%', delay: 5 },
    { size: 95, top: '55%', left: '40%', delay: 2.5 },
    { size: 105, top: '80%', left: '70%', delay: 4.5 },
    { size: 130, top: '85%', left: '75%', delay: 5 },
    { size: 95, top: '55%', left: '45%', delay: 2.5 },
    { size: 90, top: '75%', left: '20%', delay: 3 },
    { size: 120, top: '10%', left: '10%', delay: 0 },
    { size: 140, top: '45%', left: '15%', delay: 4 },
    { size: 100, top: '20%', left: '80%', delay: 2 },
    { size: 130, top: '30%', left: '55%', delay: 5 },

    

  ];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-tight mb-4 px-4" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>
            Share files, send emails and look cool.
          </h2>
        </motion.div>

        {/* Feature cards - 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* 40+ Domains */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl p-6 sm:p-8 md:p-10 group transition-all duration-300 hover:shadow-glow hover:-translate-y-2 will-change-transform bg-transparent border border-white/20"
            style={{
              boxShadow: 'inset 0 0 10px 10px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[20px] sm:text-[22px] mb-4 leading-tight" 
              style={{ fontWeight: 500 }}
            >
              <span className="gradient-text">40+</span> Domains
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-muted-foreground mb-6 leading-[1.7] text-[14px] sm:text-[15px]" 
              style={{ fontWeight: 400 }}
            >
              We offer a unique selection of domains that you can use to elevate your presence
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
            >
              {['alo.ne', 'afra.id', 'ra.pe', 'sexu.al', 'deni.al', 'excus.es', 'bayon.et', 'karamb.it', 'trapst.ar'].map((domain, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.6 + (i * 0.05), ease: "easeOut" }}
                  className="bg-background border border-border rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-mono" 
                  style={{ fontWeight: 400, color: '#6b9dff' }}
                >
                  {domain}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Unique Email */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="rounded-2xl p-6 sm:p-8 md:p-10 group transition-all duration-300 hover:shadow-glow hover:-translate-y-2 will-change-transform bg-transparent border border-white/20"
            style={{
              boxShadow: 'inset 0 0 10px 10px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[20px] sm:text-[22px] mb-4 leading-tight" 
              style={{ fontWeight: 500 }}
            >
              <span className="gradient-text">Unique</span> Email
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-muted-foreground mb-6 leading-[1.7] text-[14px] sm:text-[15px]" 
              style={{ fontWeight: 400 }}
            >
              The only email provider designed with luxury and privacy in mind
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="bg-background border border-border rounded-lg px-4 py-3 mb-6 overflow-hidden"
            >
              <div className="animate-scroll-horizontal">
                <code className="text-[13px] font-mono" style={{ fontWeight: 400, color: '#6b9dff' }}>
                  t@exitsc.am • doppler@bayon.et • super@sexu.al • walking@afra.id • t@exitsc.am • doppler@bayon.et • super@sexu.al • walking@afra.id
                </code>
              </div>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="text-muted-foreground text-[13px] sm:text-[14px] leading-[1.7]" 
              style={{ fontWeight: 400 }}
            >
              Why have a boring email when you can have a cool one with the added bonus of our minimal-logs policy
            </motion.p>
          </motion.div>

          {/* Secure Filehost */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="rounded-2xl p-6 sm:p-8 md:p-10 group transition-all duration-300 hover:shadow-glow hover:-translate-y-2 will-change-transform bg-transparent border border-white/20"
            style={{
              boxShadow: 'inset 0 0 10px 10px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[20px] sm:text-[22px] mb-4 leading-tight" 
              style={{ fontWeight: 500 }}
            >
              <span className="gradient-text">Secure</span> Filehost
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-muted-foreground mb-6 leading-[1.7] text-[14px] sm:text-[15px]" 
              style={{ fontWeight: 400 }}
            >
              With Alone, you can upload files securely — even we can't access their content. Our open-source end-to-end encryption is also supported on ShareX.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-3 sm:gap-4 text-[12px] sm:text-[13px]" 
              style={{ fontWeight: 400 }}
            >
              {['End-to-End Encryption', 'ShareX Support', '2GB Storage'].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.6 + (i * 0.1), ease: "easeOut" }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-500">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Exclusive Biolink */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="rounded-2xl p-6 sm:p-8 md:p-10 group transition-all duration-300 hover:shadow-glow hover:-translate-y-2 will-change-transform bg-transparent border border-white/20"
            style={{
              boxShadow: 'inset 0 0 10px 10px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[20px] sm:text-[22px] mb-4 leading-tight" 
              style={{ fontWeight: 500 }}
            >
              <span className="gradient-text">Exclusive</span> Biolink
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-muted-foreground mb-6 leading-[1.7] text-[14px] sm:text-[15px]" 
              style={{ fontWeight: 400 }}
            >
              The best domains, with over 170 customization options to ensure you never run out of ways to stand out
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-3 sm:gap-4 text-[12px] sm:text-[13px]" 
              style={{ fontWeight: 400 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                <span style={{ color: '#6b9dff' }}>170+</span>
                <span className="text-muted-foreground">Customization Options</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                <span style={{ color: '#6b9dff' }}>•</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                <span style={{ color: '#6b9dff' }}>20+</span>
                <span className="text-muted-foreground">Domains</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
