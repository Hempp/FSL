import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { getAllPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog — Youth Sports, Wellness & Financial Literacy",
  description:
    "Articles on free youth sports in Los Angeles, mental health benefits of athletics, financial literacy for young athletes, and more from Fundamental Sports Labs.",
  keywords: [
    "youth sports blog",
    "free youth sports Los Angeles",
    "youth sports mental health",
    "financial literacy for youth",
    "after school sports programs LA",
  ],
  openGraph: {
    title: "Blog — Fundamental Sports Labs",
    description:
      "Articles on free youth sports in Los Angeles, mental health, financial literacy, and youth development.",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <NikeHeader />
      <main id="main-content" className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-fsl-dark pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <p className="font-redhat text-[12px] uppercase tracking-[0.2em] text-fsl-coral font-semibold mb-4">
              FSL Blog
            </p>
            <h1 className="font-barlow text-[40px] md:text-[56px] font-bold uppercase leading-[0.95] text-white mb-4">
              Stories & Insights
            </h1>
            <p className="font-redhat text-[16px] md:text-[18px] text-white/60 max-w-[600px] leading-relaxed">
              Articles on youth sports, mental wellness, financial literacy, and
              building the next generation of leaders in Los Angeles.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-white border border-black/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-redhat text-[11px] uppercase tracking-[0.1em] text-fsl-coral bg-fsl-coral/10 px-2.5 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="font-barlow text-[20px] md:text-[22px] font-bold uppercase leading-tight text-fsl-dark mb-2 group-hover:text-fsl-coral transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="font-redhat text-[14px] text-[#666] leading-relaxed line-clamp-3 mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <time
                          dateTime={post.date}
                          className="font-redhat text-[12px] text-[#999] uppercase tracking-[0.1em]"
                        >
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="font-redhat text-[12px] font-semibold uppercase tracking-[0.15em] text-fsl-coral group-hover:translate-x-1 transition-transform duration-200">
                          Read More &rarr;
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <NikeFooter />
    </>
  );
}
