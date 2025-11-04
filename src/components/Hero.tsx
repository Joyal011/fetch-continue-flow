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
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/70 to-accent/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
      </div>

      {/* Decorative Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary/40 via-primary/10 to-transparent blur-xl" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/5 to-transparent blur-xl" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="opacity-0 animate-[fadeIn_1.2s_ease-out_forwards] space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-medium">Youth Ministry & Fellowship</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
            Chosen Generation
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl text-white mb-8 max-w-4xl mx-auto font-light drop-shadow-lg leading-tight">
            A Place of Peace, Faith, and Fellowship
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            We are a youth ministry dedicated to faith, unity, and purpose — building a community where hope thrives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-14 py-8 font-bold shadow-glow bg-primary text-primary-foreground hover:shadow-[0_0_80px_hsl(45_95%_55%/0.6)]"
              onClick={() => navigate("/contact")}
            >
              Join Our Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-14 py-8 font-bold bg-white/15 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/25 hover:border-white/60 shadow-divine"
              onClick={() => navigate("/about")}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-white/60 flex items-start justify-center p-2.5 backdrop-blur-sm bg-white/5">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-24 left-12 w-32 h-32 border-4 border-primary/20 rounded-full animate-pulse blur-sm" />
      <div className="absolute bottom-48 right-24 w-20 h-20 border-4 border-primary/20 rounded-full animate-pulse blur-sm" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-12 w-16 h-16 border-4 border-accent/20 rounded-full animate-pulse blur-sm" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default Hero;
