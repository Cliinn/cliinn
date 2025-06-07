
import { Droplets, Utensils, Sparkles, MapPin, Factory, Beaker, Building2, Users, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNewsletterSubscription } from '@/hooks/useNewsletterSubscription';

const ProductRange = () => {
  const [email, setEmail] = useState('');
  const { subscribeToNewsletter, isSubmitting } = useNewsletterSubscription();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    const success = await subscribeToNewsletter(email, 'product_range');
    
    if (success) {
      setEmail('');
    }
  };

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
    { name: "Future usine de production", location: "Yonne, Bourgogne-Franche-Comté", icon: <Factory className="w-5 h-5 text-blue-600" /> },
    { name: "R&D", location: "Saclay, Île-de-France", icon: <Beaker className="w-5 h-5 text-green-600" /> },
    { name: "Innovation", location: "Besançon, Bourgogne-Franche-Comté", icon: <Sparkles className="w-5 h-5 text-purple-600" /> },
    { name: "Bureaux", location: "Bourgogne & Paris", icon: <Building2 className="w-5 h-5 text-orange-600" /> }
  ];

  const frenchValues = [
    { icon: <Factory className="w-8 h-8 text-blue-600" />, title: "Production locale", description: "Fabrication en Bourgogne-Franche-Comté" },
    { icon: <Beaker className="w-8 h-8 text-green-600" />, title: "Innovation française", description: "R&D développée en Île-de-France" },
    { icon: <Users className="w-8 h-8 text-purple-600" />, title: "Équipe locale", description: "Originaires de Bourgogne-Franche-Comté" },
    { icon: <MapPin className="w-8 h-8 text-orange-600" />, title: "Approche territoriale", description: "Proximité et circuits courts" }
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

        {/* Projet 100% Français Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Un projet 100% français
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Originaires de Bourgogne-Franche-Comté, nous développons nos solutions entre l'Île-de-France 
              et la Bourgogne-Franche-Comté pour garantir proximité et qualité.
            </p>
          </div>

          {/* French Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {frenchValues.map((value, index) => (
              <div key={index} className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Locations */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {locations.map((location, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {location.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{location.name}</h4>
                  <p className="text-sm text-gray-600">{location.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Made in France Badge */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-blue-50 px-6 py-3 rounded-full">
              <span className="text-3xl">🇫🇷</span>
              <div className="text-left">
                <span className="font-bold text-blue-800 block">Made in France</span>
                <span className="text-sm text-blue-600">Avec fierté depuis la Bourgogne</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Rejoignez notre communauté
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Suivez nos aventures et soyez les premiers informés de nos innovations 
              en vous inscrivant à notre newsletter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                disabled={isSubmitting}
              />
              <Button 
                onClick={handleNewsletterSubmit}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Inscription..." : "S'inscrire"}
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Pas de spam, juste nos meilleures actualités et offres exclusives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
