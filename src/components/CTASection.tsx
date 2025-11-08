import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Ready to elevate
            <br />
            your <span className="gradient-text">digital presence?</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the exclusive community of privacy-conscious individuals who demand excellence.
          </p>

          {/* Email form */}
          <div className="max-w-md mx-auto pt-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary border-border h-12 text-base"
              />
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium group h-12 px-8"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No credit card required. 14-day free trial.
            </p>
          </div>

          {/* Security badges */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-6">
            <div className="glass px-4 py-2 rounded-lg text-sm">
              <span className="text-muted-foreground">Secured by</span>
              <span className="ml-2 font-semibold">AES-256</span>
            </div>
            <div className="glass px-4 py-2 rounded-lg text-sm">
              <span className="text-muted-foreground">Certified</span>
              <span className="ml-2 font-semibold">ISO 27001</span>
            </div>
            <div className="glass px-4 py-2 rounded-lg text-sm">
              <span className="text-muted-foreground">Compliant with</span>
              <span className="ml-2 font-semibold">GDPR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
