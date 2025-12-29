import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";

const ArtikelDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artikel tidak ditemukan</h1>
          <Link to="/artikel">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Artikel
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-xl font-bold text-foreground mt-8 mb-4">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-lg font-semibold text-foreground mt-6 mb-3">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }
        // Handle bullet points
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(item => item.startsWith('- '));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
              {items.map((item, i) => (
                <li key={i}>{formatInlineText(item.replace('- ', ''))}</li>
              ))}
            </ul>
          );
        }
        // Handle numbered lists
        if (/^\d+\./.test(paragraph)) {
          const items = paragraph.split('\n').filter(item => /^\d+\./.test(item));
          return (
            <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
              {items.map((item, i) => (
                <li key={i}>{formatInlineText(item.replace(/^\d+\.\s*/, ''))}</li>
              ))}
            </ol>
          );
        }
        // Regular paragraph
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {formatInlineText(paragraph)}
          </p>
        );
      });
  };

  // Handle inline formatting (bold text)
  const formatInlineText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        <div className="relative container mx-auto px-4 pt-8 pb-16">
          <Link to="/artikel">
            <Button variant="ghost" className="mb-8 text-foreground hover:bg-background/50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Artikel
            </Button>
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">{article.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime} baca
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {formatContent(article.content)}
            </article>

            {/* Source */}
            {article.source !== "#" && (
              <div className="mt-12 p-6 rounded-2xl bg-secondary/50 border border-border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Sumber Artikel</h3>
                <a
                  href={article.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline break-all"
                >
                  <ExternalLink className="h-4 w-4 flex-shrink-0" />
                  {article.source}
                </a>
              </div>
            )}

            {/* Back Button */}
            <div className="mt-12 text-center">
              <Link to="/artikel">
                <Button size="lg">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Lihat Artikel Lainnya
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtikelDetailPage;
