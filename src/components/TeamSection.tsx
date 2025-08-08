import { Card, CardContent } from "./ui/card";
import { Github, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dario Vajda",
      role: "Full Stack Developer",
      description: "Odgovoran za kompletnu implementaciju veb aplikacija i optimizaciju performansi.",
      social: {
        github: "#",
        email: "dario@attractsrbija.com"
      }
    },
    {
      name: "Mateo Vajda", 
      role: "Frontend Developer",
      description: "Specijalizovan za kreiranje interaktivnih korisničkih interfejsa i poboljšanje korisničkog iskustva.",
      social: {
        github: "#",
        email: "mateo@attractsrbija.com"
      }
    },
    {
      name: "Milutin Raca",
      role: "Backend Developer", 
      description: "Fokusiran na server logiku, baze podataka i API integracije za stabilne aplikacije.",
      social: {
        github: "#",
        email: "milutin@attractsrbija.com"
      }
    },
    {
      name: "Dušan Veréb",
      role: "UI/UX Designer",
      description: "Kreira intuitivne i estetski privlačne dizajne koji poboljšavaju korisničko iskustvo.",
      social: {
        github: "#",
        email: "dusan@attractsrbija.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Naš tim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upoznajte ljude koji stoje iza svake linije koda i svakog piksela dizajna. 
            Mi smo tim prijatelja koji dele strast prema tehnologiji i kreativnosti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground font-northwell">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4 text-sm">{member.description}</p>

                <div className="flex gap-3">
                  <a 
                    href={member.social.github}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                    title="GitHub"
                  >
                    <Github size={18} className="text-muted-foreground hover:text-primary" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                    title="Email"
                  >
                    <Mail size={18} className="text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Koliko traje izrada sajta?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Vreme izrade zavisi od složenosti projekta, ali generalno:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">3-5</div>
                <div className="text-muted-foreground">dana za jednostavne sajtove</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">7-10</div>
                <div className="text-muted-foreground">dana za srednje složene projekte</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">10-14</div>
                <div className="text-muted-foreground">dana za kompleksne aplikacije</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;