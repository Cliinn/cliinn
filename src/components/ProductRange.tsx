
import { Droplets, Utensils, Sparkles, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProductRange = () => {
  const products = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Lessive",
      description: "Feuilles de lessive ultra-efficaces pour tous vos textiles. Formule concentrée qui respecte les fibres et l'environnement.",
      features: ["100% biodégradable", "Hypoallergénique", "Parfum naturel"]
    },
    {
      icon: <Utensils className="w-8 h-8 text-green-500" />,
      title: "Vaisselle",
      description: "Feuilles détergentes pour une vaisselle impeccable. Dégraisse efficacement tout en préservant vos mains.",
      features: ["Dégraissage puissant", "Testée dermatologiquement", "Sans résidus"]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Multi-usage",
      description: "Solution polyvalente pour nettoyer toutes les surfaces de votre maison. Un seul produit pour tout nettoyer.",
      features: ["Toutes surfaces", "Désinfectant naturel", "Anti-bactérien"]
    }
  ];

  const locations = [
    { name: "Future usine de production", location: "Yonne, Bourgogne-Franche-Comté" },
    { name: "R&D", location: "Saclay, Essonne" },
    { name: "Développement", location: "Reims" },
    { name: "Innovation", location: "Besançon" },
    { name: "Bureaux", location: "Bourgogne & Paris" }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Product Range Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Notre gamme complète
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions écologiques pour tous vos besoins de nettoyage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {product.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-center">
                  {product.description}
                </CardDescription>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Territory Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Un projet 100% français à l'approche locale
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Originaires de Bourgogne-Franche-Comté, nous développons nos solutions sur plusieurs territoires français 
              pour garantir proximité et qualité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">{location.name}</h4>
                  <p className="text-sm text-gray-600">{location.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-2xl">🇫🇷</span>
              <span className="font-semibold text-blue-800">Fabriqué en France</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
