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
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
              WebCraft
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Kreiramo moderne veb sajtove koji pokreću biznis malih preduzeća i startapova.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">info@webcraft.rs</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground">+381 60 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">Beograd, Srbija</span>
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
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Usluge
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

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Usluge</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Veb sajtovi za kafiće</li>
              <li>Sajtovi za restorane</li>
              <li>Teretane i fitnes</li>
              <li>Mala preduzeća</li>
              <li>Startap landing page</li>
              <li>E-commerce prodavnice</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Spremni smo da razgovaramo o vašem sledećem projektu.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-2 rounded-lg text-sm hover:shadow-glow transition-all"
            >
              Kontaktirajte nas
            </button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WebCraft. Sva prava zadržana.
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