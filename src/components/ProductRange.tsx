
import { Droplets, Utensils, Sparkles, MapPin, Factory, Beaker, Building2, Users, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNewsletterSubscription } from '@/hooks/useNewsletterSubscription';

const ProductRange = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const { subscribeToNewsletter, isSubmitting } = useNewsletterSubscription();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || isSubmitting) return;
    
    const success = await subscribeToNewsletter({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      source: 'product_range'
    });
    
    if (success) {
      setFormData({ firstName: '', lastName: '', email: '' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const products = [
    {
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      title: "Lessive",
      description: "Feuilles de lessive ultra-efficaces pour tous vos textiles. Formule concentrée qui respecte les fibres et l'environnement.",
      features: ["100% biodégradable", "Hypoallergénique", "Parfum naturel"],
      image: "/lovable-uploads/47d0548f-783a-4040-a07d-55a987d890ed.png",
      bgClass: "bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100",
      watermarkImage: "/lovable-uploads/78c8a418-97b3-4309-a748-309afb57a66f.png"
    },
    {
      icon: <Utensils className="w-6 h-6 text-green-500" />,
      title: "Vaisselle",
      description: "Feuilles détergentes pour une vaisselle impeccable. Dégraisse efficacement tout en préservant vos mains.",
      features: ["Dégraissage puissant", "Testée dermatologiquement", "Sans résidus"],
      image: "/lovable-uploads/07bf3260-21b9-44e6-87a1-66c97b8a1b0f.png",
      bgClass: "bg-gradient-to-br from-green-100 to-emerald-100",
      watermarkImage: "/lovable-uploads/fa00225a-c6ac-41bc-8150-3b48e7bb7727.png"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: "Multi-usage",
      description: "Solution polyvalente pour nettoyer toutes les surfaces de votre maison. Un seul produit pour tout nettoyer.",
      features: ["Toutes surfaces", "Désinfectant naturel", "Anti-bactérien"],
      image: "/lovable-uploads/178959c5-5538-4f99-93e5-443d486bf835.png",
      bgClass: "bg-gradient-to-br from-cyan-100 to-blue-100",
      watermarkImage: "/lovable-uploads/eda37cdf-f2e7-4dbf-9aa3-76b51cc90f1d.png"
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
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
              {/* Product Image with gradient background and watermark */}
              <div className={`relative h-80 ${product.bgClass} flex items-center justify-center overflow-hidden`}>
                {/* Watermark image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={product.watermarkImage} 
                    alt={`Background ${product.title.toLowerCase()}`}
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                {/* Product sheet image */}
                <img 
                  src={product.image} 
                  alt={`Feuille ${product.title.toLowerCase()} Cliinn`}
                  className={`relative z-10 ${product.title === 'Lessive' ? 'h-64' : 'h-56'} w-auto object-contain drop-shadow-lg`}
                />
              </div>
              
              <CardHeader className="pb-4">
                {/* Icon and title on the same line */}
                <div className="flex items-center gap-3 justify-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {product.title}
                  </CardTitle>
                </div>
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

          {/* Made in France Badge avec image */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6">
              <div className="inline-flex items-center space-x-3 bg-blue-50 px-6 py-3 rounded-full">
                <span className="text-3xl">🇫🇷</span>
                <div className="text-left">
                  <span className="font-bold text-blue-800 block">Made in France</span>
                  <span className="text-sm text-blue-600">Avec fierté depuis la Bourgogne</span>
                </div>
              </div>
              <img 
                src="/lovable-uploads/6f167489-efd9-4abc-b445-13027cd0cc26.png" 
                alt="Made in France" 
                className="w-20 h-14"
              />
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
            <div className="space-y-4 max-w-lg mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input 
                  type="text" 
                  placeholder="Prénom"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  disabled={isSubmitting}
                />
                <input 
                  type="text" 
                  placeholder="Nom"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
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
