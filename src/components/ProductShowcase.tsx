
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
            <div className="relative mx-auto w-80 h-80 bg-gradient-to-br from-emerald-100 to-green-200 rounded-full flex items-center justify-center">
              {/* Glass of water */}
              <div className="relative w-32 h-40 bg-gradient-to-b from-blue-100 to-blue-200 rounded-b-full border-4 border-blue-300 overflow-hidden">
                {/* Water */}
                <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-blue-400 to-blue-200"></div>
                
                {/* Detergent sheet animation */}
                <div 
                  className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-emerald-200 rounded transition-all duration-2000 ${
                    isAnimating ? 'opacity-0 scale-0 translate-y-8' : 'opacity-100 scale-100 translate-y-0'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-b from-emerald-300 to-emerald-400 rounded shadow-sm"></div>
                </div>
                
                {/* Bubbles */}
                {isAnimating && (
                  <>
                    <div className="absolute bottom-8 left-4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="absolute bottom-12 right-4 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute bottom-6 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                  </>
                )}
              </div>
              
              {/* Floating sheets around */}
              <div className="absolute top-8 left-8 w-8 h-10 bg-emerald-300 rounded opacity-60 animate-pulse"></div>
              <div className="absolute bottom-12 right-8 w-6 h-8 bg-green-300 rounded opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-4 w-5 h-6 bg-emerald-400 rounded opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
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
