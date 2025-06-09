import { useState, useEffect } from 'react';
import { Leaf, Droplets, Truck, Award } from 'lucide-react';

const ProductShowcase = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Visual */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/42cab44f-2061-470e-84e1-ea7cb329a04a.png"
                alt="Feuille de lessive Cliinn - éco-responsable"
                className="w-full h-full object-cover"
              />
              
              {/* Floating animation overlay */}
              {isAnimating && (
                <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
              )}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-emerald-600 font-medium">
                🧪 Une feuille = Un cycle de lavage complet
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                La révolution du nettoyage éco-responsable
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">0 plastique – 100% biodégradable</h4>
                  <p className="text-gray-600">Nos feuilles se dissolvent complètement et respectent l'environnement. Fini les bidons plastiques !</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Ultra efficace – testée en laboratoire</h4>
                  <p className="text-gray-600">Formule concentrée qui rivalise avec les détergents traditionnels. Résultats garantis !</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Livraison compacte et écoresponsable</h4>
                  <p className="text-gray-600">90% moins de volume à transporter. Emballage minimaliste en carton recyclé.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Certifié & approuvé</h4>
                  <p className="text-gray-600">Labels écologiques reconnus. Testé dermatologiquement pour toute la famille.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
