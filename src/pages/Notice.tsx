import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Notice = () => {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Notices
            </h1>
            
            <div className="space-y-8">
              {/* Notice items will be displayed here */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-foreground">
                    Welcome to Our Notice Board
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Stay updated with the latest announcements and important information from Chosen Generation.
                  Check back regularly for new notices about upcoming events, schedule changes, and community updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
    </PageTransition>
  );
};

export default Notice;
