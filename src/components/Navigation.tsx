import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/bishram-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { label: "Home", path: "/", type: "link" },
    { label: "About", path: "/about", type: "link" },
    { label: "Events", path: "/events", type: "link" },
    { label: "Media", path: "/media", type: "link" },
    { label: "Contact", id: "contact", type: "scroll" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Bishram Church Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-foreground hidden sm:block">
              Bishram Church
            </span>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              item.type === "link" ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          {menuItems.map((item) => (
            item.type === "link" ? (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
                className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id!);
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
