import { Layout } from "@/components/layout/Layout";
import { Video } from "lucide-react";

const VideoPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <Video className="h-4 w-4" />
              <span className="text-sm font-medium">Video Edukasi</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Video <span className="text-accent">Pembelajaran</span> Fintech
            </h1>

            <p className="text-lg text-primary-foreground/80">
              Materi pembelajaran fintech dalam bentuk video edukatif
              yang mudah dipahami oleh masyarakat umum.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border">
              {/* YouTube Embed */}
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/zFx9jEGENrQ"
                  title="Video Edukasi Fintech"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description */}
              <div className="p-6 bg-card">
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                  Dasar Fintech
                </div>

                <h2 className="text-2xl font-bold mb-2">
                  Pengenalan Fintech dan Perkembangannya di Indonesia
                </h2>

                <p className="text-muted-foreground text-sm">
                  Video ini membahas pengertian fintech, jenis-jenis layanan fintech,
                  serta peran teknologi finansial dalam kehidupan sehari-hari.
                  Cocok sebagai materi pembelajaran awal bagi pemula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VideoPage;