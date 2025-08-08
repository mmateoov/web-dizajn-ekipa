import { Card, CardContent } from "./ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Moderan kod",
      description: "Koristimo najnovije tehnologije i beste practice za kreiranje brzih i sigurnih veb sajtova."
    },
    {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "Kreativni dizajn",
      description: "Svaki sajt kreiramo prilagođeno vašem brendu i ciljevima, sa fokusom na korisničko iskustvo."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Brza realizacija",
      description: "Efikasno upravljamo projektima i omogućavamo vam da se fokusirate na svoj posao."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Podrška",
      description: "Pružamo kontinuiranu podršku i održavanje kako bi vaš sajt uvek radio besprekorno."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            O nama
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Attract je tim mladih, kreativnih programera posvećenih kreiranju izuzetnih digitalnih iskustava. 
            Verujemo da svaki biznis, bez obzira na veličinu, zaslužuje profesionalan i funkcionalan veb sajt 
            koji će privući klijente i povećati prodaju.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Zašto odabrati nas?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Razumemo izazove lokala, malih biznisa i teretana. Naš cilj nije samo da kreiramo veb sajt, 
              već da vam pomognemo da rastete i privučete više klijenata. Kombinujemo kreativnost sa 
              tehnološkim znanjem kako bismo vam pružili rešenja koja stvarno rade.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Mobilno optimizovano</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">7-14</div>
                <div className="text-muted-foreground">dana za realizaciju</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;