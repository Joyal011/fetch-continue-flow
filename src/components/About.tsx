import { Card } from "@/components/ui/card";
import communityImage from "@/assets/community-fellowship.jpg";
import peacefulImage from "@/assets/peaceful-nature.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            About Bishram Church
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A community united in faith, worship, and service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground font-heading">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bishram Church is dedicated to spreading the love of Christ through worship, 
              fellowship, and community service. We believe in creating a welcoming space 
              where everyone can experience God's peace and grow in their faith journey.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our church is committed to nurturing spiritual growth, supporting families, 
              and empowering youth to live out their faith in meaningful ways.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={communityImage} 
              alt="Community fellowship at Bishram Church" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <img 
              src={peacefulImage} 
              alt="Peaceful worship environment" 
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
                  Rooted in biblical truth and growing in relationship with God
                </p>
              </Card>
              <Card className="p-4 bg-card hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-foreground">Fellowship</h4>
                <p className="text-muted-foreground">
                  Building genuine connections and supporting one another
                </p>
              </Card>
              <Card className="p-4 bg-card hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-foreground">Service</h4>
                <p className="text-muted-foreground">
                  Making a positive impact in our community through love and action
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
