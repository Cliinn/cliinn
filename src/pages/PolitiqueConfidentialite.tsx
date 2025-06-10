
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>
        
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Politique de Confidentialité</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Responsable du traitement</h2>
            <p className="mb-6">
              Cliinn SAS, société par actions simplifiée, est responsable du traitement de vos données personnelles.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Données collectées</h2>
            <p className="mb-6">
              Nous collectons les données suivantes :
            </p>
            <ul className="mb-6 list-disc pl-6">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Données de navigation (cookies, adresse IP)</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Finalités du traitement</h2>
            <p className="mb-6">
              Vos données sont traitées pour :
            </p>
            <ul className="mb-6 list-disc pl-6">
              <li>L'envoi de notre newsletter</li>
              <li>L'amélioration de nos services</li>
              <li>La communication commerciale</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Base légale</h2>
            <p className="mb-6">
              Le traitement de vos données repose sur votre consentement libre et éclairé.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Durée de conservation</h2>
            <p className="mb-6">
              Vos données sont conservées pendant 3 ans à compter de votre dernière interaction avec nos services.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Vos droits</h2>
            <p className="mb-6">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="mb-6 list-disc pl-6">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Contact</h2>
            <p className="mb-6">
              Pour exercer vos droits ou pour toute question, contactez-nous à : contact@cliinn.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
