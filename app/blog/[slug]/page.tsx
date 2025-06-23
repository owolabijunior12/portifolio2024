import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const formattedDate = new Date(post.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article aria-labelledby="blog-title" className="prose prose-lg dark:prose-invert">
        {/* Blog Title and Date */}
        <header className="mb-6">
          <h1 id="blog-title" className="text-4xl font-bold tracking-tight leading-snug">
            {post.title}
          </h1>
          <time dateTime={post.date} className="text-sm text-gray-500">
            {formattedDate}
          </time>
        </header>

        {/* Post Content */}
        <section dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Social Share */}
        <div className="mt-12 border-t pt-6">
          <p className="text-sm text-gray-600 mb-2">Enjoyed this post? Share it:</p>
          <div className="flex gap-3">
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `${post.title} - https://iboytech123.vercel.app/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </Link>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://iboytech123.vercel.app/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              LinkedIn
            </Link>
            <Link
              href={`https://wa.me/?text=${encodeURIComponent(
                `${post.title} - https://iboytech123.vercel.app/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              WhatsApp
            </Link>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t text-sm  ">
          <h3 className="font-semibold text-lg mb-2">About the Author</h3>
          <p>
            I&lsquo;m <strong>Owolabi Destiny</strong>, a Full Stack Software Engineer specializing in secure web, mobile, and IoT systems.
            I build performance-driven applications using React, Node.js, ESP32, and advanced security protocols.
          </p>
          <p className="mt-2">
            Let’s connect on{" "}
            <Link
              href="https://www.linkedin.com/in/owolabi-destiny-oluwanifemi-231222265"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </Link>{" "}
            or explore my{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              portfolio
            </Link>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
