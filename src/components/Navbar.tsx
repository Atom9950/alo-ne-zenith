import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
      style={{
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        backgroundColor: isScrolled ? "rgba(10, 10, 31, 0.8)" : "transparent",
      }}
    >
      <div className="container mx-auto px-10 flex items-center justify-between max-w-[1200px]">
        <a href="#" className="text-2xl" style={{ fontWeight: 600 }}>
          alo<span style={{ color: '#6b9dff' }}>.ne</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
            Features
          </a>
          <a href="#about" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
            About
          </a>
          <a href="#contact" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            size="sm" 
            variant="ghost"
            className="text-[14px] text-muted-foreground hover:text-foreground"
            style={{ fontWeight: 400 }}
          >
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="bg-white text-background hover:bg-white/90 transition-all duration-200 hover:scale-105 active:scale-98 will-change-transform text-[14px]"
            style={{ fontWeight: 500 }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
