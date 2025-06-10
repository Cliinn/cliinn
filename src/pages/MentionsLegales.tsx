
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>
        
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Mentions Légales</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Informations légales</h2>
            <p className="mb-6">
              <strong>Dénomination sociale :</strong> Cliinn SAS<br/>
              <strong>Forme juridique :</strong> Société par Actions Simplifiée<br/>
              <strong>Siège social :</strong> [Adresse à compléter]<br/>
              <strong>Capital social :</strong> [Montant à compléter]<br/>
              <strong>RCS :</strong> [Numéro à compléter]<br/>
              <strong>SIRET :</strong> [Numéro à compléter]<br/>
              <strong>TVA Intracommunautaire :</strong> [Numéro à compléter]
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Directeur de la publication</h2>
            <p className="mb-6">
              Le directeur de la publication est le représentant légal de Cliinn SAS.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Hébergement</h2>
            <p className="mb-6">
              Ce site est hébergé par Lovable.<br/>
              Pour plus d'informations sur l'hébergement, visitez : https://lovable.dev
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Propriété intellectuelle</h2>
            <p className="mb-6">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Contact</h2>
            <p className="mb-6">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse : contact@cliinn.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
