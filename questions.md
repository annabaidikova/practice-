
1. Example: Create an article from code
You can send a GraphQL mutation to Hygraph:
```bash 
mutation {
  createArticle(
    data: {
      title: "My first article"
      slug: "my-first-article"
      excerpt: "Created using GraphQL"
    }
  ) {
    id
    title
  }
}
```


This creates a new article in Hygraph, assuming your model's required fields are provided and your API credentials have permission.
It doesn't automatically publish it. You would also use a publication mutation.


2. What if you want to manage the Hygraph schema from code?
This is called CMS as Code — exactly the concept from your Hygraph quiz!
You can use the official Hygraph Management SDK:
npm install @hygraph/management-sdk

With it, you can programmatically:
- Create and modify content models, such as Article and Category.
- Add fields and relationships.
- Configure taxonomies, workflows, and webhooks.
- Apply schema migrations through scripts and CI/CD.
For example, rather than manually adding a readingTime field to Article in the Hygraph dashboard, you could create a migration script that adds it automatically