
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  source: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, firstName, lastName, source }: WelcomeEmailRequest = await req.json();

    const displayName = firstName ? `${firstName} ${lastName || ''}`.trim() : '';
    const greeting = displayName ? `Bonjour ${displayName}` : 'Bonjour';

    let emailContent = '';
    
    if (source === 'lead_magnet' || source === 'hero') {
      // Email pour demande d'échantillons
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #059669; font-size: 28px; margin: 0;">🎉 Merci pour votre inscription !</h1>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">${greeting},</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Nous sommes ravis de votre intérêt pour nos feuilles de détergent écologiques CLIINN !
          </p>
          
          <div style="background-color: #f0fdf4; border-left: 4px solid #059669; padding: 20px; margin: 20px 0;">
            <h3 style="color: #059669; margin-top: 0;">🎁 Votre bonus d'inscription :</h3>
            <ul style="color: #374151; line-height: 1.8;">
              <li><strong>Code promo -25%</strong> sur votre première commande : <code style="background: #059669; color: white; padding: 4px 8px; border-radius: 4px;">WELCOME25</code></li>
              <li><strong>Échantillons gratuits</strong> pour tester nos produits</li>
            </ul>
          </div>
          
          <h3 style="color: #374151; margin-top: 30px;">📦 Pour recevoir vos échantillons par voie postale :</h3>
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Merci de nous communiquer vos informations de livraison en répondant à cet email avec :
          </p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <ul style="color: #374151; line-height: 1.8; margin: 0;">
              <li>Nom complet</li>
              <li>Adresse complète (rue, ville, code postal)</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Produits que vous souhaitez tester (lessive, vaisselle, multi-usage)</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Nous préparerons votre colis d'échantillons dans les plus brefs délais !
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #6b7280; font-size: 14px;">
              Des questions ? Répondez simplement à cet email, nous sommes là pour vous aider ! 😊
            </p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center;">
            <p style="color: #059669; font-weight: bold; margin: 0;">🇫🇷 CLIINN - Le Geste Clean pour la Planète</p>
            <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0 0;">Made in France avec fierté depuis la Bourgogne</p>
          </div>
        </div>
      `;
    } else {
      // Email pour inscription newsletter simple
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #059669; font-size: 28px; margin: 0;">🌱 Bienvenue dans notre communauté !</h1>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">${greeting},</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Merci de rejoindre notre communauté ! Vous serez désormais informé(e) en priorité de :
          </p>
          
          <ul style="font-size: 16px; line-height: 1.8; color: #374151;">
            <li>🚀 Le lancement de nos produits</li>
            <li>💚 Nos innovations écologiques</li>
            <li>🎁 Nos offres exclusives</li>
            <li>📰 Nos actualités et conseils</li>
          </ul>
          
          <div style="background-color: #f0fdf4; border-left: 4px solid #059669; padding: 20px; margin: 20px 0;">
            <p style="color: #059669; font-weight: bold; margin: 0;">
              Restez connecté(e) pour découvrir comment CLIINN révolutionne le nettoyage écologique ! 🌍
            </p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center;">
            <p style="color: #059669; font-weight: bold; margin: 0;">🇫🇷 CLIINN - Le Geste Clean pour la Planète</p>
            <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0 0;">Made in France avec fierté depuis la Bourgogne</p>
          </div>
        </div>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "CLIINN <contact@cliinn.com>",
      to: [email],
      subject: source === 'lead_magnet' || source === 'hero' 
        ? "🎉 Votre code -25% et infos pour recevoir vos échantillons gratuits"
        : "🌱 Bienvenue dans la communauté CLIINN !",
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
