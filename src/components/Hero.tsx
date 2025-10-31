import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/chosen-generation-hero.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            Chosen Generation
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-4 max-w-3xl mx-auto font-light drop-shadow-lg">
            Empowering youth through faith, worship, and community
          </p>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto italic drop-shadow-md">
            "I will give them a heart to know me, that I am the Lord; they will be my people, and I will be their God, for they will return to me with all their heart." — Jeremiah 24:7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-7 font-semibold shadow-elevated"
              onClick={() => navigate("/about")}
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary shadow-elevated"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border-4 border-white/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
