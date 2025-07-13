import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Maîtrisez l'<span className="text-secondary">IA</span> en 30 Jours
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Formation complète, contenu IA personnalisé, accès à vie
          </p>
          
          {/* Main CTA */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-background text-primary px-16 py-6 text-2xl font-bold hover:bg-secondary transition-all shadow-strong hover:scale-105"
            >
              🚀 Commencer Maintenant
            </Button>
            <p className="text-primary-foreground/80 text-lg">
              À partir de <span className="font-bold text-2xl">5€</span> seulement
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary opacity-95" />
    </section>
  );
};

export default Hero;