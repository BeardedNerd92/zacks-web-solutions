import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";
import { Toolbar } from "../../components/toolbar";
import Styles from "../../styles/Posts.module.css";

export function Post({ title, body, image, publishedAt, subTitle }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "ns2vruty",
      dataset: "production",
    });
    setImageUrl(imageBuilder.image(image).url());
  }, [image]);

  return (
    <>
      <Toolbar />
      <section className='container'>
        <h1 className='text-center mb-3 fw-bolder'>{title}</h1>
        <h2 className='text-center mb-3 fw-lighter'>{subTitle}</h2>
        <div className='d-flex justify-content-center'>
          {imageUrl && (
            <img
              className='img-thumbnail mb-5'
              src={imageUrl}
              alt={title}
              width={500}
            />
          )}
        </div>
        <div className='d-flex'>
          <caption className='text-center container fs-4 mb-3'>
            Published {new Date(publishedAt).toDateString()}
          </caption>
        </div>
        <BlockContent blocks={body} className='lh-base container fs-4' />
      </section>
    </>
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
      props: {
        body: post.body,
        publishedAt: post.publishedAt,
        title: post.title,
        subTitle: post.subtitle,
        image: post.mainImage,
      },
    };
  }
}

export default Post;
