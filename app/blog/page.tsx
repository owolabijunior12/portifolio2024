import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Insights & Articles
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Explore curated content on development, security, and real-world engineering challenges.
        </p>
      </header>

      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-zinc-200 dark:border-zinc-700 pb-6">
            <article aria-labelledby={`post-${post.slug}`}>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2
                  id={`post-${post.slug}`}
                  className="text-2xl font-semibold text-blue-600 group-hover:underline"
                >
                  {post.title}
                </h2>
              </Link>
              <time className="block text-sm text-gray-500 mt-1">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">{post.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
