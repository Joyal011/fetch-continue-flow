import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";
import NoticeDialog from "@/components/NoticeDialog";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NoticeDialog />
      <Navigation />
      <Hero />
      <AboutPreview />
      <Footer />
    </main>
  );
};

export default Index;
