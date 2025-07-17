import fs from 'fs'
import matter from 'gray-matter';
import path from "path";

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getPostContent(slug: string): { content: string; data: PostMetadata} {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, "utf8")

  const { data, content } = matter(fileContent)

  return {
    content,
    data: {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      slug,
    }
  }
}

export function getPostMetadata(): PostMetadata[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((filename) => filename.endsWith(".md")) // ✅ Only .md files
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        slug: filename.replace(".md", ""),
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
