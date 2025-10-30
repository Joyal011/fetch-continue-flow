import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import missionImage from "@/assets/mission-worship.jpg";

const AboutPreview = () => {
  const navigate = useNavigate();
  
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            About Chosen Generation
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
              className="hover:scale-105 transition-transform"
            >
              Learn More About Us
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={missionImage} 
              alt="Worship at Chosen Generation" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-xl mb-3 text-foreground">Faith</h4>
            <p className="text-muted-foreground">
              Grounded in God's Word and passionate about worship
            </p>
          </Card>
          <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-xl mb-3 text-foreground">Fellowship</h4>
            <p className="text-muted-foreground">
              Creating authentic friendships and a supportive community
            </p>
          </Card>
          <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
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
