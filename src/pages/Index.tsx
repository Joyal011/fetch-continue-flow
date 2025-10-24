import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NoticeDialog from "@/components/NoticeDialog";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NoticeDialog />
      <Navigation />
      <Hero />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
