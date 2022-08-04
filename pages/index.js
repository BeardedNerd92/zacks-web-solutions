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
        <div className='container'>
          {managePosts.length ? (
            managePosts.map((post, index) => (
              <div
                onClick={() => router.push(`/post/${post.slug.current}`)}
                key={index}>
                <div
                  className='card mb-3 border-0'
                  style={{ cursor: "pointer" }}>
                  <div className='row g-0'>
                    <div className='col-md-4'>
                      <img
                        className='img-fluid rounded-start'
                        src={post.mainImage}
                        alt={post.title}
                      />
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h3 className='card-title'>{post.title}</h3>
                        <p className='card-text'>
                          {post.description}
                          <span style={{ color: "blue" }}>..Read more</span>
                        </p>
                        <p className='card-text'>
                          <small className='text-muted'>
                            Published on{" "}
                            {new Date(post.publishedAt).toDateString()}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
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
