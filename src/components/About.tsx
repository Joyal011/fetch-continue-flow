import { Card } from "@/components/ui/card";
import missionImage from "@/assets/mission-worship.jpg";
import valuesImage from "@/assets/values-community.jpg";

const About = () => {
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through worship, Bible study, community service, and fellowship, we equip youth 
              to be ambassadors of Christ in their schools, families, and communities.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={missionImage} 
              alt="Worship at Chosen Generation" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <img 
              src={valuesImage} 
              alt="Community gathering at Chosen Generation" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl font-bold text-foreground font-heading">
              Our Values
            </h3>
            <div className="space-y-4">
              <Card className="p-4 bg-card hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-foreground">Faith</h4>
                <p className="text-muted-foreground">
                  Grounded in God's Word and passionate about worship
                </p>
              </Card>
              <Card className="p-4 bg-card hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-foreground">Fellowship</h4>
                <p className="text-muted-foreground">
                  Creating authentic friendships and a supportive community
                </p>
              </Card>
              <Card className="p-4 bg-card hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-foreground">Purpose</h4>
                <p className="text-muted-foreground">
                  Living with intention and making a difference for Christ
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
