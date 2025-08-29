import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

/** Renamed from Navigation -> Navbar to avoid global Navigation API collision */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home", href: "#hero" },
    { id: "about", label: "About", href: "#about" },
    { id: "tokenomics", label: "Tokenomics", href: "#tokenomics" },
    { id: "how-to-buy", label: "How to Buy", href: "#how-to-buy" },
    { id: "community", label: "Community", href: "#community" },
  ];

  // Handle scroll effects and scrollspy
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      // Scrollspy logic
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = scrollTop + 100; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for sticky nav height
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        "matchMedia" in window &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      window.scrollTo({
        top: offsetTop,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }

    setIsOpen(false); // Close mobile menu
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 w-full max-w-full overflow-hidden">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 min-w-0 max-w-full overflow-hidden">
            <button
              onClick={() => scrollToSection("#hero")}
              className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2"
              aria-label="Go to homepage"
            >
              <img
                src="/assets/1.png"
                alt="ABC Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-200"
              />
              <span className="text-xl sm:text-2xl font-black text-primary group-hover:text-primary-glow transition-colors duration-200 break-words">
                TUX
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-[0_2px_0_hsl(var(--primary-dark))]"
                    : "text-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_2px_0_hsl(var(--primary))] hover:translate-y-[-1px]"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 sm:px-6 py-2 rounded-lg shadow-[0_3px_0_#ea580c] hover:shadow-[0_1px_0_#ea580c] transform hover:translate-y-1 transition-all duration-200 border-2 border-orange-600 text-sm sm:text-base"
            >
              <a
                href="https://portal.abs.xyz/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                BUY TUX
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:text-primary-glow hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:ring-offset-2 w-10 h-10"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 sm:w-80 bg-background/95 backdrop-blur-md border-l-2 border-primary/20 max-w-[90vw] overflow-x-hidden"
              >
                <div className="flex flex-col h-full w-full max-w-full overflow-hidden">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between py-6 border-b border-primary/20">
                    <div className="flex items-center space-x-2">
                      <img src="/assets/1.png" alt="TUX Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
                      <span className="text-lg sm:text-xl font-black text-primary break-words">ABC</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-primary hover:text-primary-glow hover:bg-primary/10"
                      aria-label="Close navigation menu"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex-1 py-6 w-full max-w-full overflow-hidden">
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.href)}
                          onKeyDown={(e) => handleKeyDown(e, item.href)}
                          className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm sm:text-base break-words ${
                            activeSection === item.id
                              ? "bg-primary text-primary-foreground shadow-[0_2px_0_hsl(var(--primary-dark))]"
                              : "text-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_2px_0_hsl(var(--primary))] hover:translate-y-[-1px]"
                          }`}
                          aria-current={activeSection === item.id ? "page" : undefined}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="py-4 sm:py-6 border-t border-primary/20 w-full max-w-full overflow-hidden">
                    <Button
                      asChild
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 rounded-lg shadow-[0_3px_0_#ea580c] hover:shadow-[0_1px_0_#ea580c] transform hover:translate-y-1 transition-all duration-200 border-2 border-orange-600 text-sm sm:text-base"
                    >
                      <a
                        href="https://portal.abs.xyz/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BUY ABC
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;