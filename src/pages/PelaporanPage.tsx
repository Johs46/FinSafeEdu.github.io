import { Layout } from "@/components/layout/Layout";
import { AlertTriangle, Shield, Phone, Globe, FileText, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Kumpulkan Bukti",
    description: "Simpan semua bukti transaksi seperti screenshot chat, bukti transfer, email, dan dokumen lainnya yang terkait dengan penipuan.",
    icon: FileText,
  },
  {
    number: "2",
    title: "Akses Portal IASC OJK",
    description: "Kunjungi portal resmi IASC OJK di iasc.ojk.go.id untuk memulai proses pelaporan secara online.",
    icon: Globe,
  },
  {
    number: "3",
    title: "Isi Formulir Pelaporan",
    description: "Lengkapi formulir pelaporan dengan data yang akurat, detail kronologi kejadian, dan lampirkan bukti-bukti yang telah dikumpulkan.",
    icon: CheckCircle,
  },
  {
    number: "4",
    title: "Pantau Status Pelaporan",
    description: "Setelah laporan dikirim, pantau status dan perkembangan pelaporan Anda melalui portal IASC OJK secara berkala.",
    icon: Shield,
  },
];

const contacts = [
  {
    title: "IASC OJK",
    description: "Pusat Penanganan Penipuan Transaksi Keuangan",
    value: "iasc.ojk.go.id",
    href: "https://iasc.ojk.go.id",
    icon: Globe,
    type: "website",
  },
  {
    title: "Hotline OJK",
    description: "Layanan pengaduan konsumen",
    value: "157",
    href: "tel:157",
    icon: Phone,
    type: "phone",
  },
  {
    title: "Website OJK",
    description: "Portal resmi OJK",
    value: "ojk.go.id",
    href: "https://ojk.go.id",
    icon: Globe,
    type: "website",
  },
  {
    title: "Bank Indonesia",
    description: "Portal resmi BI",
    value: "bi.go.id",
    href: "https://bi.go.id",
    icon: Globe,
    type: "website",
  },
];

const tips = [
  "Jangan panik dan tetap tenang saat menyadari telah menjadi korban penipuan",
  "Segera hubungi bank Anda untuk memblokir rekening jika dana masih tersisa",
  "Dokumentasikan semua bukti dengan lengkap sebelum melaporkan",
  "Laporkan ke kepolisian setempat untuk keperluan hukum",
  "Jangan menyebarkan informasi penipuan ke media sosial tanpa berkonsultasi dengan pihak berwenang",
  "Waspadai modus penipuan lanjutan yang mengatasnamakan pihak penyelidik",
];

const PelaporanPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 text-destructive-foreground mb-6">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Pusat Pelaporan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Pusat Pelaporan <span className="text-accent">Penipuan</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Jika Anda menjadi korban penipuan transaksi keuangan, segera laporkan ke IASC OJK 
              untuk mendapatkan penanganan yang tepat.
            </p>
            <Button asChild variant="hero" size="xl">
              <a href="https://iasc.ojk.go.id" target="_blank" rel="noopener noreferrer">
                Laporkan ke IASC OJK
                <ExternalLink className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is IASC */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="hidden md:flex h-16 w-16 rounded-2xl bg-accent/10 items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Apa itu IASC OJK?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>IASC (Indonesia Anti-Scam Centre)</strong> adalah pusat penanganan penipuan 
                    transaksi keuangan yang dibentuk oleh Otoritas Jasa Keuangan (OJK). IASC bertujuan 
                    untuk membantu masyarakat Indonesia dalam melaporkan, memproses, dan menindaklanjuti 
                    kasus-kasus penipuan yang terjadi di sektor jasa keuangan.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Melalui portal <strong>iasc.ojk.go.id</strong>, masyarakat dapat melaporkan berbagai 
                    jenis penipuan termasuk phishing, investasi bodong, pinjaman online ilegal, dan 
                    modus penipuan digital lainnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Langkah <span className="text-accent">Pelaporan</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ikuti langkah-langkah berikut untuk melaporkan kasus penipuan transaksi keuangan
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center">
                      <span className="text-accent-foreground font-bold text-lg">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Kontak <span className="text-accent">Resmi</span>
            </h2>
            <p className="text-muted-foreground">
              Hubungi lembaga resmi berikut untuk bantuan lebih lanjut
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={contact.type === "website" ? "_blank" : undefined}
                  rel={contact.type === "website" ? "noopener noreferrer" : undefined}
                  className="bg-card rounded-xl p-5 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{contact.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{contact.description}</p>
                  <p className="text-sm font-medium text-accent">{contact.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Tips <span className="text-accent">Penting</span>
              </h2>
              <p className="text-muted-foreground">
                Hal-hal yang perlu diperhatikan jika Anda menjadi korban penipuan
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-sm text-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-primary-foreground mb-4">
              Disclaimer
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              Website ini bersifat <strong>preventif dan edukatif</strong>. Kami tidak menangani 
              kasus penipuan secara langsung. Untuk pelaporan dan penanganan kasus penipuan 
              transaksi keuangan, silakan hubungi langsung IASC OJK melalui portal resmi di{" "}
              <a
                href="https://iasc.ojk.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                iasc.ojk.go.id
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PelaporanPage;
