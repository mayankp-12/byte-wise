"use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/data";
import { motion } from "framer-motion";

interface ArticleCardProps {
  article: Article;
  variant?: "featured" | "compact" | "sidebar";
}

export default function ArticleCard({ article, variant = "compact" }: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group cursor-pointer mb-8"
      >
        <Link href={`/article/${article.id}`}>
          <div className="relative aspect-[16/9] mb-4 overflow-hidden bg-zinc-100">
            <Image 
              src={article.imageUrl} 
              alt={article.title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw"
            />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-newspaper-accent mb-2">{article.category}</p>
          <h2 className="text-3xl md:text-5xl mb-4 group-hover:underline">{article.title}</h2>
          <p className="text-lg text-zinc-600 font-serif leading-relaxed line-clamp-3">{article.excerpt}</p>
          <p className="mt-4 text-xs font-bold uppercase text-zinc-400">By {article.author} | {article.date}</p>
        </Link>
      </motion.div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className="py-4 border-b border-newspaper-border group cursor-pointer last:border-b-0">
        <Link href={`/article/${article.id}`}>
          <p className="text-[10px] font-bold uppercase tracking-tighter text-zinc-400 mb-1">{article.category}</p>
          <h3 className="text-sm font-bold leading-snug group-hover:text-newspaper-accent transition-colors underline-offset-2">
            {article.title}
          </h3>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6 border-b border-newspaper-border group cursor-pointer last:border-b-0 flex flex-col md:flex-row gap-6">
      <div className="relative w-full md:w-32 aspect-square overflow-hidden bg-zinc-100 shrink-0 self-start md:order-last">
        <Image 
          src={article.imageUrl} 
          alt={article.title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 128px"
        />
      </div>
      <div className="flex-1">
        <Link href={`/article/${article.id}`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-newspaper-accent mb-2">{article.category}</p>
          <h3 className="text-2xl mb-2 group-hover:underline leading-tight">{article.title}</h3>
          <p className="text-sm text-zinc-600 line-clamp-2 font-serif">{article.excerpt}</p>
          <p className="mt-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{article.author}</p>
        </Link>
      </div>
    </div>
  );
}
