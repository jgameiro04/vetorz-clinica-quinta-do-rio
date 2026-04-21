import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Saúde Oral — Clínica Quinta do Rio",
  description:
    "Artigos sobre saúde oral, prevenção e tratamentos dentários pela equipa da Clínica Quinta do Rio em Seixal.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200 bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-teal-600" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-widest text-teal-600">
              Blog
            </span>
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
            Saúde Oral
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-stone-600">
            Artigos informativos sobre prevenção, tratamentos e boas práticas de higiene oral,
            escritos pela equipa clínica da Clínica Quinta do Rio.
          </p>
        </div>
      </section>

      {/* Grid de posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-stone-500">Ainda não existem artigos publicados.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative flex flex-col rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Imagem placeholder */}
                  <div className="flex h-48 items-center justify-center rounded-t-2xl bg-gradient-to-br from-teal-50 to-teal-100">
                    <svg
                      className="h-16 w-16 text-teal-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    {/* Categoria + badge demo */}
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                        {post.category}
                      </span>
                      {post.demo && (
                        <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                          Demonstração
                        </span>
                      )}
                    </div>

                    <h2 className="mb-3 text-lg font-semibold leading-snug text-stone-900 group-hover:text-teal-700">
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mb-5 flex-1 text-sm leading-relaxed text-stone-500">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t border-stone-100 pt-4 text-xs text-stone-400">
                      <span>{post.author}</span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
