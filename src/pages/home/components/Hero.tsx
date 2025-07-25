import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "99%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support" },
];

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">
              Premium Tech Collection
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Future of Tech
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience cutting-edge technology with our curated collection of
            premium devices designed for the modern lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToProducts}
              className="group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-white/30 rounded-full">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
