import { articles } from "@/lib/data";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/news/ArticleCard";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  const categoryArticles = articles.filter(
    (a) => a.category.toLowerCase() === params.category.toLowerCase()
  );

  // If no articles found for this category, we'll still show the empty state or 404 if invalid
  if (categoryArticles.length === 0 && !["world", "tech", "business", "science", "health", "culture", "politics"].includes(params.category.toLowerCase())) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-newspaper-bg text-newspaper-text">
       <Header />
       
       <div className="container mx-auto px-4 py-12">
          <header className="mb-12 border-b-4 border-black pb-4 text-center">
            <h1 className="text-4xl md:text-7xl font-black font-serif tracking-tighter uppercase whitespace-nowrap">
              {categoryName} NEWS
            </h1>
            <p className="text-sm italic font-serif mt-2">Latest updates and detailed analysis from Byte Wire editors.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
             {/* Left Main Feed */}
            <section className="lg:col-span-3 space-y-12">
              {categoryArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {categoryArticles.map((article, idx) => (
                    <ArticleCard 
                      key={article.id} 
                      article={article} 
                      variant={idx === 0 ? "featured" : "compact"} 
                    />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center italic text-zinc-500">
                  No articles found in {categoryName} yet. Stay tuned for updates.
                </div>
              )}
            </section>

             {/* Right Sidebar */}
             <aside className="lg:col-span-1">
               <div className="sticky top-8">
                 <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-6 border-b border-black pb-1">
                   Trending in {categoryName}
                 </h2>
                 <div className="space-y-4 mb-12">
                    {articles
                      .filter(a => a.category.toLowerCase() !== params.category.toLowerCase())
                      .slice(0, 5)
                      .map(a => (
                        <ArticleCard key={a.id} article={a} variant="sidebar" />
                      ))
                    }
                 </div>

                 {/* Category Ad Unit */}
                  <div className="aspect-square ad-slot border border-newspaper-border font-bold uppercase text-[10px] tracking-widest text-zinc-400">
                    Category Sidebar Ad
                  </div>
               </div>
             </aside>
          </div>
       </div>

       <Footer />
    </main>
  );
}
