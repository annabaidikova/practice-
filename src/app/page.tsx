
import { Suspense } from "react";
import { getArticles } from "@/src/lib/queries";
import Link from "next/link";

async function Articles() {
  const articles = await getArticles();

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link
          href={`/articles/${article.slug}`}
          key={article.id}
          className="group flex flex-col gap-4 rounded-xl border border-gray-200 p-6 transition-all hover:border-gray-400 hover:shadow-md dark:border-gray-700 dark:hover:border-gray-500"
        >
          <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
            {article.category?.name ?? "Uncategorized"}
          </span>

          <h2 className="text-xl font-semibold tracking-tight group-hover:text-amber-700">
            {article.title}
          </h2>

          {article.excerpt && (
            <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {article.excerpt}
            </p>
          )}

          <span className="mt-auto text-sm font-medium text-amber-700">
            Read article →
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-700">
          The Journal
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Explore our articles
        </h1>

        <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">
          Insights, ideas, and stories about technology and design.
        </p>
      </header>

      <Suspense fallback={<p>Loading articles...</p>}>
        <Articles />
      </Suspense>
    </main>
  );
}


// // import { Suspense } from "react";
// // import { getArticles } from "../lib/queries";
// // import Link from 'next/link'

// // async function Articles() {
// //   const articles = await getArticles();

// //   return (
// //     <ul className="flex gap-2 mt-4">
// //       {articles.map((article) => (
// //         <li key={article.slug} className="p-4 rounded-2xl border border-amber-200">
// //           <Link href={`/articles/${article.slug}`}>
// //           <h2>{article.title}</h2>
// //           <span>{article.category?.name}</span>
// //         </Link>
// //         </li>
        
// //       ))}
// //     </ul>
// //   );
// // }

// // export default function HomePage() {
// //   return (
// //     <Suspense fallback={<p>Loading articles...</p>}>
// //       <Articles />
// //     </Suspense>
// //   );
// // }



// import { Suspense } from "react";
// import { getArticleText } from "@/src/lib/queries";

// type PageProps = {
//   params: Promise<{ slug: string }>;
// };



// async function ArticleDetails({ slug }: { slug: string }) {
//   const article = await getArticleText(slug);

//   if (!article) {
//     return <p>Article not found.</p>;
//   }

//   return (
//     <article>
//       <h1>{article.title}</h1>
//     </article>
//   );
// }

// export default async function ArticlePage({ params }: PageProps) {
//   const { slug } = await params;

//   return (
//     <Suspense fallback={<p>Loading article...</p>}>
//       <ArticleDetails slug={slug} />
//     </Suspense>
//   );
// }

