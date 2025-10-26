import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Youth Camp 2025",
      date: "January 15-20, 2025",
      time: "All Day",
      location: "Bishram Church Campus",
      description: "Join us for an incredible week of worship, fellowship, and spiritual growth designed specifically for youth.",
      link: "/youth-camp-2025"
    },
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "Bishram Church, Thasikhel",
      description: "Join us every Sunday for worship, prayer, and biblical teaching."
    },
    {
      title: "Youth Fellowship",
      date: "Every Friday",
      time: "6:00 PM",
      location: "Bishram Church, Thasikhel",
      description: "A time for young people to connect, share, and grow together in faith."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Upcoming Events
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us for worship, fellowship, and community events
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="animate-fade-up border-none shadow-xl" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    {event.link && (
                      <Link to={event.link}>
                        <Button>Learn More</Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Events;
