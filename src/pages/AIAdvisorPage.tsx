import { Layout } from "@/components/layout/Layout";
import { Bot, ExternalLink, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIAdvisorPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
            <Bot className="h-4 w-4" />
            <span className="text-sm font-medium">Robo AI Advisor</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Konsultasi <span className="text-accent">Edukasi Investasi Fintech</span>
          </h1>

          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Fitur AI Advisor membantu memahami investasi fintech, risiko penipuan,
            serta regulasi OJK & Bank Indonesia melalui asisten berbasis AI.
          </p>

          {/* BUTTON KE LOVABLE */}
          <Button asChild variant="accent" size="lg" className="rounded-xl">
            <a
              href="https://kelompok2aiadvisor.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Mulai Tanya AI
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg space-y-4">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="font-medium mb-1">Disclaimer</p>
                <p className="text-muted-foreground">
                  AI Advisor bersifat edukatif dan bukan nasihat keuangan.
                  Untuk pengaduan penipuan, silakan kunjungi{" "}
                  <a
                    href="https://iasc.ojk.go.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    IASC OJK
                  </a>.
                </p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                Teknologi AI menggunakan <strong>Lovable AI Gateway</strong> dengan
                model <strong>Google Gemini 2.5 Flash</strong> dan dihosting
                secara terpisah dari website utama.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIAdvisorPage;
