import imageUrlBuilder from "@sanity/image-url";

export function About() {
  const builder = imageUrlBuilder({
    projectId: "ns2vruty",
    dataset: "production",
  });

  function urlFor(source) {
    return builder.image(source).url();
  }
  return <></>;
}
export default About;
