'use client'
// app/blog/[slug]/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Twitter, Linkedin } from 'lucide-react';
import { posts } from '@/lib/posts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

type Props = {
  params: { slug: string };
};

const BlogPost = ({ params }: Props) => {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/blog/${post.slug}`;
  const shareTitle = post.title;

  const handleShare = async (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      copy: shareUrl
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast.success('Link copied to clipboard!');
      } catch (err: any) {
        toast.error('Failed to copy link');
      }
    } else {
      window.open(urls[platform as keyof typeof urls], '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen ">
      <header className=" shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className=" rounded-xl shadow-lg overflow-hidden">
          <header className="p-8 pb-6 border-b">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-3">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl font-bold  mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6  mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="p-8">
            <div
              className="prose prose-lg max-w-none prose-headings: prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <footer className="p-8 pt-6 border-t ">
            <div className="mb-6">
              <h3 className="text-lg font-semibold  mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share this article
              </h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  className="hover:bg-blue-50 hover:border-blue-200"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                  className="hover:bg-blue-50 hover:border-blue-200"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('copy')}
                  className="hover:bg-gray-100"
                >
                  Copy Link
                </Button>
              </div>
            </div>

            <div className=" rounded-lg p-6 border">
              <h3 className="text-lg font-semibold  mb-3">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  OD
                </div>
                <div>
                  <p className=" mb-3">
                    I&apos;m <strong>Owolabi Destiny</strong>, a Full Stack Software Engineer specializing in secure web, mobile, and IoT systems.
                  </p>
                  <p className="">
                    Let&apos;s connect on{' '}
                    <a
                      href="https://www.linkedin.com/in/owolabi-destiny-oluwanifemi-231222265"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </a>{' '}
                    or explore my{' '}
                    <Link href="/" className="text-blue-600 hover:underline">
                      portfolio
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </article>

        <section className="mt-16">
          <h2 className="text-2xl font-bold  mb-8">More Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts
              .filter(p => p.slug !== post.slug)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className=" rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
                >
                  <Badge variant="secondary" className="mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="text-lg font-semibold  mb-2 group-hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className=" text-sm mb-3">
                    {relatedPost.excerpt.substring(0, 120)}...
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{formatDate(relatedPost.date)}</span>
                    <span>{relatedPost.readTime} min read</span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;
