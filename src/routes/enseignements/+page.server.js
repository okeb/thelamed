export const load = async ({ url }) => {
  const response = await fetch(`${url.origin}/api/enseignements`);
  const posts = await response.json();
  let rubriques = [];
  let rubriques_json = {}
  posts.forEach(post => {
    if (post.meta.rubriques.length) {
      post.meta.rubriques.forEach(rubrique => {
        if (!rubriques.includes(rubrique)){
          rubriques.push(rubrique)
          rubriques_json[rubrique] = 1
        }else{
          rubriques_json[rubrique] = rubriques_json[rubrique] + 1;
        }
      })
    }
  });

  return {
    posts,
    rubriques,
    rubriques_json,
  };
};
