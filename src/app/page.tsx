import { getPostMetadata } from "../../lib/posts"
import Link from "next/link"

const Home = () => {
  const posts = getPostMetadata()

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 ">{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home