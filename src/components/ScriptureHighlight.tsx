const ScriptureHighlight = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white to-primary/5 shadow-2xl border-2 border-primary/20 animate-fade-up">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary/30 rounded-br-3xl" />
            
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse" style={{ animationDuration: "3s" }} />
            
            <div className="relative z-10 text-center">
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Scripture of the Month
                </span>
              </div>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground mb-6 leading-relaxed">
                "I will give them a heart to know me, that I am the Lord; they will be my people, and I will be their God, for they will return to me with all their heart."
              </p>
              
              <p className="text-lg md:text-xl font-semibold text-primary">
                — Jeremiah 24:7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptureHighlight;
