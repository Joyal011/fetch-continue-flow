import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import missionImage from "@/assets/mission-worship.jpg";

const AboutPreview = () => {
  const navigate = useNavigate();
  
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Chosen Generation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering youth through faith, worship, and fellowship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground font-heading">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chosen Generation is the vibrant youth ministry of Bishram Church, dedicated to 
              empowering the next generation to live bold, faith-filled lives. We create a 
              dynamic space where young people can encounter God, build authentic relationships, 
              and discover their purpose.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate("/about")}
              className="shadow-elevated"
            >
              Learn More About Us
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-300">
            <img 
              src={missionImage} 
              alt="Worship at Chosen Generation" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-8 bg-gradient-to-br from-card to-muted/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-primary/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary mb-4 flex items-center justify-center">
              <span className="text-2xl text-white">✝️</span>
            </div>
            <h4 className="font-bold text-xl mb-3 text-foreground">Faith</h4>
            <p className="text-muted-foreground">
              Grounded in God's Word and passionate about worship
            </p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-card to-muted/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-secondary/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent mb-4 flex items-center justify-center">
              <span className="text-2xl text-white">🤝</span>
            </div>
            <h4 className="font-bold text-xl mb-3 text-foreground">Fellowship</h4>
            <p className="text-muted-foreground">
              Creating authentic friendships and a supportive community
            </p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-card to-muted/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-accent/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary mb-4 flex items-center justify-center">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h4 className="font-bold text-xl mb-3 text-foreground">Purpose</h4>
            <p className="text-muted-foreground">
              Living with intention and making a difference for Christ
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
