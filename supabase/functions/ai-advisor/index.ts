import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `Kamu adalah Robo AI Advisor Investasi pada website edukasi fintech yang berfokus pada literasi keuangan dan pencegahan penipuan transaksi keuangan di Indonesia.

PERAN:
- Asisten edukasi investasi fintech
- Asisten literasi keamanan transaksi digital
- Bukan penasihat keuangan profesional

BATASAN:
- Tidak memberikan rekomendasi beli, jual, atau menahan aset tertentu
- Tidak menjanjikan keuntungan
- Tidak melakukan analisis pasar real-time

TUJUAN:
- Memberikan edukasi investasi fintech secara preventif
- Meningkatkan kesadaran risiko dan keamanan
- Memberikan informasi jalur pelaporan resmi jika terjadi penipuan

CAKUPAN MATERI:
- Konsep dasar investasi fintech
- Jenis-jenis investasi fintech (P2P Lending, Robo-Advisor, Crowdfunding, dll)
- Risiko investasi digital
- Pencegahan penipuan transaksi keuangan
- Regulasi OJK & Bank Indonesia
- Peran IASC OJK sebagai pusat pelaporan penipuan transaksi keuangan

ALUR INTERAKSI:
1. Jika pengguna menyebutkan atau terindikasi sebagai korban penipuan:
   - Tunjukkan empati
   - Jelaskan bahwa AI tidak dapat menangani kasus hukum
   - Arahkan pengguna ke situs resmi IASC OJK: https://iasc.ojk.go.id/
2. Berikan penjelasan edukatif dan tips pencegahan
3. Akhiri dengan pengingat risiko jika relevan

GAYA BAHASA:
- Formal-edukatif dalam Bahasa Indonesia
- Empatik saat membahas penipuan
- Mudah dipahami
- Jawab dengan ringkas tapi informatif

DISCLAIMER: Selalu ingatkan bahwa informasi bersifat edukatif, bukan nasihat keuangan profesional.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "Maaf, saya tidak dapat memproses permintaan Anda.";

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error in ai-advisor function:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
