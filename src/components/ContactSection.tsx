import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Poruka poslata!",
      description: "Kontaktiraćemo vas u najkraćem roku.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Kontaktirajte nas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Spremni smo da razgovaramo o vašem projektu. Pošaljite nam poruku i počnimo zajedno!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-elegant bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Pošaljite nam poruku</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Ime</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vaše ime"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vaš@email.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Kompanija (opciono)</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Naziv vaše kompanije"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Poruka</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Opišite vaš projekat..."
                    rows={5}
                    required
                    className="bg-background/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Pošaljite poruku
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Direktan kontakt</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@webcraft.rs</p>
                    <p className="text-sm text-muted-foreground">Odgovaramo u roku od 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefon</h4>
                    <p className="text-muted-foreground">+381 60 123 4567</p>
                    <p className="text-sm text-muted-foreground">Pon-Pet 9:00-17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Lokacija</h4>
                    <p className="text-muted-foreground">Beograd, Srbija</p>
                    <p className="text-sm text-muted-foreground">Radimo i remote</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Besplatna konsultacija</h4>
              <p className="text-muted-foreground mb-4">
                Zakazite besplatan razgovor od 30 minuta gde ćemo diskutovati o vašim potrebama 
                i kako možemo pomoći vašem biznisu da raste online.
              </p>
              <Button 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10"
              >
                Zakazać konsultaciju
              </Button>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Česta pitanja</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">Koliko traje izrada sajta?</p>
                  <p className="text-muted-foreground">U zavisnosti od složenosti, 2-6 nedelja.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Da li pružate održavanje?</p>
                  <p className="text-muted-foreground">Da, nudimo pakete za održavanje i podršku.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Koje tehnologije koristite?</p>
                  <p className="text-muted-foreground">React, Next.js, Node.js i moderne web tehnologije.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;