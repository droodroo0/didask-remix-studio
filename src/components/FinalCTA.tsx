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
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground">
              Prêt à Maîtriser l'Intelligence Artificielle ?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Rejoignez les milliers d'apprenants qui ont déjà transformé leur compréhension de l'IA
            </p>
          </div>

          {/* Guarantees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <div 
                key={guarantee}
                className="flex items-center gap-3 text-primary-foreground/90 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-left">{guarantee}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-background text-primary px-12 py-4 text-lg font-semibold hover:bg-secondary transition-all shadow-strong hover:scale-105"
            >
              ⚡ Commencer Ma Formation - 5€
            </Button>
            
            {/* Final Guarantee */}
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Garantie 30 jours satisfait ou remboursé</span>
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