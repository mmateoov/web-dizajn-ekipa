import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Attract
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Početna
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              O nama
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Naš tim
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Početna
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                O nama
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Naš tim
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;