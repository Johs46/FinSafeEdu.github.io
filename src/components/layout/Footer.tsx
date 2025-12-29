import { Shield, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  edukasi: [
    { label: "Artikel Fintech", href: "/artikel" },
    { label: "Video Edukasi", href: "/video" },
    { label: "Infografis", href: "/infografis" },
    { label: "Kuis Interaktif", href: "/kuis" },
  ],
  layanan: [
    { label: "Robo AI Advisor", href: "/ai-advisor" },
    { label: "Pusat Pelaporan", href: "/pelaporan" },
  ],
  resmi: [
    { label: "OJK (Otoritas Jasa Keuangan)", href: "https://ojk.go.id", external: true },
    { label: "Bank Indonesia", href: "https://bi.go.id", external: true },
    { label: "IASC OJK", href: "https://iasc.ojk.go.id", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">FinSafe</span>
                <span className="text-lg font-bold text-emerald">Edu</span>
              </div>
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Platform edukasi fintech dan pencegahan penipuan transaksi keuangan di Indonesia.
            </p>
          </div>

          {/* Edukasi */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald">Edukasi</h4>
            <ul className="space-y-2">
              {footerLinks.edukasi.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/70 hover:text-emerald transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/70 hover:text-emerald transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tautan Resmi */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald">Tautan Resmi</h4>
            <ul className="space-y-2">
              {footerLinks.resmi.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 hover:text-emerald transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <div className="bg-background/30 rounded-xl p-6">
            <h5 className="font-semibold text-emerald mb-2">Disclaimer</h5>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Website ini dikembangkan untuk tujuan edukasi dan pencegahan penipuan transaksi keuangan. 
              Informasi yang disajikan bersifat edukatif dan tidak dimaksudkan sebagai nasihat keuangan profesional. 
              Apabila Anda menjadi korban penipuan transaksi keuangan, segera laporkan melalui{" "}
              <a
                href="https://iasc.ojk.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald hover:underline"
              >
                Pusat Penanganan Penipuan Transaksi Keuangan (IASC OJK)
              </a>
              .
            </p>
          </div>
          <div className="mt-6 text-center text-xs text-foreground/50">
            <p>© {new Date().getFullYear()} FinSafeEdu. Dikembangkan untuk tujuan akademik.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
