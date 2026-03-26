import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import '../resources.scss';

const contentDir = path.join(process.cwd(), 'content/resources');

function getArticleBySlug(slug) {
  const files = fs.readdirSync(contentDir);
  const match = files.find(
    (file) => file.replace(/\.mdx?$/, '').toLowerCase() === slug.toLowerCase()
  );
  if (!match) return null;

  const raw = fs.readFileSync(path.join(contentDir, match), 'utf-8');
  const { content, data } = matter(raw);
  return { content, frontmatter: data, filename: match };
}

export async function generateStaticParams() {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => ({ slug: f.replace(/\.mdx?$/, '') }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Not Found' };

  const title = article.frontmatter.title || slug.replace(/-/g, ' ');
  return {
    title: `${title} | YieldStream Resources`,
    description: article.frontmatter.description || '',
  };
}

export default async function ResourceArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <section className="section">
        <div className="container">
          <h1>Article not found</h1>
          <Link href="/resources">← Back to Resources</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="resource-article__hero">
        <div className="container">
          <Link href="/resources" className="resource-article__back">
            ← Back to Resources
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow resource-article__content">
          <MDXRemote source={article.content} />
        </div>
      </section>
    </>
  );
}
