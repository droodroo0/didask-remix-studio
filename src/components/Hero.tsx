import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              🚀 Nouveau : IA Pédagogique 2.0
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                La seule plateforme qui
                <span className="bg-gradient-primary bg-clip-text text-transparent"> révolutionne </span>
                l'apprentissage en ligne
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Créez et déployez rapidement des formations 
                <strong className="text-foreground"> vraiment efficaces</strong> grâce à 
                <strong className="text-primary"> l'IA pédagogique</strong> basée sur les sciences cognitives.
              </p>
            </div>

            {/* USP */}
            <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-6 shadow-soft">
              <h2 className="text-2xl font-semibold mb-3 text-foreground">
                L'apprentissage efficace est enfin arrivé !
              </h2>
              <p className="text-muted-foreground">
                La seule IA dérivée des sciences cognitives, pour obtenir de vrais résultats en e-learning.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground shadow-medium hover:shadow-strong transition-all group"
              >
                Réserver une démo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 hover:bg-primary/5 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Voir la vidéo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Noté par plus de <strong>2000+ entreprises</strong>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Plateforme d'apprentissage LearnSmart" 
                className="w-full h-auto animate-float"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-medium animate-float">
                IA Pédagogique
              </div>
              
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur border border-border rounded-2xl p-4 shadow-medium">
                <div className="text-sm font-medium">Sciences cognitives</div>
                <div className="text-xs text-muted-foreground">Apprentissage optimisé</div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl -z-10 blur-3xl transform scale-110" />
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="border-t border-border bg-background/50 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-muted-foreground mb-8">
            Ils nous font confiance pour leurs formations
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Company logos would go here */}
            <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center text-sm font-medium">
              Entreprise A
            </div>
            <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center text-sm font-medium">
              Entreprise B
            </div>
            <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center text-sm font-medium">
              Entreprise C
            </div>
            <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center text-sm font-medium">
              Entreprise D
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;