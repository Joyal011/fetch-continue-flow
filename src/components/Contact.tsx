import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would send the form data to a backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon."
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Visit & Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to meet you! Find us in Lalitpur or send us a message.
          </p>
        </div>

        {/* Location and Map */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <h3 className="text-2xl font-semibold mb-2">Our Location</h3>
            <p className="text-lg text-muted-foreground">Bishram Church, Thasikhel, Lalitpur</p>
            <p className="text-sm text-muted-foreground">M867+FR4, Lalitpur 44700</p>
          </div>
          <div className="max-w-5xl mx-auto animate-fade-up">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=27.6614,85.3140&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bishram Church Location - Thasikhel, Lalitpur"
              />
            </div>
            <div className="text-center mt-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=27.6614,85.3140&query_place_id=ChIJBishram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                <span>View on Google Maps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
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
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="animate-fade-up space-y-8" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@bishramchurch.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+977 1234567890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-8">
              <p className="text-muted-foreground italic mb-4">
                "The Lord is near to all who call on him, to all who call on him in truth."
              </p>
              <p className="text-sm text-muted-foreground">– Psalm 145:18</p>
            </div>

                <div>
                  <h4 className="font-semibold mb-3">Office Hours</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: Closed (Worship Service at 10:00 AM)</p>
                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
