import { Card } from "@/components/ui/card";
import { Book, Sparkles } from "lucide-react";

const ScriptureHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 border-4 border-secondary/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Foundation of Faith</span>
            </div>
          </div>

          <Card className="p-12 md:p-16 shadow-glow border-2 border-primary/20 animate-fade-up bg-gradient-to-br from-card via-background to-card relative overflow-hidden hover:shadow-divine transition-all duration-500">
            {/* Decorative background with light rays */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-xl" />
            <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-accent/15 via-accent/3 to-transparent blur-xl" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center animate-glow">
                  <Book className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 leading-relaxed text-foreground">
                "I will give them a heart to know me, that I am the Lord. They will be my people, and I will be their God, for they will return to me with all their heart."
              </blockquote>
              
              <p className="text-lg md:text-xl text-center text-muted-foreground font-semibold">
                — Jeremiah 24:7
              </p>
            </div>

            {/* Decorative corners with glow */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-primary/40 rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-secondary/40 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-accent/40 rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-primary/40 rounded-br-2xl" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScriptureHighlight;
