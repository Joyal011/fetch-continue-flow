import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MediaGallery from "@/components/MediaGallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import youthCampPoster from "@/assets/youth-camp-poster.png";
import youthCamp1 from "@/assets/youth-camp-1.png";
import youthCamp2 from "@/assets/youth-camp-2.png";
import youthCamp3 from "@/assets/youth-camp-3.png";
import youthCamp4 from "@/assets/youth-camp-4.png";
import youthCamp5 from "@/assets/youth-camp-5.png";
import youthCamp6 from "@/assets/youth-camp-6.png";
import youthCamp7 from "@/assets/youth-camp-7.png";
import youthCamp8 from "@/assets/youth-camp-8.jpg";
import youthCamp9 from "@/assets/youth-camp-9.jpg";
import youthCamp10 from "@/assets/youth-camp-10.jpg";
import youthCamp11 from "@/assets/youth-camp-11.jpg";
import youthCamp12 from "@/assets/youth-camp-12.jpg";
import youthCamp13 from "@/assets/youth-camp-13.jpg";
import youthCamp14 from "@/assets/youth-camp-14.jpg";
import youthCamp15 from "@/assets/youth-camp-15.jpg";
import youthCamp16 from "@/assets/youth-camp-16.jpg";
import youthCampVideo1 from "@/assets/youth-camp-video-1.mp4";
import youthCampVideo2 from "@/assets/youth-camp-video-2.mp4";
import youthCampVideo3 from "@/assets/youth-camp-video-3.mp4";
import youthCampVideo4 from "@/assets/youth-camp-video-4.mp4";
import youthCampVideo5 from "@/assets/youth-camp-video-5.mp4";

const YouthCamp2025 = () => {
  const navigate = useNavigate();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "photos" | "videos">("all");

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
    { type: "image" as const, src: youthCamp11, alt: "Youth Camp 2025 - Food Preparation" },
    { type: "image" as const, src: youthCamp12, alt: "Youth Camp 2025 - Cooking Together" },
    { type: "image" as const, src: youthCamp13, alt: "Youth Camp 2025 - Mealtime" },
    { type: "image" as const, src: youthCamp14, alt: "Youth Camp 2025 - Food Ministry" },
    { type: "image" as const, src: youthCamp15, alt: "Youth Camp 2025 - Worship Gathering" },
    { type: "image" as const, src: youthCamp16, alt: "Youth Camp 2025 - Prayer Session" },
    { type: "video" as const, src: youthCampVideo1, alt: "Youth Camp 2025 - Video 1" },
    { type: "video" as const, src: youthCampVideo2, alt: "Youth Camp 2025 - Video 2" },
    { type: "video" as const, src: youthCampVideo3, alt: "Youth Camp 2025 - Video 3" },
    { type: "video" as const, src: youthCampVideo4, alt: "Youth Camp 2025 - Video 4" },
    { type: "video" as const, src: youthCampVideo5, alt: "Youth Camp 2025 - Video 5" },
  ];

  const filteredMedia = youthCampMedia.filter(item => {
    if (filter === "photos") return item.type === "image";
    if (filter === "videos") return item.type === "video";
    return true;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/media")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Media
          </Button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Poster */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={youthCampPoster}
                alt="Youth Camp 2025 - God & Me"
                className="w-full h-auto"
              />
            </div>

            {/* Event Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-4 text-foreground font-heading">
                  Youth Camp 2025
                </h1>
                <p className="text-2xl text-muted-foreground italic mb-2">
                  "God & Me"
                </p>
                <p className="text-lg text-muted-foreground">
                  A weekend to grow, connect, and have fun!
                </p>
              </div>

              <Card className="p-6 bg-primary/5">
                <h3 className="text-xl font-bold mb-3 text-foreground">Event Details</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Date:</strong> October 20-22, 2025</p>
                  <p><strong className="text-foreground">Location:</strong> Dhadgaun, Nagarkot</p>
                </div>
              </Card>

              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Highlights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Games & challenges
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Worship & prayer sessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Group discussions & drama nights
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Fellowship meals and outdoor activities
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground">
                Join us for an unforgettable weekend of spiritual growth, meaningful connections, 
                and fun activities in the beautiful mountains of Nagarkot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-heading">
              Event Gallery
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Relive the memorable moments from Youth Camp 2025
            </p>
            
            {/* Filter Buttons */}
            <div className="flex gap-3 flex-wrap">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
              >
                All ({youthCampMedia.length})
              </Button>
              <Button
                variant={filter === "photos" ? "default" : "outline"}
                onClick={() => setFilter("photos")}
              >
                Photos ({youthCampMedia.filter(item => item.type === "image").length})
              </Button>
              <Button
                variant={filter === "videos" ? "default" : "outline"}
                onClick={() => setFilter("videos")}
              >
                Videos ({youthCampMedia.filter(item => item.type === "video").length})
              </Button>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredMedia.map((item, index) => (
              <div
                key={index}
                className="aspect-square cursor-pointer overflow-hidden rounded-lg group hover:shadow-lg transition-shadow relative"
                onClick={() => setGalleryOpen(true)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <MediaGallery
        items={filteredMedia}
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />

      <Footer />
    </main>
  );
};

export default YouthCamp2025;
