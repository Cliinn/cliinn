
import { useState } from 'react';
import { Gift, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const LeadMagnetReminder = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitted(true);
    toast({
      title: "Parfait ! 🎁",
      description: "Votre code -10% et votre guide écolo arrivent dans votre boîte mail !",
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="py-20 bg-gradient-to-r from-emerald-500 to-green-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
              <Gift className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🎉 Votre bonus d'inscription
          </h3>
          
          <div className="mb-8">
            <div className="inline-flex items-center bg-emerald-100 rounded-full px-6 py-3 mb-4">
              <span className="text-2xl font-bold text-emerald-600">-10%</span>
              <span className="ml-2 text-emerald-700 font-medium">sur votre première commande</span>
            </div>
            
            <p className="text-xl text-gray-600 mb-2">+</p>
            
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3">
              <span className="text-lg font-semibold text-blue-600">📖 Guide écolo PDF gratuit</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            20 pages de conseils pratiques pour une maison 100% écologique
          </p>

          {/* CTA Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Votre email pour recevoir votre bonus"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg border-2 border-emerald-200 focus:border-emerald-400"
                  required
                />
              </div>
              <Button
                type="submit"
                className="h-14 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg transition-all duration-300 hover:scale-105"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <>
                    <Gift className="w-5 h-5 mr-2" />
                    Je veux mon bonus
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              ⚡ Bonus envoyé instantanément - Aucune condition cachée
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetReminder;
