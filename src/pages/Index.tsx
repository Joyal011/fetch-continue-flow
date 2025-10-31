import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Stats from "@/components/Stats";
import Ministries from "@/components/Ministries";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import NoticeDialog from "@/components/NoticeDialog";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NoticeDialog />
      <Navigation />
      <Hero />
      <Stats />
      <AboutPreview />
      <Ministries />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
