import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Coffee, Utensils, Dumbbell, Briefcase, Laptop, Smartphone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "Kafići i barovi",
      description: "Kreiranje atmosfernih sajtova sa menijem, galerijom i online rezervacijama.",
      features: ["Online meni", "Galerija ambijenta", "Rezervacije", "Društvene mreže"]
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: "Restorani",
      description: "Funkcionalni sajtovi sa online naručivanjem i menadzmentom rezervacija.",
      features: ["Online poručivanje", "Digitalni meni", "Rezervacije stolova", "Recenzije"]
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-primary" />,
      title: "Teretane i fitnes",
      description: "Motivišući sajtovi sa rasporedom treninga i članskim sistemom.",
      features: ["Raspored časova", "Članstvo", "Treninzi", "Galerija rezultata"]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Mala preduzeća",
      description: "Profesionalni sajtovi koji predstavljaju vaše usluge i privlače klijente.",
      features: ["Portfolio", "Usluge", "Kontakt forme", "Testimonijali"]
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: "Startapovi",
      description: "Inovativni sajtovi koji predstavljaju vašu viziju i privlače investitore.",
      features: ["Landing page", "Pitch deck", "Demo", "Blog"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "E-commerce",
      description: "Funkcionalne online prodavnice sa sigurnim plaćanjem.",
      features: ["Online katalog", "Korpa", "Plaćanje", "Administracija"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Naše usluge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specijalizovani smo za različite branše i razumemo jedinstvene potrebe svakog biznisa. 
            Evo kako možemo pomoći vašoj kompaniji da raste online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Sve što vam treba na jednom mestu
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Od inicijalnog dizajna do lansiranja i održavanja - mi pokrivamo ceo proces kreiranja vašeg online prisustva.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-lg font-semibold text-primary mb-2">Dizajn</div>
                <div className="text-sm text-muted-foreground">UI/UX dizajn prilagođen vašem brendu</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary mb-2">Razvoj</div>
                <div className="text-sm text-muted-foreground">Moderne tehnologije i najbolje prakse</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary mb-2">Testiranje</div>
                <div className="text-sm text-muted-foreground">Temeljno testiranje na svim uređajima</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary mb-2">Održavanje</div>
                <div className="text-sm text-muted-foreground">Kontinuirana podrška i ažuriranja</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;