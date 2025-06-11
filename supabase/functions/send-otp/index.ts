
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()
    
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email requis' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    // Générer un OTP de 6 chiffres
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    
    // Stocker l'OTP dans la base de données avec une expiration
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2')
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Supprimer les anciens OTP pour cet email
    await supabase
      .from('otp_codes')
      .delete()
      .eq('email', email.toLowerCase())

    // Insérer le nouvel OTP
    const { error: insertError } = await supabase
      .from('otp_codes')
      .insert({
        email: email.toLowerCase(),
        code: otp,
        expires_at: new Date(Date.now() + 10 * 60 * 1000).toISOString() // 10 minutes
      })

    if (insertError) {
      console.error('Erreur insertion OTP:', insertError)
      return new Response(
        JSON.stringify({ error: 'Erreur lors de la génération de l\'OTP' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500 
        }
      )
    }

    // Envoyer l'email avec l'OTP
    const emailBody = `
      <html>
        <body>
          <h2>Votre code de vérification CLIINN</h2>
          <p>Votre code de vérification est : <strong>${otp}</strong></p>
          <p>Ce code expire dans 10 minutes.</p>
          <p>Si vous n'avez pas demandé ce code, ignorez cet email.</p>
        </body>
      </html>
    `

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@cliinn.com',
        to: [email],
        subject: 'Votre code de vérification CLIINN',
        html: emailBody,
      }),
    })

    if (!emailResponse.ok) {
      console.error('Erreur envoi email:', await emailResponse.text())
      return new Response(
        JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500 
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'OTP envoyé avec succès' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Erreur:', error)
    return new Response(
      JSON.stringify({ error: 'Erreur interne du serveur' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
