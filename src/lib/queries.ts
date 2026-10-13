import { hygraphRequest } from "@/src/lib/hygraph";

// Calls hygraphRequest().
// Sends the GraphQL query you already tested in Hygraph.
// Returns the articles array.
// Uses TypeScript types to describe the response.

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: {
    name: string;
    slug: string;
  } | null;
};

export type ArticleText = {
  id: string;
  title: string;
  content: {
    html: string;
  } | null;
};

export async function getArticles(): Promise<Article[]> {
  const query = `
  query GetArticles {
  articles(stage: PUBLISHED) {
    id
    title
    slug
    excerpt
    category {
      name
      slug
    }
  }
}`;

  const data = await hygraphRequest<{ articles: Article[] }>(query);

  return data.articles;
}

export async function getArticleText(
  slug: string
): Promise<ArticleText | null> {
  const query = `
    query GetArticleText($slug: String!) {
  article(where: { slug: $slug }, stage: PUBLISHED) {
    id
    title
    content {
      html
    }
  }
}
  `;

  const data = await hygraphRequest<{
    article: ArticleText | null;
  }>(query, { slug });

  return data.article;
}
