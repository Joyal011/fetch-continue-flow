import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Thanks for subscribing! 🎉",
        description: "You'll receive updates about our events and activities.",
      });
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary mb-6 animate-glow">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connected</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive updates about upcoming events, inspiring stories, and opportunities to grow in faith with our community
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg px-6 bg-background/80 backdrop-blur-sm border-2 border-primary/20 focus:border-primary"
                  required
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="h-14 px-8 font-semibold whitespace-nowrap"
                >
                  Subscribe
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="animate-fade-up flex flex-col items-center justify-center py-8">
              <CheckCircle2 className="w-16 h-16 text-primary mb-4 animate-pulse" />
              <p className="text-2xl font-semibold text-foreground">Thank you for subscribing!</p>
              <p className="text-muted-foreground mt-2">Check your email for confirmation.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
