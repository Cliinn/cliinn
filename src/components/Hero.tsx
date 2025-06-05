
import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitted(true);
    toast({
      title: "Inscription réussie ! 🎉",
      description: "Vous recevrez bientôt votre code -25% et vos échantillons de test.",
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full opacity-25"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/670f2f87-4073-4a5c-9b9a-74c9cf83715f.png" 
              alt="CLIINN - Le Geste Clean pour la Planète" 
              className="h-32 md:h-48 w-auto"
            />
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Des feuilles de détergent<br />
            <span className="text-emerald-600">écologiques & zéro plastique</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Recevez <span className="font-bold text-emerald-600">-25%</span> à notre lancement + échantillons gratuits
          </p>
        </div>

        {/* Email signup form */}
        <div className="max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg border-2 border-emerald-200 focus:border-emerald-400"
                required
              />
            </div>
            <Button
              type="submit"
              className="h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <>
                  <Mail className="w-5 h-5 mr-2" />
                  Je veux tester
                </>
              )}
            </Button>
          </form>
          
          <p className="text-sm text-gray-500">
            🔒 Vos données sont protégées - Aucun spam
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-emerald-600 font-medium mb-4">Déjà plus de 1000 personnes inscrites !</p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
            <span>✅ 100% Biodégradable</span>
            <span>✅ Zéro Plastique</span>
            <span>✅ Made in France</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
