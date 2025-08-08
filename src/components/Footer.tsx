import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
              Attract
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Kreiramo digitalna rešenja koja pokreću vaš biznis napred. 
              Specijalizovani smo za lokale, male biznise, teretane i slično.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">attractsrbija@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground">+381 64 273 8831</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">Subotica, Srbija</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">Pon-Sub: 11:00-20:00 (srpsko vreme)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Brzi linkovi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Početna
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  O nama
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Naš tim
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Attract. Sva prava zadržana.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politika privatnosti
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Uslovi korišćenja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;