import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Marko Petrović",
      role: "Frontend Developer",
      image: teamMember1,
      description: "Specijalizovan za React i moderne frontend tehnologije. Kreiram interaktivna korisnička iskustva.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      social: {
        github: "#",
        linkedin: "#",
        email: "marko@webcraft.rs"
      }
    },
    {
      name: "Ana Jovanović",
      role: "UI/UX Designer",
      image: teamMember2,
      description: "Fokusiram se na kreiranje intuitivnih dizajna koji kombinuju estetiku sa funkcionalnosti.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      social: {
        github: "#",
        linkedin: "#",
        email: "ana@webcraft.rs"
      }
    },
    {
      name: "Stefan Nikolić",
      role: "Full-Stack Developer",
      image: teamMember3,
      description: "Radim na kompletnim rešenjima od backend logike do frontend implementacije.",
      skills: ["Node.js", "React", "MongoDB", "API Development"],
      social: {
        github: "#",
        linkedin: "#",
        email: "stefan@webcraft.rs"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4 text-sm">{member.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={member.social.github}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                    title="GitHub"
                  >
                    <Github size={18} className="text-muted-foreground hover:text-primary" />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
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
              Pridružite se našoj priči
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Mi verujemo da su najbolji projekti rezultat odlične saradnje između tima i klijenata. 
              Vaša vizija kombinovana sa našim znanjem kreira izuzetne rezultate.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Godine iskustva</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Tehnologija koje koristimo</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Posvećenost kvalitetu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;