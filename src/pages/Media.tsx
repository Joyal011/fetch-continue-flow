import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import youthCampPoster from "@/assets/youth-camp-poster.png";
const Media = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-heading">
            Media Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of faith, fellowship, and worship in our community
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-heading">
              Church Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our community gatherings and special events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Youth Camp 2025 Card */}
            <Card 
              className="cursor-pointer overflow-hidden group hover:shadow-2xl transition-all duration-300"
              onClick={() => navigate("/youth-camp-2025")}
            >
              <div className="relative h-[400px]">
                <img
                  src={youthCampPoster}
                  alt="Youth Camp 2025 - God & Me"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                      Youth Camp 2025
                    </h3>
                    <p className="text-lg text-muted-foreground mb-3 italic">
                      "God & Me"
                    </p>
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                        Oct 20-22, 2025
                      </span>
                      <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium">
                        Nagarkot
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      View full details and gallery →
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Upcoming Youth Camp 2026 Card */}
            <Card 
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-[400px] bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-4 font-heading">
                      Youth Camp 2026
                    </h3>
                    <p className="text-xl text-muted-foreground mb-6">
                      Coming Soon
                    </p>
                    <div className="space-y-3">
                      <p className="text-lg text-muted-foreground">
                        Stay tuned for details about our next youth camp
                      </p>
                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                        <p className="text-sm font-medium text-primary">
                          Dates to be announced
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  );
};

export default Media;
