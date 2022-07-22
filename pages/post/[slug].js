import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";
import { Toolbar } from "../../components/toolbar";

export function Post({ title, body, image }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "ns2vruty",
      dataset: "production",
    });
    setImageUrl(imageBuilder.image(image).url());
  }, [image]);

  return (
    <div>
      <Toolbar />
      <h1>{title}</h1>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <BlockContent blocks={body} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  if (!slug) {
    return { notFound: true };
  }
  const query = encodeURIComponent(
    `*[_type == "post" && slug.current == "${slug}"]`
  );
  const url = `https://ns2vruty.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return { notFound: true };
  } else {
    return {
      props: { body: post.body, title: post.title, image: post.mainImage },
    };
  }
}

export default Post;
