import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import communityImage from "@/assets/footer-bg.jpg";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${communityImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/85 to-primary/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-white/95 max-w-2xl mx-auto">
            You're invited to be part of something extraordinary
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto italic">
            "For where two or three gather in my name, there am I with them." — Matthew 18:20
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-7 font-semibold shadow-elevated"
              onClick={() => navigate("/events")}
            >
              View Upcoming Events
            </Button>
            <Button
              size="lg"
              className="text-lg px-10 py-7 font-semibold bg-white text-primary hover:bg-white/90 shadow-elevated"
              onClick={() => navigate("/contact")}
            >
              Connect With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default CallToAction;
