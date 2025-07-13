import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, TrendingUp, Clock, Brain, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Création rapide et déploiement",
      description: "Créez un module en 5 minutes et déployez votre plateforme d'apprentissage en 6 heures.",
      stat: "95%",
      statLabel: "plus rapide",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Simple à utiliser",
      description: "87% des entreprises n'avaient jamais utilisé de plateforme eLearning auparavant.",
      stat: "87%",
      statLabel: "de nouveaux utilisateurs",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Efficacité prouvée",
      description: "94% des apprenants disent que les formations LearnSmart ont un impact positif sur leur travail.",
      stat: "94%",
      statLabel: "de satisfaction",
      color: "text-green-500"
    }
  ];

  const additionalFeatures = [
    {
      icon: Brain,
      title: "IA Pédagogique",
      description: "Notre IA analyse le comportement d'apprentissage pour optimiser l'expérience."
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Réduisez de 70% le temps de création de vos contenus pédagogiques."
    },
    {
      icon: Target,
      title: "Résultats mesurables",
      description: "Suivez la progression et l'efficacité de vos formations en temps réel."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Fonctionnalités
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Rapidité, simplicité, efficacité
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez pourquoi plus de 10 000 organisations choisissent LearnSmart 
            pour révolutionner leur approche de la formation.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="relative overflow-hidden border-border hover:shadow-medium transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`mb-6 p-3 rounded-2xl bg-gradient-to-r from-${feature.color.split('-')[1]}-500/10 to-${feature.color.split('-')[1]}-600/10 w-fit`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-4 border-t border-border">
                    <div className={`text-3xl font-bold ${feature.color} mb-1`}>
                      {feature.stat}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 hover:bg-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-2 rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 rounded-3xl shadow-strong">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Prêt à révolutionner votre formation ?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Rejoignez les milliers d'entreprises qui ont déjà transformé 
              leur approche de l'apprentissage avec LearnSmart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-background text-primary px-8 py-3 rounded-xl font-semibold hover:bg-secondary transition-colors">
                Commencer gratuitement
              </button>
              <button className="border border-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors">
                Planifier une démo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;