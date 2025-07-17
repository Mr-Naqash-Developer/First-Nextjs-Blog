import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="text-blue-600 hover:underline">Go back home</Link>
    </main>
  )
}