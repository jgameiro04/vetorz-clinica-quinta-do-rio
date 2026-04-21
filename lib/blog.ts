import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorRole: string;
  excerpt: string;
  category: string;
  demo: boolean;
};

export type Post = PostMeta & {
  content: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        author: data.author as string,
        authorRole: data.authorRole as string,
        excerpt: data.excerpt as string,
        category: data.category as string,
        demo: (data.demo as boolean) ?? false,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): Post | undefined {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return undefined;

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    author: data.author as string,
    authorRole: data.authorRole as string,
    excerpt: data.excerpt as string,
    category: data.category as string,
    demo: (data.demo as boolean) ?? false,
    content,
  };
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
