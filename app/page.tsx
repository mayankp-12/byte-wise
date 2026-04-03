import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/news/ArticleCard";
import AdSense from "@/components/ads/AdSense";
import { articles } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1, 4);
  const feedArticles = articles.slice(4);

  return (
    <main className="min-h-screen flex flex-col bg-newspaper-bg">
      <Header />
      
      {/* Top Banner Ad Container */}
      <div className="container mx-auto px-4 mt-8">
        <div className="w-full h-32 bg-zinc-100 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-zinc-400 border border-zinc-200">
          Leaderboard Ad Placeholder (728x90)
          {/* Real AdSense Unit: <AdSense adSlot="1234567890" adFormat="horizontal" /> */}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Content Area (3 Columns Column) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Featured Article (Full Width of first 2 columns) */}
              <div className="md:col-span-2 border-r-0 lg:border-r border-newspaper-border pr-0 lg:pr-12">
                <ArticleCard article={featuredArticle} variant="featured" />
                
                <div className="newspaper-double-divider mb-8" />
                
                {/* Secondary Feed */}
                <div className="space-y-4">
                  {articles.slice(1, 4).map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>

              {/* Middle Feature Column (1 Column) */}
              <div className="md:col-span-1">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 border-b border-black pb-1">
                  Trending Now
                </h2>
                <div className="space-y-4">
                  {articles.slice(3).map((article) => (
                    <ArticleCard key={article.id} article={article} variant="sidebar" />
                  ))}
                </div>

                <div className="mt-12 p-6 bg-zinc-900 text-white rounded-none">
                  <h3 className="text-xl font-bold font-serif mb-2 text-center italic">The Daily Digest</h3>
                  <p className="text-xs text-zinc-400 mb-4 text-center">Get the most important stories delivered to your inbox every morning.</p>
                  <button className="w-full bg-newspaper-accent text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                    Join Newsletter
                  </button>
                </div>

                {/* Sidebar Ad Slot */}
                <div className="mt-12 aspect-[5/6] bg-zinc-100 flex items-center justify-center text-[10px] font-bold uppercase tracking-tighter text-zinc-400 border border-zinc-200">
                  Sidebar Ad Placeholder (300x250)
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar (1 Column) */}
          <div className="lg:col-span-1 border-l-0 lg:border-l border-newspaper-border pl-0 lg:pl-12">
             <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-6 border-b border-black pb-1">
              Top Categories
            </h2>
            <div className="space-y-2 mb-12 uppercase text-xs font-bold tracking-widest">
              {["Technology", "Business", "Politics", "Science", "Finance", "Arts"].map((cat) => (
                <div key={cat} className="flex justify-between items-center hover:text-newspaper-accent cursor-pointer group">
                  <span>{cat}</span>
                  <span className="text-zinc-400 group-hover:text-newspaper-accent">→</span>
                </div>
              ))}
            </div>

            <div className="bg-newspaper-accent/5 p-6 border border-newspaper-accent/10">
              <h3 className="text-sm font-black font-serif uppercase tracking-tighter mb-2">Editorial Choice</h3>
              <div className="aspect-square relative mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Editorial" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <p className="text-xs italic leading-snug">The world of journalism is changing faster than ever before. We remain committed to the truth.</p>
            </div>

            {/* Vertical Ad Slot */}
            <div className="mt-12 w-full h-[600px] bg-zinc-100 flex items-center justify-center text-[10px] font-bold uppercase tracking-tighter text-zinc-400 border border-zinc-200">
               Skyscraper Ad (160x600)
            </div>
          </div>

        </div>
      </div>

      {/* Another Horizontal Ad Slot before Footer */}
      <div className="container mx-auto px-4 mb-12">
        <div className="w-full h-24 border-y border-newspaper-border flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-zinc-400 italic">
          Dynamic Content recommendation unit
        </div>
      </div>

      <Footer />
    </main>
  );
}
