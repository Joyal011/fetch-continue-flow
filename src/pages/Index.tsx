import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Stats from "@/components/Stats";
import Ministries from "@/components/Ministries";
import ScriptureHighlight from "@/components/ScriptureHighlight";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Stats />
        <AboutPreview />
        <Ministries />
        <ScriptureHighlight />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
