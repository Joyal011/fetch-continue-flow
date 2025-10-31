import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Chosen Generation has transformed my faith journey. The worship, fellowship, and teachings have helped me grow closer to God and discover my purpose.",
      author: "Sarah M.",
      role: "Youth Member"
    },
    {
      quote: "Being part of this community has given me lifelong friends and a deeper understanding of what it means to live for Christ. The leaders truly care about our spiritual growth.",
      author: "David K.",
      role: "Small Group Participant"
    },
    {
      quote: "Through the youth camps and events, I've experienced God's presence in powerful ways. This ministry has been instrumental in shaping who I am today.",
      author: "Priya S.",
      role: "Worship Team Member"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lives <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transformed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from youth whose lives have been impacted by God's work in our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-up bg-gradient-to-br from-card to-muted/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground/90 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
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
