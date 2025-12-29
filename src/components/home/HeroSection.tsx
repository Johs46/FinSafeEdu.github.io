import { Shield, ArrowRight, AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6 animate-fade-in">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Platform Edukasi Fintech Indonesia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Edukasi Fintech &{" "}
              <span className="text-gradient bg-gradient-to-r from-emerald-light to-sky">
                Pencegahan Penipuan
              </span>{" "}
              Transaksi Keuangan
            </h1>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Tingkatkan literasi keuangan digital Anda. Pelajari cara melindungi diri dari penipuan 
              dan pahami regulasi fintech di Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/artikel">
                  Mulai Belajar
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/ai-advisor">
                  Konsultasi AI
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Alert Card */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="glass-effect rounded-2xl p-6 border border-accent/20 shadow-xl max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/20">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Menjadi Korban Penipuan?</h3>
                  <p className="text-sm text-muted-foreground">Segera laporkan ke IASC OJK</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                Pusat Penanganan Penipuan Transaksi Keuangan (IASC) OJK siap membantu Anda 
                melaporkan dan menangani kasus penipuan.
              </p>

              <Button asChild className="w-full" variant="accent">
                <a href="https://iasc.ojk.go.id" target="_blank" rel="noopener noreferrer">
                  Kunjungi IASC OJK
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
