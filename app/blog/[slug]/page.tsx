import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CtaMarcacaoSection } from "@/components/clinic/CtaMarcacaoSection";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Clínica Quinta do Rio`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "Article"],
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    lastReviewed: post.date,
    author: {
      "@type": "Physician",
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: {
        "@type": "MedicalClinic",
        "@id": "https://clinicaquintadorio.com/#clinic",
        name: "Clínica Quinta do Rio",
      },
    },
    publisher: {
      "@type": "MedicalClinic",
      "@id": "https://clinicaquintadorio.com/#clinic",
      name: "Clínica Quinta do Rio",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://clinicaquintadorio.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-stone-200 bg-stone-50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <a
              href="/blog"
              className="text-sm font-medium text-teal-600 transition-colors hover:text-teal-700"
            >
              Blog
            </a>
            <span className="text-stone-300" aria-hidden="true">
              /
            </span>
            <span className="text-sm text-stone-500">{post.category}</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-snug tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-500">
            <span className="font-medium text-stone-700">{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.authorRole}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>

          {post.demo && (
            <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <strong>Conteúdo de demonstração</strong> — Este artigo é um placeholder para
              demonstrar a funcionalidade do blog. Deverá ser substituído por conteúdo validado pela
              equipa clínica antes da publicação.
            </div>
          )}
        </div>
      </section>

      {/* Conteúdo MDX */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-stone-900 prose-a:text-teal-700 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-teal-500 prose-blockquote:bg-teal-50 prose-blockquote:py-1 prose-blockquote:text-stone-700 prose-strong:text-stone-900 prose-li:text-stone-600 prose-p:text-stone-600 prose-p:leading-relaxed">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>

      <CtaMarcacaoSection />
    </>
  );
}
