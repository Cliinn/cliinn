import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/0595006b-b556-48db-b223-a1241bc14be4.png" 
                alt="CLIINN Logo" 
                className="w-8 h-8 mr-2"
              />
              <span className="text-2xl font-bold">CLIINN</span>
            </div>
            <p className="text-gray-400 mb-4">
              Révolutionnons ensemble le ménage avec des solutions 100% écologiques et zéro plastique.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cliinn.eco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">RGPD</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@cliinn.com</span>
              </div>
              <p className="text-sm">
                Une question ? Nous répondons sous 24h !
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CLIINN. Tous droits réservés. Made with 💚 for the planet.
          </p>
          <span className="text-sm text-gray-400 mt-4 md:mt-0">Made in France avec fierté depuis la Bourgogne Franche-Comté</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
