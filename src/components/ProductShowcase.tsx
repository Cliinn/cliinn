
import { Leaf, Droplets, Package } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Découvrez nos feuilles de détergent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Révolutionnez votre façon de faire la lessive avec nos feuilles ultra-concentrées, 
            écologiques et zéro plastique.
          </p>
        </div>

        {/* Main showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-8 lg:p-12">
              <img 
                src="/lovable-uploads/843feb82-71f0-45c0-bd71-244fe6b89994.png" 
                alt="Feuille de détergent CLIINN dans une main"
                className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              100% Bio
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              Zéro déchet
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Biodégradable</h3>
                <p className="text-gray-600">
                  Nos feuilles se dissolvent complètement et ne laissent aucun résidu nocif pour l'environnement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ultra-concentré</h3>
                <p className="text-gray-600">
                  Une seule feuille suffit pour une machine complète, même pour le linge très sale.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Packaging écologique</h3>
                <p className="text-gray-600">
                  Emballage en carton recyclé, aucun plastique. Compact et facile à stocker.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-emerald-50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">90%</div>
            <p className="text-gray-600">Moins de plastique que les détergents traditionnels</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
            <p className="text-gray-600">Réduction du volume de transport</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-gray-600">Satisfaction client garantie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
