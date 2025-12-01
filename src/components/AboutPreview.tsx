import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Target, Eye, Heart, Sparkles } from "lucide-react";
import missionImage from "@/assets/mission-worship.jpg";

const AboutPreview = () => {
  const navigate = useNavigate();
  
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Empowering the next generation to live bold, faith-filled lives rooted in God's love and purpose.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Building a generation that transforms communities through authentic faith and passionate service.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Faith, unity, authenticity, and compassion guide everything we do as we grow together.",
      gradient: "from-accent to-primary"
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A vibrant community where young people encounter God, build authentic relationships, and discover their divine purpose
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-up border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-muted/10"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={() => navigate("/about")}
              className="font-semibold group"
            >
              Discover Our Story
              <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
