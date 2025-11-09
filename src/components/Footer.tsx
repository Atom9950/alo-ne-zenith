import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-border py-12"
    >
     <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
    {/* Brand */}
    <div className="space-y-4">
      <a href="/" className="group relative inline-block pb-2">
        <img src="/image2.png" alt="logo" className="h-8 w-auto transition-transform duration-300 ease-out group-hover:scale-110" />
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full origin-left" 
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)',
                background: 'linear-gradient(to right, transparent 0%, white 50%, transparent 100%)'
              }}></span>
      </a>
      <p className="text-[13px] text-muted-foreground leading-relaxed" style={{ fontWeight: 400 }}>
        Privacy-first digital services for the discerning individual.
      </p>
    </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-[14px] uppercase tracking-wider" style={{ fontWeight: 600 }}>Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Bio Links
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Image Hosting
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Email Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-[14px] uppercase tracking-wider" style={{ fontWeight: 600 }}>Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-[14px] uppercase tracking-wider" style={{ fontWeight: 600 }}>Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-muted-foreground" style={{ fontWeight: 400 }}>
            © {currentYear} alo.ne. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontWeight: 400 }}
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontWeight: 400 }}
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontWeight: 400 }}
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
