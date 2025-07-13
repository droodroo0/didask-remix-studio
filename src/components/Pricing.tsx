import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      title: "Essentiel",
      price: "5€",
      description: "Idéal pour débuter",
      features: [
        "3 modules fondamentaux",
        "Support email",
        "Accès 6 mois"
      ],
      highlight: false
    },
    {
      title: "Avancé",
      price: "10€",
      description: "Le plus populaire",
      features: [
        "6 modules complets",
        "Support IA 24/7",
        "Certificat inclus",
        "Accès à vie"
      ],
      highlight: true,
      popular: true
    },
    {
      title: "Expert",
      price: "15€",
      description: "Formation complète",
      features: [
        "10 modules avancés",
        "Coaching personnalisé",
        "Projets pratiques",
        "Accès à vie",
        "Communauté privée"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Une Formation Révolutionnaire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment l'IA peut transformer votre
            compréhension de l'intelligence artificielle
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.title}
              className={`relative border-border hover:shadow-medium transition-all duration-300 animate-fade-in ${
                plan.highlight ? 'border-primary shadow-soft scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Populaire
                </Badge>
              )}
              
              <CardContent className="p-8 text-center">
                {/* Price */}
                <div className="mb-6">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className={`w-full ${plan.highlight ? 'bg-gradient-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} shadow-soft hover:shadow-medium transition-all`}
                >
                  Choisir {plan.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center bg-gradient-primary p-8 rounded-3xl">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Prêt à transformer votre carrière ?
          </h3>
          <Button 
            size="lg" 
            className="bg-background text-primary px-16 py-4 text-xl font-bold hover:bg-secondary transition-all shadow-strong hover:scale-105"
          >
            🚀 Commencer Maintenant
          </Button>
          <p className="text-primary-foreground/80 mt-4">
            ✅ Accès immédiat • Garantie 30 jours • Support inclus
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;