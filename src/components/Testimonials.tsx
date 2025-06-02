
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lucie M.",
      text: "C'est LA solution que j'attendais ! Enfin un produit qui nettoie aussi bien que les détergents classiques mais sans impact sur l'environnement.",
      rating: 5,
      location: "Paris",
      verified: true
    },
    {
      name: "Thomas R.",
      text: "J'étais sceptique au début, mais après 3 mois d'utilisation, je suis conquis. Mes vêtements sont impeccables et je me sens bien pour la planète.",
      rating: 5,
      location: "Lyon", 
      verified: true
    },
    {
      name: "Sophie L.",
      text: "Pratique, efficace et écologique. Le trio gagnant ! Plus jamais je ne retournerai aux bidons plastiques.",
      rating: 5,
      location: "Marseille",
      verified: true
    }
  ];

  const mediaLogos = [
    "🌱 EcoMag",
    "🏡 MaisonVerte", 
    "♻️ ZeroWaste",
    "🌍 PlaneteFuture"
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ils ont testé et approuvé
          </h3>
          <p className="text-xl text-gray-600">
            Rejoignez des milliers de familles qui ont fait le choix de l'écologie
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                {testimonial.verified && (
                  <span className="ml-2 text-green-600 text-sm font-medium">✓ Achat vérifié</span>
                )}
              </div>
              
              <Quote className="w-8 h-8 text-emerald-200 mb-3" />
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media mentions */}
        <div className="text-center">
          <p className="text-gray-600 mb-6 font-medium">Ils parlent de nous :</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-lg font-semibold text-gray-700">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social proof numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-600">1000+</div>
            <div className="text-gray-600">Familles conquises</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600">98%</div>
            <div className="text-gray-600">Taux de satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600">50kg</div>
            <div className="text-gray-600">Plastique économisé</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600">⭐ 4.9</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
