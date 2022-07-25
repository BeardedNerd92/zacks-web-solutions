import ImageUrlBuilder from "@sanity/image-url";
import Styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ posts }) {
  const router = useRouter();
  const [managePosts, setManagePosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imageBuilder = ImageUrlBuilder({
        projectId: "ns2vruty",
        dataset: "production",
      });

      setManagePosts(
        posts.map((post) => {
          return {
            ...post,
            mainImage: imageBuilder.image(post.mainImage).url(),
          };
        })
      );
    } else {
      setManagePosts([]);
    }
  }, [posts]);
  return (
    <>
      <section className={Styles.Home}>
        <h1 className='text-center mb-5'>Zack's Web Solutions</h1>

        <div className='row row-cols-1 row-cols-md-3 g-4 container'>
          {managePosts.length ? (
            managePosts.map((post, index) => (
              <div
                onClick={() => router.push(`/post/${post.slug.current}`)}
                key={index}
                className='col'>
                <div
                  className='card h-100 border-0'
                  style={{ cursor: "pointer" }}>
                  <h2 className='card-text text-center'>{post.title}</h2>
                  <img
                    className='img-fluid h-100'
                    src={post.mainImage}
                    alt={post.title}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className='text-center fs-3 container'>No posts found</p>
          )}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const query = encodeURIComponent(
    `*[_type == "post"] | order(publishedAt desc)`
  );
  const url = `https://ns2vruty.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
}
