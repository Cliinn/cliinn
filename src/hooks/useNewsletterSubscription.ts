
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useNewsletterSubscription = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const subscribeToNewsletter = async (email: string, source: string) => {
    if (!email) return false;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([
          {
            email: email.toLowerCase().trim(),
            source: source
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Déjà inscrit ! 😊",
            description: "Cette adresse email est déjà dans notre liste.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Inscription réussie ! 🎉",
          description: "Vous recevrez bientôt votre code -25% et vos échantillons de test.",
        });
      }
      
      setIsSubmitting(false);
      return !error;
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return false;
    }
  };

  return {
    subscribeToNewsletter,
    isSubmitting
  };
};
