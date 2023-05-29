import Link from "next/link";
import { BlogCard } from "../containers/BlogCard";
import { posts } from "../data/post";

export default function Home() {
  return (
    <main className="max-w-4xl px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl uppercase">Our Blog post</h1>
        <div className="flex">
          <Link href={"/"}>Home</Link>/
          <Link href={"/"} className="font-bold">
            Blog
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {posts?.map((posts) => (
          <BlogCard key={posts?.id} {...posts} />
        ))}
      </div>
    </main>
  );
}
