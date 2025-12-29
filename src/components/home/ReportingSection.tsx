import { Shield, Phone, Globe, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Kumpulkan Bukti",
    description: "Simpan semua bukti transaksi, chat, dan dokumen terkait penipuan.",
  },
  {
    number: "02",
    title: "Akses IASC OJK",
    description: "Kunjungi portal resmi iasc.ojk.go.id untuk memulai pelaporan.",
  },
  {
    number: "03",
    title: "Isi Formulir",
    description: "Lengkapi formulir pelaporan dengan data yang akurat dan detail.",
  },
  {
    number: "04",
    title: "Pantau Progress",
    description: "Pantau status pelaporan Anda melalui portal IASC OJK.",
  },
];

export function ReportingSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Pusat Pelaporan Penipuan</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Jika Terjadi Penipuan,{" "}
              <span className="text-accent">Ke Mana Harus Melapor?</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              IASC (Indonesia Anti-Scam Centre) adalah pusat penanganan penipuan transaksi keuangan 
              yang dibentuk oleh OJK untuk membantu masyarakat Indonesia melaporkan dan menangani 
              kasus penipuan secara efektif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a href="https://iasc.ojk.go.id" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent">
                    iasc.ojk.go.id
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hotline OJK</p>
                  <p className="font-medium text-foreground">157</p>
                </div>
              </div>
            </div>

            <Button asChild variant="accent" size="lg">
              <a href="https://iasc.ojk.go.id" target="_blank" rel="noopener noreferrer">
                Laporkan Sekarang
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Right Content - Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-card rounded-xl p-5 border border-border hover:border-accent/30 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
