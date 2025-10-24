import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MediaGallery from "@/components/MediaGallery";
import { Card } from "@/components/ui/card";
import youthCamp1 from "@/assets/youth-camp-1.png";
import youthCamp2 from "@/assets/youth-camp-2.png";
import youthCamp3 from "@/assets/youth-camp-3.png";
import youthCamp4 from "@/assets/youth-camp-4.png";
import youthCamp5 from "@/assets/youth-camp-5.png";
import youthCamp6 from "@/assets/youth-camp-6.png";
import youthCamp7 from "@/assets/youth-camp-7.png";
import youthCamp8 from "@/assets/youth-camp-8.png";
import youthCamp9 from "@/assets/youth-camp-9.png";
import youthCamp10 from "@/assets/youth-camp-10.png";

const Media = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const youthCampMedia = [
    { type: "image" as const, src: youthCamp1, alt: "Youth Camp 2025 - Group Prayer" },
    { type: "image" as const, src: youthCamp2, alt: "Youth Camp 2025 - Speaker Session" },
    { type: "image" as const, src: youthCamp3, alt: "Youth Camp 2025 - Fellowship Meal" },
    { type: "image" as const, src: youthCamp4, alt: "Youth Camp 2025 - Worship Service" },
    { type: "image" as const, src: youthCamp5, alt: "Youth Camp 2025 - Youth Engagement" },
    { type: "image" as const, src: youthCamp6, alt: "Youth Camp 2025 - Community Time" },
    { type: "image" as const, src: youthCamp7, alt: "Youth Camp 2025 - Praise and Worship" },
    { type: "image" as const, src: youthCamp8, alt: "Youth Camp 2025 - Teaching Session" },
    { type: "image" as const, src: youthCamp9, alt: "Youth Camp 2025 - Group Ministry" },
    { type: "image" as const, src: youthCamp10, alt: "Youth Camp 2025 - Outdoor Fellowship" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-heading">
            Media Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of faith, fellowship, and worship at Bishram Church
          </p>
        </div>
      </section>

      {/* Youth Camp 2025 Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-heading">
              Youth Camp 2025
            </h2>
            <p className="text-lg text-muted-foreground">
              A transformative experience of worship, learning, and fellowship for our youth
            </p>
          </div>

          <Card 
            className="cursor-pointer overflow-hidden group hover:shadow-2xl transition-all duration-300"
            onClick={() => setGalleryOpen(true)}
          >
            <div className="relative h-96">
              <img
                src={youthCamp1}
                alt="Youth Camp 2025 Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-3xl font-bold text-foreground mb-2 font-heading">
                    View Gallery
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {youthCampMedia.length} photos and videos
                  </p>
                  <div className="flex gap-2">
                    <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      Photos
                    </span>
                    <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                      Videos (Coming Soon)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
            {youthCampMedia.slice(0, 10).map((item, index) => (
              <div
                key={index}
                className="aspect-square cursor-pointer overflow-hidden rounded-lg group hover:shadow-lg transition-shadow"
                onClick={() => setGalleryOpen(true)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <MediaGallery
        items={youthCampMedia}
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />

      <Footer />
    </main>
  );
};

export default Media;
