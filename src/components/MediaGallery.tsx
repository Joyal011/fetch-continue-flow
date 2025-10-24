import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
  open: boolean;
  onClose: () => void;
}

const MediaGallery = ({ items, open, onClose }: MediaGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentItem = items[currentIndex];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-0">
        <div className="relative w-full h-full bg-background/95">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 bg-background/80 hover:bg-background"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="flex items-center justify-center h-full p-8">
            {currentItem?.type === "image" ? (
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={currentItem?.src}
                controls
                className="max-w-full max-h-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-4 py-2 rounded-full">
            <span className="text-sm font-medium">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaGallery;
