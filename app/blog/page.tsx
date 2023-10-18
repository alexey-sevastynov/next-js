import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://velo-shop-api.vercel.app/bicycles", {
    next: { revalidate: 60 }, // time update page
  });

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      Blog Page:{" "}
      <ul>
        {posts.map((post: any) => (
          <li key={post._id}>
            <Link href={`/blog/${post._id}`}>{post.fullName}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
