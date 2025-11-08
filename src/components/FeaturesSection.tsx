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
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Engineered for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Three premium services. One unified platform. Uncompromising privacy.
          </p>
        </div>

        {/* Feature cards - 2x2 grid on larger screens */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="luxury-card rounded-2xl p-8 md:p-10 hover-scale group transition-all hover:shadow-glow hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                <feature.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />
              </div>

              {/* Title with colored accent */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className={index % 2 === 0 ? 'text-primary' : 'text-secondary'}>
                  {feature.title.split(' ')[0]}
                </span>{' '}
                {feature.title.split(' ').slice(1).join(' ')}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`} />
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
