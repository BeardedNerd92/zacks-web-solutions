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
        <h1 className={Styles.Title}>{title}</h1>
        <h2 className={Styles.SubTitle}>{subTitle}</h2>
        <div className='d-flex justify-content-center'>
          {imageUrl && (
            <img
              className='img-fluid'
              src={imageUrl}
              alt={title}
              width={700}
              height={525}
            />
          )}
        </div>
        <div className='d-flex'>
          <p className='text-center container mt-2'>
            <small className='text-muted'>
              Published {""}
              {new Date(publishedAt).toDateString()}
            </small>
          </p>
        </div>
        <BlockContent blocks={body} className={Styles.Body} />
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
