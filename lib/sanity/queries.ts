export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  "slug": slug.current,
  title,
  excerpt,
  category,
  coverImage,
  publishedAt
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  excerpt,
  category,
  coverImage,
  publishedAt,
  author,
  body
}`;
