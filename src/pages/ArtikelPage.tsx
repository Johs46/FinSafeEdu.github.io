import { Layout } from "@/components/layout/Layout";
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";
import { useState } from "react";

const ArtikelPage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredArticles =
    activeCategory === "Semua"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-accent/80 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-6">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">Artikel Edukasi</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Artikel <span className="text-accent-foreground">Fintech</span>
              </h1>

              <p className="text-lg text-white/80">
                Artikel edukatif seputar fintech, regulasi, dan keamanan digital.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-secondary/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                    <button
                      key={`${category}-${index}`}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === category
                          ? "bg-accent text-accent-foreground"
                          : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3 w-fit">
                      {article.category}
                    </div>

                    <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>

                      {article.source !== "#" && (
                        <a
                          href={article.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-accent hover:underline"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Sumber
                        </a>
                      )}
                    </div>

                    <Link to={`/artikel/${article.id}`} className="mt-auto">
                      <Button variant="outline" size="sm" className="w-full">
                        Baca Selengkapnya
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ArtikelPage;
