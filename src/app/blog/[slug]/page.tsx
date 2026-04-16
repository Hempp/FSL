import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getPostBySlug, getReadingTime } from "@/content/blog";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { ShareButtons } from "@/components/blog/ShareButtons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const readingTime = getReadingTime(slug);
  const shareUrl = `https://fundamentalsportslabs.org/blog/${slug}`;
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          image: `https://fundamentalsportslabs.org${post.image}`,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: post.author,
            url: "https://fundamentalsportslabs.org",
          },
          publisher: {
            "@type": "Organization",
            name: "Fundamental Sports Labs",
            logo: {
              "@type": "ImageObject",
              url: "https://fundamentalsportslabs.org/images/ft-logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://fundamentalsportslabs.org/blog/${post.slug}`,
          },
        }}
      />
      <NikeHeader />
      <main id="main-content" className="min-h-screen bg-white">
        {/* Hero image */}
        <section className="relative h-[320px] md:h-[420px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fsl-dark/80 via-fsl-dark/40 to-fsl-dark/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-[800px] mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-redhat text-[11px] uppercase tracking-[0.1em] text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-barlow text-[28px] md:text-[44px] font-bold uppercase leading-[0.95] text-white mb-3">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-redhat text-[13px] text-white/70">
                  {post.author}
                </span>
                <span className="hidden sm:inline text-white/30">|</span>
                <time
                  dateTime={post.date}
                  className="font-redhat text-[13px] text-white/70"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="hidden sm:inline text-white/30">&middot;</span>
                <span className="font-redhat text-[13px] text-white/70">
                  {readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Share buttons */}
        <div className="max-w-[800px] mx-auto px-6 md:px-12 pt-8">
          <ShareButtons title={post.title} url={shareUrl} />
        </div>

        {/* Article content */}
        <article className="py-12 md:py-20">
          <div className="max-w-[800px] mx-auto px-6 md:px-12">
            <div className="prose prose-lg max-w-none font-redhat text-[#333] leading-[1.8] [&_h2]:font-barlow [&_h2]:text-[24px] [&_h2]:md:text-[28px] [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-fsl-dark [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-barlow [&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:uppercase [&_h3]:text-fsl-dark [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_ul]:mb-5 [&_ol]:mb-5 [&_li]:mb-2 [&_strong]:text-fsl-dark [&_a]:text-fsl-coral [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-fsl-dark [&_a]:transition-colors">
              <BlogPostContent slug={slug} />
            </div>
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="pb-12 md:pb-16">
            <div className="max-w-[800px] mx-auto px-6 md:px-12">
              <div className="border-t border-black/10 pt-12">
                <h2 className="font-barlow text-[20px] md:text-[24px] font-bold uppercase text-fsl-dark mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block"
                    >
                      <article className="border border-black/5 rounded-xl p-5 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {related.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="font-redhat text-[10px] uppercase tracking-[0.1em] text-fsl-coral bg-fsl-coral/10 px-2 py-0.5 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-barlow text-[16px] md:text-[18px] font-bold uppercase leading-tight text-fsl-dark mb-2 group-hover:text-fsl-coral transition-colors duration-200">
                          {related.title}
                        </h3>
                        <p className="font-redhat text-[13px] text-[#666] leading-relaxed line-clamp-2">
                          {related.description}
                        </p>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back to blog */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-[800px] mx-auto px-6 md:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-redhat text-[13px] font-semibold uppercase tracking-[0.15em] text-fsl-coral hover:text-fsl-dark transition-colors duration-200"
            >
              &larr; Back to all articles
            </Link>
          </div>
        </section>
      </main>
      <NikeFooter />
    </>
  );
}
