
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface SubscriptionData {
  email: string;
  firstName?: string;
  lastName?: string;
  source: string;
}

export const useNewsletterSubscription = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const subscribeToNewsletter = async (data: SubscriptionData) => {
    if (!data.email) return false;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([
          {
            email: data.email.toLowerCase().trim(),
            first_name: data.firstName?.trim() || null,
            last_name: data.lastName?.trim() || null,
            source: data.source
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
        // Trigger email sending
        await sendWelcomeEmail(data);
        
        toast({
          title: "Inscription réussie ! 🎉",
          description: "Vous recevrez bientôt un email avec les informations pour recevoir vos échantillons.",
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

  const sendWelcomeEmail = async (data: SubscriptionData) => {
    try {
      const response = await supabase.functions.invoke('send-welcome-email', {
        body: {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          source: data.source
        }
      });

      if (response.error) {
        console.error('Error sending welcome email:', response.error);
      }
    } catch (error) {
      console.error('Error calling email function:', error);
    }
  };

  return {
    subscribeToNewsletter,
    isSubmitting
  };
};
