import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdSense from "@/components/ads/AdSense";
import ArticleCard from "@/components/news/ArticleCard";

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-newspaper-bg text-newspaper-text">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Article Content */}
          <div className="lg:col-span-3">
            <article className="max-w-4xl mx-auto">
              <header className="mb-12">
                <p className="text-xs font-black uppercase tracking-widest text-newspaper-accent mb-4">
                  {article.category}
                </p>
                <h1 className="text-4xl md:text-6xl font-black font-serif tracking-tight mb-6 leading-tight">
                  {article.title}
                </h1>
                <div className="flex items-center gap-4 border-y border-newspaper-border py-4 mt-8">
                  <div className="w-12 h-12 bg-zinc-200 rounded-full" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider">By {article.author}</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">{article.date}</p>
                  </div>
                </div>
              </header>

              <div className="relative aspect-video mb-12 overflow-hidden shadow-sm">
                <Image 
                  src={article.imageUrl} 
                  alt={article.title} 
                  fill 
                  priority
                  className="object-cover"
                />
              </div>

              {/* Dynamic Content Rendering */}
              <div 
                className="prose prose-zinc lg:prose-xl max-w-none font-serif leading-relaxed text-zinc-800"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="newspaper-double-divider my-12" />

              {/* Ad in-content placeholder */}
              <div className="my-12">
                <div className="w-full h-48 ad-slot border-y border-newspaper-border font-bold uppercase text-[10px] tracking-widest text-zinc-400">
                  In-Content Ad Unit
                  {/* <AdSense adSlot="8888888888" /> */}
                </div>
              </div>

              {/* Related Section */}
              <section className="mt-20">
                <h2 className="text-2xl font-black font-serif uppercase tracking-tight mb-8 border-b-2 border-black pb-2">
                  Related Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedArticles.map((rel) => (
                    <ArticleCard key={rel.id} article={rel} />
                  ))}
                </div>
              </section>
            </article>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-1 border-l-0 lg:border-l border-newspaper-border pl-0 lg:pl-8">
            <div className="sticky top-8">
               <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 border-b border-black pb-1">
                Latest from {article.category}
              </h3>
              <div className="space-y-4 mb-12">
                {articles
                  .filter(a => a.category === article.category && a.id !== article.id)
                  .map(a => (
                    <ArticleCard key={a.id} article={a} variant="sidebar" />
                  ))
                }
              </div>

              {/* Sidebar Ad Unit */}
              <div className="aspect-[3/4] ad-slot border border-newspaper-border font-bold uppercase text-[10px] tracking-widest text-zinc-400">
                 Sidebar Square Ad
              </div>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </main>
  );
}
