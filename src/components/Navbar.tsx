import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[1300px] rounded-2xl border  md:px-8 py-3 md:py-4 transition-all duration-300"
          style={{
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            backgroundColor: "rgba(51, 51, 54, 0.4)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
           <div className="container mx-auto px-10 flex items-center justify-between max-w-[1200px]">
  <a href="/" className="group relative inline-block pb-2">
    <img src="/image2.png" alt="logo" className="h-8 w-auto transition-transform duration-300 ease-out group-hover:scale-110" />
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full origin-left" 
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)',
            background: 'linear-gradient(to right, transparent 0%, white 50%, transparent 100%)'
          }}></span>
  </a>
  </div>

            {/* Centered Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 transform -translate-x-1/2">
              <a href="#about" className="text-[14px] text-white/70 hover:text-white hover:cursor-not-allowed transition-colors" style={{ fontWeight: 400 }}>
                About
              </a>
              <a href="#features" className="text-[14px] text-white/70 hover:text-white hover:cursor-not-allowed transition-colors" style={{ fontWeight: 400 }}>
                Features
              </a>
              <a href="#pricing" className="text-[14px] text-white/70 hover:text-white hover:cursor-not-allowed transition-colors" style={{ fontWeight: 400 }}>
                Pricing
              </a>
              <a href="#blog" className="text-[14px] text-white/70 hover:text-white hover:cursor-not-allowed transition-colors" style={{ fontWeight: 400 }}>
                Blog
              </a>
              <a href="#contact" className="text-[14px] text-white/70 hover:text-white hover:cursor-not-allowed transition-colors" style={{ fontWeight: 400 }}>
                Contact
              </a>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <Button 
                size="sm" 
                variant="ghost"
                className="hidden sm:inline-flex text-[14px] text-white/70 hover:text-white hover:bg-transparent hover:cursor-not-allowed transition-colors duration-300 h-8 px-4"
                style={{ fontWeight: 400 }}
              >
                Sign up
              </Button>
              <Button 
                size="sm" 
                className="hidden sm:inline-flex bg-white/10 hover:bg-white/20 hover:cursor-not-allowed text-white border border-white/20 px-5 h-8 text-[14px] transition-all duration-200 rounded-lg"
                style={{ fontWeight: 400 }}
              >
                Login
              </Button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ top: '80px' }}
          >
            <div 
              className="absolute inset-0 bg-background/95 backdrop-blur-lg border-b border-white/10"
              onClick={closeMobileMenu}
            >
              <div className="container mx-auto px-6 py-8 space-y-6">
                <a 
                  href="#about" 
                  onClick={closeMobileMenu}
                  className="block text-[16px] text-muted-foreground hover:text-foreground hover:cursor-not-allowed transition-colors py-2" 
                  style={{ fontWeight: 400 }}
                >
                  About
                </a>
                <a 
                  href="#" 
                  onClick={closeMobileMenu}
                  className="block text-[16px] text-muted-foreground hover:text-foreground hover:cursor-not-allowed transition-colors py-2" 
                  style={{ fontWeight: 400 }}
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  onClick={closeMobileMenu}
                  className="block text-[16px] text-muted-foreground hover:text-foreground hover:cursor-not-allowed transition-colors py-2" 
                  style={{ fontWeight: 400 }}
                >
                  Pricing
                </a>
                <a 
                  href="#blog" 
                  onClick={closeMobileMenu}
                  className="block text-[16px] text-muted-foreground hover:text-foreground hover:cursor-not-allowed transition-colors py-2" 
                  style={{ fontWeight: 400 }}
                >
                  Blog
                </a>
                <a 
                  href="#contact" 
                  onClick={closeMobileMenu}
                  className="block text-[16px] text-muted-foreground hover:text-foreground hover:cursor-not-allowed transition-colors py-2" 
                  style={{ fontWeight: 400 }}
                >
                  Contact
                </a>
                <div className="pt-4 space-y-3 border-t border-white/10">
                  <Button 
                    size="lg" 
                    variant="ghost"
                    className="w-full text-[16px] text-muted-foreground hover:text-foreground hover:bg-transparent hover:cursor-not-allowed transition-colors duration-300"
                    style={{ fontWeight: 400 }}
                    onClick={closeMobileMenu}
                  >
                    Sign up
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border border-border hover:bg-card hover:cursor-not-allowed text-[16px] rounded-lg"
                    style={{ fontWeight: 400 }}
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
