import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import youthCampImage from "@/assets/youth-camp-event.jpg";

interface Notice {
  id: string;
  date: string;
  title: string;
  content: string;
  displayUntil: string;
  image?: string;
}

const NoticeDialog = () => {
  const [open, setOpen] = useState(false);
  const [currentNotice, setCurrentNotice] = useState<Notice | null>(null);

  // Define your notices here
  const notices: Notice[] = [
    {
      id: "sept-12-2022",
      date: "September 12, 2022",
      title: "विशेष सङ्गति सूचना",
      image: youthCampImage,
      content: `प्रिय मण्डली परिवार,
बिश्राम मण्डलि ललितपुर।

भोलि मिति २०७९ साल भाद्र २८ गते शनिबार हुने नियमित सङ्गति, ललितपुरको बिश्राम मण्डलीमा सबै भेला भएर गर्न सम्भव नहुने भएकाले तल उल्लेखित स्थानअनुसार सम्पर्क गरी सङ्गति गर्नुहुन अनुरोध गरिन्छः

• बाडेगाउँ क्षेत्रमा – पास्टर निरक जिउसँग सम्पर्क गर्नुहोस्।
• थापाथली क्षेत्रमा – अनिता नगरकोटि जिउसँग सम्पर्क गर्नुहोस्।

🔹 साथै, भेला हुन नसक्ने विश्वासीहरूलाई बिहान ८:०० – १०:०० बजे आ–आफ्नो घरमै आराधना गर्न अनुरोध गर्दछौँ।

भोलिको आराधना/सङ्गति समय:
🕗 बिहान ८:०० – १०:०० बजे
(किनभने बिहान ७:०० – ११:०० बजे बाहेक अन्य समयमा कर्फ्यु रहनेछ।)

हाम्रो विश्वासमा एकतालाई कायम राख्दै, जहाँ जहाँ हुनुहुन्छ, त्यहाँबाटै परमप्रभुलाई आराधना गरौ।

प्रभुको शेवामा
– पाष्टर दिपक रुचाल
बिश्राम मण्डली ललितपुर नेपाल।`,
      displayUntil: "2026-12-31",
    },
  ];

  useEffect(() => {
    const checkNotice = () => {
      const today = new Date();
      const dismissedNotices = JSON.parse(
        localStorage.getItem("dismissedNotices") || "[]"
      );

      // Find the first notice that should be displayed
      const noticeToShow = notices.find((notice) => {
        const displayUntil = new Date(notice.displayUntil);
        const isDismissed = dismissedNotices.includes(notice.id);
        return today <= displayUntil && !isDismissed;
      });

      if (noticeToShow) {
        setCurrentNotice(noticeToShow);
        setOpen(true);
      }
    };

    // Check for notice after a short delay to allow page to load
    const timer = setTimeout(checkNotice, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (currentNotice) {
      const dismissedNotices = JSON.parse(
        localStorage.getItem("dismissedNotices") || "[]"
      );
      localStorage.setItem(
        "dismissedNotices",
        JSON.stringify([...dismissedNotices, currentNotice.id])
      );
    }
    setOpen(false);
  };

  if (!currentNotice) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 backdrop-blur-sm opacity-90 ring-offset-background transition-all hover:opacity-100 hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-md hover:shadow-lg"
        >
          <X className="h-5 w-5 text-foreground" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader className="space-y-4">
          <div className="text-sm text-muted-foreground text-center">
            {currentNotice.date}
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
            {currentNotice.title}
          </DialogTitle>
        </DialogHeader>

        {currentNotice.image && (
          <div className="mt-4 rounded-lg overflow-hidden">
            <img
              src={currentNotice.image}
              alt={currentNotice.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="mt-6 space-y-4">
          <div className="prose prose-sm md:prose-base max-w-none">
            <div className="whitespace-pre-wrap text-foreground leading-relaxed">
              {currentNotice.content}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoticeDialog;
