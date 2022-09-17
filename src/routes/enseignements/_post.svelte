<script>
  export let title
  export let date
  export let rubriques
  export let rubriques_json
  import "$lib/styles/app.scss";
</script>
<div style="height:screen; background-color:rgb(245, 158, 11); font-family:'Merriweather'; padding-top:130px; text-align:center">
  <h1>{title}</h1>
  <p><strong>Publié le:</strong> {date}</p>
</div>
<div id="main_box">
  <article class="article_post">
    <slot />
  </article>

  <aside class="aside_post">
    <ol class="aside-menu">
      <li>Vous vous appelez comment ?</li>
      <li>Oui mais nous, nous parlons du roller</li>
      <li>Du relais comme pour… roller, roller</li>
      <li>Les rollers c’est pas dans les sports, c’est pas une discipline sportive ?</li>
      <li>Oui mais le sport, le roller, est-ce que vous le connaissez ?</li>
      <li>Vous connaissez comment ça se pratique ?</li>
    </ol>
  </aside>
</div>


