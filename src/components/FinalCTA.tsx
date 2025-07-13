import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

const FinalCTA = () => {
  const guarantees = [
    "Accès immédiat après paiement",
    "Contenu 100% généré par IA", 
    "Support intelligent 24h/24",
    "Garantie satisfait ou remboursé"
  ];

  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold text-primary-foreground">
              Commencez Aujourd'hui
            </h2>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-background text-primary px-20 py-8 text-3xl font-bold hover:bg-secondary transition-all shadow-strong hover:scale-105"
            >
              🚀 JE COMMENCE MAINTENANT
            </Button>
            
            <p className="text-2xl text-primary-foreground/90 font-semibold">
              À partir de 5€ seulement
            </p>
            
            {/* Final Guarantee */}
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <Shield className="h-6 w-6" />
              <span className="text-lg">Garantie 30 jours satisfait ou remboursé</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary opacity-90" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-32 right-20 w-32 h-32 bg-primary-foreground/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-primary-foreground/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary-foreground/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
};

export default FinalCTA;