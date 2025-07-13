import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube,
  ArrowRight
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Produits",
      links: [
        "Plateforme LMS",
        "IA Pédagogique", 
        "Analytics",
        "Intégrations",
        "Mobile App"
      ]
    },
    {
      title: "Solutions",
      links: [
        "Entreprises",
        "Établissements",
        "Formations continues",
        "Certification",
        "Consulting"
      ]
    },
    {
      title: "Ressources",
      links: [
        "Blog",
        "Guides",
        "Webinaires",
        "Centre d'aide",
        "API Documentation"
      ]
    },
    {
      title: "Entreprise",
      links: [
        "À propos",
        "Carrières",
        "Presse",
        "Partenaires",
        "Contact"
      ]
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-foreground">
                Restez à la pointe de l'innovation pédagogique
              </h3>
              <p className="text-lg text-muted-foreground">
                Recevez nos dernières actualités, guides pratiques et invitations aux webinaires exclusifs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Votre email professionnel" 
                className="flex-1"
                type="email"
              />
              <Button className="bg-gradient-primary shadow-soft hover:shadow-medium transition-all group">
                S'abonner
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              En vous inscrivant, vous acceptez de recevoir nos communications. 
              Vous pouvez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="LearnSmart" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                LearnSmart
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              La plateforme d'apprentissage qui combine intelligence artificielle 
              et sciences cognitives pour créer des formations vraiment efficaces.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contact@learnsmart.fr
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +33 1 23 45 67 89
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                15 Rue de l'Innovation, 75001 Paris
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 LearnSmart. Tous droits réservés.
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              CGU
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;