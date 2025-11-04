import { Card, CardContent } from "@/components/ui/card";
import { Quote, Sparkles } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Chosen Generation has transformed my faith journey. The worship, fellowship, and teachings have helped me grow closer to God and discover my purpose.",
      author: "Joel S.",
      role: "Youth Member"
    },
    {
      quote: "Being part of this community has given me lifelong friends and a deeper understanding of what it means to live for Christ. The leaders truly care about our spiritual growth.",
      author: "Dhiraj S.",
      role: "Core Member"
    },
    {
      quote: "Through the youth camps and events, I've experienced God's presence in powerful ways. This ministry has been instrumental in shaping who I am today.",
      author: "Sanjay S.",
      role: "Youth Member"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Real Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lives <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transformed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from youth whose lives have been impacted by God's work in our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-up bg-gradient-to-br from-card to-muted/20 border-2 border-transparent hover:border-primary/20 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <Quote className="w-12 h-12 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />
                <p className="text-foreground/90 italic mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4 relative z-10">
                  <p className="font-semibold text-foreground text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
