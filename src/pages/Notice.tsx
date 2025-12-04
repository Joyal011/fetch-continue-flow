import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useNotices } from "@/hooks/useNotices";
import { Loader2 } from "lucide-react";

const Notice = () => {
  const { notices, loading, error } = useNotices();

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

              {loading && (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              )}

              {error && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
                  <p className="text-destructive">{error}</p>
                </div>
              )}

              {!loading && !error && notices.length === 0 && (
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <p className="text-muted-foreground">No notices available at the moment.</p>
                </div>
              )}

              <div className="space-y-8">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="bg-card border border-border rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-semibold text-foreground">
                        {notice.title}
                      </h2>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                        {notice.date}
                      </span>
                    </div>
                    {notice.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                          src={notice.image}
                          alt={notice.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                    <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                      {notice.content}
                    </p>
                  </div>
                ))}
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
