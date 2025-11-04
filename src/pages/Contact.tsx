import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      setIsSubmitting(true);

      // Send email using EmailJS
      await emailjs.send(
        "service_11x41qp", // Service ID
        "template_aekb358", // Template ID
        {
          from_name: validatedData.name,
          from_email: validatedData.email,
          message: validatedData.message,
          to_name: "Chosen Generation",
        },
        "bFSmcdkK2QNIRQHTX" // EmailJS public key
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon."
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navigation />
      <div className="pt-20">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you! Send us a message or visit us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="animate-fade-up border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="animate-fade-up space-y-8" style={{ animationDelay: "0.2s" }}>
                <div className="bg-secondary/50 rounded-2xl p-8">
                  <p className="text-muted-foreground italic mb-4">
                    "The Lord is near to all who call on him, to all who call on him in truth."
                  </p>
                  <p className="text-sm text-muted-foreground">– Psalm 145:18</p>
                </div>

                <Card className="p-6 border-none shadow-xl">
                  <h4 className="font-semibold mb-4 text-xl">Connect With Us</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Location</h5>
                      <p className="text-muted-foreground">Chosen Generation</p>
                      <p className="text-muted-foreground">Thasikhel, Lalitpur</p>
                      <p className="text-muted-foreground">M867+FR4, Lalitpur 44700</p>
                    </div>

                    <div className="border-t pt-4">
                      <h5 className="font-medium mb-3">Follow Us</h5>
                      <div className="space-y-3">
                        <a 
                          href="https://www.instagram.com/chosengeneration.nepal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="text-lg">📷</span>
                          </div>
                          <span className="font-medium">Instagram: @chosengeneration.nepal</span>
                        </a>
                        
                        <a 
                          href="https://www.facebook.com/profile.php?id=100090456807762"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="text-lg">📘</span>
                          </div>
                          <span className="font-medium">Facebook: Chosen Generation</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
    </PageTransition>
  );
};

export default ContactPage;
