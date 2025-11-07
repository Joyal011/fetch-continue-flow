import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border-t border-border py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-6 sm:mb-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Chosen Generation</h3>
            <p className="text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4">
              A vibrant youth ministry empowering the next generation through faith, unity, and fellowship.
            </p>
            <p className="text-xs sm:text-sm text-foreground/70 italic">
              "Let no one despise you for your youth, but set the believers an example." - 1 Timothy 4:12
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-foreground/80">M867+FR4, Lalitpur 44700</span>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Us</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100090456807762"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.instagram.com/chosengeneration.nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
            <p className="text-foreground/80 mt-4 sm:mt-6 text-xs sm:text-sm">
              Follow us on social media to stay updated with events, sermons, and community news.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center">
          <p className="text-foreground/70 text-xs sm:text-sm mb-2">
            © {new Date().getFullYear()} Chosen Generation. All rights reserved.
          </p>
          <p className="text-foreground/60 text-xs sm:text-sm italic px-4">
            "The Lord bless you and keep you; the Lord make his face shine on you." – Numbers 6:24-25
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
