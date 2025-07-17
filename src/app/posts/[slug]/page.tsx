import { getPostContent } from "../../../../lib/posts";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  try {
    const post = getPostContent(params.slug)

    return {
      title: post.data.title,
      description: post.data.excerpt
    }
  } catch {
    return {
      title: "Not Found"
    }
  }
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;

  try {
    const post = getPostContent(slug);

    return (
      <main className="max-w-2xl mx-auto p-4">
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
