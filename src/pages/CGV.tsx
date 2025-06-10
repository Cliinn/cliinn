
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CGV = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>
        
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Conditions Générales de Vente</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Objet</h2>
            <p className="mb-6">
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre Cliinn SAS et ses clients.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Produits</h2>
            <p className="mb-6">
              Cliinn SAS commercialise des produits de nettoyage écologiques sous forme de feuilles solubles.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Prix</h2>
            <p className="mb-6">
              Les prix sont indiqués en euros toutes taxes comprises (TTC). Cliinn SAS se réserve le droit de modifier ses prix à tout moment.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Commande</h2>
            <p className="mb-6">
              Toute commande implique l'acceptation sans réserve des présentes CGV. La validation de votre commande vaut acceptation de ces conditions.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Paiement</h2>
            <p className="mb-6">
              Le paiement s'effectue par carte bancaire ou tout autre moyen de paiement proposé. Le paiement est exigible immédiatement.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Livraison</h2>
            <p className="mb-6">
              Les délais de livraison sont donnés à titre indicatif. En cas de retard, le client sera informé dans les meilleurs délais.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Droit de rétractation</h2>
            <p className="mb-6">
              Conformément au Code de la consommation, vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Garanties</h2>
            <p className="mb-6">
              Nos produits bénéficient de la garantie légale de conformité et de la garantie contre les vices cachés.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Responsabilité</h2>
            <p className="mb-6">
              La responsabilité de Cliinn SAS ne saurait être engagée en cas de dommages indirects ou de force majeure.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Litiges</h2>
            <p className="mb-6">
              En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux français seront compétents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGV;
