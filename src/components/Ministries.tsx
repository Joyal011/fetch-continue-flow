import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, BookOpen, Users, HeartHandshake, Sparkles, Mountain } from "lucide-react";

const Ministries = () => {
  const ministries = [
    {
      icon: Music,
      title: "Worship & Music",
      description: "Experience powerful worship through contemporary music and traditional hymns that connect hearts to God.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      description: "Dive deep into Scripture through interactive studies that equip youth to understand and apply God's Word.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Build authentic friendships in small group settings where youth can share, pray, and grow together.",
      gradient: "from-accent to-primary"
    },
    {
      icon: HeartHandshake,
      title: "Community Outreach",
      description: "Serve the community through compassion projects, demonstrating Christ's love in practical ways.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Sparkles,
      title: "Youth Events",
      description: "Join exciting events, camps, and conferences designed to strengthen faith and create lasting memories.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Mountain,
      title: "Leadership Development",
      description: "Discover and develop your God-given gifts through leadership training and mentorship opportunities.",
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">We Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the various ways we nurture faith, build community, and empower youth to live purposefully
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ministries.map((ministry, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-up overflow-hidden border-2 border-transparent hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${ministry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ministry.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">{ministry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {ministry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
