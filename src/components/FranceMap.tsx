
import { MapPin, Globe, Factory, Beaker } from 'lucide-react';

const FranceMap = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Développement local, déploiement global
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Nous développons nos solutions localement en France pour ensuite les déployer 
          en Europe et à l'international, garantissant qualité et proximité.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* France Map Section */}
        <div className="relative">
          <img 
            src="/lovable-uploads/e82a76ee-a304-49a1-8a01-0c5d820f5f19.png" 
            alt="Carte de France avec nos implantations" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Development & Deployment Info */}
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Factory className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Développement en France</h4>
                <p className="text-sm text-gray-600">
                  R&D en Île-de-France, production en Bourgogne-Franche-Comté
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Déploiement en Europe</h4>
                <p className="text-sm text-gray-600">
                  Extension progressive vers nos voisins européens
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Vision internationale</h4>
                <p className="text-sm text-gray-600">
                  Ambition de porter nos solutions écologiques dans le monde entier
                </p>
              </div>
            </div>
          </div>

          {/* Deployment Timeline */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Feuille de route</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">2024 - Lancement en France</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">2025 - Expansion européenne</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">2026+ - Déploiement international</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranceMap;
