import { useState } from "react";
import { Input } from "@/components/ui/input";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      try {
        await emailjs.send(
          "service_xmj1h5f", // EmailJS Service ID
          "template_5v1n4ib", // EmailJS Template ID
          {
            to_email: email,
            from_name: "Chosen Generation",
            message: "Thank you for subscribing to our newsletter!",
          },
          "kZVDVKLdYvKslPL5b" // EmailJS Public Key
        );
        
        setIsSubmitted(true);
        toast({
          title: "Thanks for subscribing! 🎉",
          description: "You'll receive updates about our events and activities.",
        });
        setTimeout(() => {
          setEmail("");
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error("Newsletter subscription error:", error);
        toast({
          title: "Subscription failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-primary to-secondary mb-4 sm:mb-6 animate-glow">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connected</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Subscribe to receive updates about upcoming events, inspiring stories, and opportunities to grow in faith with our community
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto px-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 sm:h-14 text-base sm:text-lg px-4 sm:px-6 bg-background/80 backdrop-blur-sm border-2 border-primary/20 focus:border-primary"
                  required
                />
                <InteractiveHoverButton 
                  type="submit"
                  text={isLoading ? "Subscribing..." : "Subscribe"}
                  className="h-12 sm:h-14 px-6 sm:px-8 whitespace-nowrap w-full sm:w-auto min-w-[140px]"
                  disabled={isLoading}
                />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 px-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="animate-fade-up flex flex-col items-center justify-center py-6 sm:py-8 px-4">
              <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-3 sm:mb-4 animate-pulse" />
              <p className="text-xl sm:text-2xl font-semibold text-foreground">Thank you for subscribing!</p>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">Check your email for confirmation.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
