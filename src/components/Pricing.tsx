import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Lightbulb, GraduationCap, Users } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      icon: Lightbulb,
      title: "Contenu Intelligent",
      description: "Chaque module est généré par des algorithmes d'IA avancés, garantissant un contenu toujours à jour et personnalisé selon votre niveau.",
      features: [
        "Adaptation en temps réel",
        "Contenu personnalisé",
        "Mise à jour automatique"
      ],
      highlight: false
    },
    {
      icon: GraduationCap,
      title: "Modules Complets",
      description: "6 modules progressifs couvrant tous les aspects de l'IA, des bases théoriques aux applications pratiques dans le monde professionnel.",
      features: [
        "6 modules progressifs",
        "Exercices pratiques",
        "Quiz interactifs",
        "Projets concrets"
      ],
      price: "5€",
      priceLabel: "Accès à vie",
      highlight: true,
      popular: true
    },
    {
      icon: Users,
      title: "Support IA 24/7",
      description: "Un chatbot intelligent alimenté par l'IA vous accompagne tout au long de votre apprentissage pour répondre à vos questions.",
      features: [
        "Assistance instantanée",
        "Réponses personnalisées",
        "Disponible 24h/24"
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
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto flex items-center justify-center">
                    <plan.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {plan.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                {plan.price && (
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.priceLabel}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground px-12 py-4 text-lg font-semibold shadow-soft hover:shadow-medium transition-all"
          >
            ▶ Commencer maintenant - 5€
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            ✅ Paiement sécurisé • Accès instantané • Garantie 30 jours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;