import { Link, Mail, ImageIcon } from "lucide-react";

const features = [
  {
    icon: Link,
    title: "Bio Links",
    description: "Your digital identity, elevated. Create a stunning, personalized link hub that reflects your brand.",
    highlights: ["Custom domains", "Analytics dashboard", "Unlimited links"],
  },
  {
    icon: ImageIcon,
    title: "Image Hosting",
    description: "Premium storage for your visual content. Lightning-fast CDN delivery with military-grade encryption.",
    highlights: ["Instant uploads", "Private galleries", "Direct links"],
  },
  {
    icon: Mail,
    title: "Email Service",
    description: "Correspondence reimagined. Secure, ad-free email with your custom domain and complete privacy.",
    highlights: ["Custom addresses", "Spam protection", "Zero tracking"],
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
            Engineered for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Three premium services. One unified platform. Uncompromising privacy.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="luxury-card rounded-2xl p-8 hover-scale group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
