import { Bot, Euro, Zap, RotateCcw, GraduationCap, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Bot,
      title: "100% Généré par IA",
      description: "Premier au monde : une formation sur l'IA entièrement créée par l'intelligence artificielle. Contenu unique, innovant et constamment mis à jour.",
      color: "text-primary"
    },
    {
      icon: Euro,
      title: "Prix Imbattable",
      description: "Seulement 5€ pour une formation complète qui vaut des centaines d'euros. Accessible à tous, sans compromis sur la qualité.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Accès Instantané",
      description: "Commencez immédiatement après le paiement. Pas d'attente, pas de délai. Votre apprentissage commence maintenant.",
      color: "text-primary"
    },
    {
      icon: RotateCcw,
      title: "Contenu Évolutif",
      description: "L'IA met à jour automatiquement le contenu selon les dernières avancées technologiques. Toujours à la pointe de l'innovation.",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      title: "Apprentissage Personnalisé",
      description: "L'IA adapte le contenu à votre niveau et votre rythme d'apprentissage pour une expérience optimale et efficace.",
      color: "text-primary"
    },
    {
      icon: Headphones,
      title: "Support Intelligent",
      description: "Chatbot IA disponible 24h/24 pour répondre à vos questions et vous guider dans votre apprentissage.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Pourquoi Choisir Notre Formation ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une approche unique qui révolutionne l'apprentissage de l'IA
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 mx-auto">
                <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                  <advantage.icon className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;