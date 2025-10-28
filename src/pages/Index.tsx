import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import NoticeDialog from "@/components/NoticeDialog";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NoticeDialog />
      <Navigation />
      <Hero />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
