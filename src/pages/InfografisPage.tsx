import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { BarChart3, Download, ZoomIn, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const infographics = [
  {
    id: 1,
    title: "Jenis-Jenis Fintech di Indonesia",
    description:
      "Infografis lengkap tentang berbagai jenis fintech yang beroperasi di Indonesia beserta contoh perusahaannya.",
    image: `${import.meta.env.BASE_URL}images/Infografis-Jenis-Fintech-di-Indonesia.png`,
    contributor: "Tim FinSafeEdu",
    category: "Jenis Fintech",
  },
];

const InfografisPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6">
            <BarChart3 className="h-4 w-4" />
            <span className="text-sm font-medium">Infografis Edukasi</span>
          </div>
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            <span className="text-accent">Infografis</span> Visual Edukatif
          </h1>
          <p className="text-primary-foreground/80">
            Pelajari fintech melalui visual yang informatif dan mudah dipahami.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infographics.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 hover:opacity-100 transition">
                  {/* Zoom */}
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <ZoomIn className="h-5 w-5" />
                  </Button>

                  {/* Download */}
                  <a href={item.image} download>
                    <Button size="icon" variant="secondary">
                      <Download className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="h-3 w-3" />
                  {item.contributor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL ZOOM */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt="Infografis Full"
            className="max-h-[99vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </Layout>
  );
};

export default InfografisPage;
