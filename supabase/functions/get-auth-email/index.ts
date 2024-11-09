// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'

console.log("Hello from Functions!")

export const corsHeaders = {
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  'Access-Control-Expose-Headers': 'x-client-info, Content-Length, X-JSON',
}


Deno.serve(async (req) => {
  if(req.method === 'OPTIONS') {
    return new Response("ok" , { headers: corsHeaders })
  }


  console.log('request:', req)

 
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  )

  const res = await supabaseClient.from('users').select('*').eq('id_number', 111).single() 

  console.log('res:', res)

  if(!res.data) {
    throw new Error(`User with id ${id} not found`)
  }

  const user = await supabaseClient.auth.admin.getUserById(res.data.user_uuid)

  console.log('user data:', user)

  return new Response(JSON.stringify({ email: res.data.email }), { headers: corsHeaders, status: 200 })
})



/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/get-auth-email' \
    --header 'Authorization: Bearer ' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
