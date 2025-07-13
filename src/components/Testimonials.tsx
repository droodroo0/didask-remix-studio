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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Témoignages
          </h2>
        </div>

        {/* Single testimonial spotlight */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="border-primary/20 shadow-medium">
            <CardContent className="p-8">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl text-muted-foreground mb-8 italic leading-relaxed">
                "Formation exceptionnelle ! En 2 semaines, j'ai acquis des compétences IA que je n'aurais jamais imaginé maîtriser. Le contenu personnalisé et le support 24/7 font toute la différence."
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  M
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground text-lg">Marie Dubois</div>
                  <div className="text-muted-foreground">Développeuse Web</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;