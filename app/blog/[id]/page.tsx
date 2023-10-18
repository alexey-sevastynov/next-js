type PropsPost = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://velo-shop-api.vercel.app/bicycles/${id}`,
    {
      next: { revalidate: 60 }, // time update page
    }
  );

  return response.json();
}

export default async function Post({ params: { id } }: PropsPost) {
  const post = await getData(id);
  console.log(post);
  return <>Post Page: {post.description}</>;
}
