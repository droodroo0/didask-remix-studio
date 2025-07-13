import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Développeuse Web",
      content: "Incroyable ! Pour 5€, j'ai appris plus sur l'IA qu'en des mois de recherches. Le fait que le contenu soit généré par l'IA rend l'expérience encore plus fascinante.",
      rating: 5,
      avatar: "MD"
    },
    {
      name: "Thomas Martin",
      role: "Chef de Projet",
      content: "Le chatbot IA qui m'accompagne est bluffant. Il répond à toutes mes questions avec précision. C'est comme avoir un professeur personnel disponible 24h/24.",
      rating: 5,
      avatar: "TM"
    },
    {
      name: "Sophie Laurent",
      role: "Directrice Marketing",
      content: "Formation révolutionnaire ! Le contenu s'adapte à mon niveau et évolue avec mes progrès. J'ai enfin compris les enjeux de l'IA pour mon entreprise.",
      rating: 5,
      avatar: "SL"
    }
  ];

  const stats = [
    { value: "10 000", label: "Apprenants satisfaits" },
    { value: "4.95", label: "Note moyenne" },
    { value: "95%", label: "Taux de satisfaction" },
    { value: "2 424", label: "Support IA" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Ce Que Disent Nos Apprenants
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de 10,000 personnes ont déjà transformé leur
            compréhension de l'IA
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="border-border hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;