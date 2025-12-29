import { BookOpen, Video, BarChart3, HelpCircle, Bot, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: BookOpen,
    title: "Artikel Fintech",
    description: "Artikel edukatif tentang perkembangan fintech, regulasi, dan keamanan digital di Indonesia.",
    href: "/artikel",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Video,
    title: "Video Edukasi",
    description: "Video animasi yang menjelaskan konsep fintech dan cara mencegah penipuan secara visual.",
    href: "/video",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Infografis",
    description: "Visualisasi data tentang jenis fintech, risiko, dan alur pelaporan penipuan.",
    href: "/infografis",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: HelpCircle,
    title: "Kuis Interaktif",
    description: "Uji pemahaman Anda tentang keamanan fintech dan regulasi melalui kuis menarik.",
    href: "/kuis",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Bot,
    title: "Robo AI Advisor",
    description: "Chatbot AI yang siap membantu menjawab pertanyaan seputar investasi dan keamanan fintech.",
    href: "/ai-advisor",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: AlertTriangle,
    title: "Pusat Pelaporan",
    description: "Informasi lengkap tentang cara melaporkan penipuan ke IASC OJK.",
    href: "/pelaporan",
    color: "bg-red-500/10 text-red-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fitur Edukasi <span className="text-accent">Lengkap</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berbagai format pembelajaran untuk meningkatkan literasi keuangan digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.href}
                to={feature.href}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4", feature.color)}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
