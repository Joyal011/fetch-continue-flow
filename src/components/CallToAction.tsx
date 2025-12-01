import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import communityImage from "@/assets/footer-bg.jpg";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${communityImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/50 to-accent/70" />
      </div>

      {/* Decorative light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-xl" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-white/15 via-white/3 to-transparent blur-xl" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-up drop-shadow-lg md:drop-shadow-xl rounded-2xl bg-secondary/30 backdrop-blur-md p-6 sm:p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Join the Movement</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Become Part of Our Community
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-white/95 max-w-2xl mx-auto leading-relaxed">
            You're invited to be part of something extraordinary — a place where faith comes alive
          </p>
          <p className="text-base sm:text-lg mb-8 sm:mb-10 text-white/90 max-w-2xl mx-auto italic font-serif">
            "For where two or three gather in my name, there am I with them." — Matthew 18:20
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 font-bold shadow-elevated w-full sm:w-auto min-h-[56px]"
              onClick={() => navigate("/events")}
            >
              View Upcoming Events
            </Button>
            <InteractiveHoverButton
              text="Connect With Us"
              className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 bg-white text-secondary hover:bg-white/90 shadow-elevated w-full sm:w-auto min-h-[56px] min-w-[200px]"
              onClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border-4 border-white/15 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/15 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-20 w-20 h-20 border-4 border-white/10 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default CallToAction;
