import { getPostContent } from "../../../../lib/posts";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = getPostContent(params.slug);

    return {
      title: post.data.title,
      description: post.data.excerpt,
    };
  } catch {
    return {
      title: "Not Found",
    };
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const post = getPostContent(slug);

    return (
      <main>
        <h1 className="text-3xl font-bold mb-2">{post.data.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{post.data.date}</p>
        <div className="prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </main>
    );
  } catch (error) {
    return notFound();
  }
}

