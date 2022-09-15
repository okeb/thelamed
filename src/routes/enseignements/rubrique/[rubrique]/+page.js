export const load = async ({ fetch, params }) => {
  const { rubrique } = params;
  const response = await fetch(`/api/enseignements`);
  const allPosts = await response.json();

  const posts = allPosts.filter((post) => post.meta.rubriques.includes(rubrique));

  return {
    rubrique,
    posts,
  };
};
