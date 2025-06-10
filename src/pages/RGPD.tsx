
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RGPD = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>
        
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">RGPD - Protection des Données</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Qu'est-ce que le RGPD ?</h2>
            <p className="mb-6">
              Le Règlement Général sur la Protection des Données (RGPD) est un règlement européen qui encadre le traitement des données personnelles.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Notre engagement</h2>
            <p className="mb-6">
              Cliinn SAS s'engage à respecter la réglementation en vigueur applicable à la protection des données personnelles.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Vos droits RGPD</h2>
            <p className="mb-6">Le RGPD vous confère les droits suivants :</p>
            <ul className="mb-6 list-disc pl-6">
              <li><strong>Droit d'information :</strong> être informé de la collecte et du traitement de vos données</li>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> demander la correction de données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Comment exercer vos droits ?</h2>
            <p className="mb-6">
              Pour exercer l'un de ces droits, contactez-nous à l'adresse : contact@cliinn.com
            </p>
            <p className="mb-6">
              Nous nous engageons à répondre à votre demande dans un délai d'un mois.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Sécurité des données</h2>
            <p className="mb-6">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Violation de données</h2>
            <p className="mb-6">
              En cas de violation de données susceptible de présenter un risque pour vos droits et libertés, nous vous en informerons dans les meilleurs délais.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Réclamation</h2>
            <p className="mb-6">
              Si vous estimez que le traitement de vos données ne respecte pas le RGPD, vous pouvez introduire une réclamation auprès de la CNIL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RGPD;
