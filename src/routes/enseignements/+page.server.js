export const load = async ({ url }) => {
  const response = await fetch(`${url.origin}/api/enseignements`);
  const posts = await response.json();
  let rubriques = [];
  posts.forEach(post => {
    if (post.meta.rubriques.length) {
      post.meta.rubriques.forEach(rubrique => {
        if (!rubriques.includes(rubrique)){
          rubriques.push(rubrique)
        }
      })
    }
  });

  return {
    posts,
    rubriques
  };
};
