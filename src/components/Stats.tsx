import { Users, Calendar, Heart, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Active Youth Members",
      color: "from-primary to-secondary"
    },
    {
      icon: Calendar,
      value: "50+",
      label: "Events Annually",
      color: "from-secondary to-accent"
    },
    {
      icon: Heart,
      value: "10+",
      label: "Years of Ministry",
      color: "from-accent to-primary"
    },
    {
      icon: Award,
      value: "6",
      label: "Core Team Members",
      color: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a community that transforms lives through faith
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
