
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleText } from "@/src/lib/queries";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function ArticleDetails({ params }: PageProps) {
      const { slug } = await params;

  const article = await getArticleText(slug);
  

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/"
        className="mb-10 inline-flex text-sm text-gray-500 transition-colors hover:text-amber-700"
      >
        ← Back to articles
      </Link>

      <header className="mb-10 border-b border-gray-200 pb-8 dark:border-gray-700">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-amber-700">
          The Journal
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {article.title}
        </h1>
      </header>

      <div
        className="space-y-5 text-base leading-8 text-gray-700 dark:text-gray-300 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_a]:text-amber-700 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
        dangerouslySetInnerHTML={{
          __html: article.content?.html ?? "",
        }}
      />
    </article>
  );
}

export default async function ArticlePage({ params }: PageProps) {

  return (
    <main className="min-h-screen px-6 py-16">
      <Suspense fallback={<p>Loading article...</p>}>
        <ArticleDetails params={params} />
      </Suspense>
    </main>
  );
}
