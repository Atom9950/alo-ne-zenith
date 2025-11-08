const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl inline-block" style={{ fontWeight: 600 }}>
              alo<span style={{ color: '#6b9dff' }}>.ne</span>
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
    </footer>
  );
};

export default Footer;
