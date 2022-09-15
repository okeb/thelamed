<script>
  export let title
  export let date
  export let rubriques
  export let rubriques_json
  import "$lib/styles/app.scss";
</script>

<div class="main_box">
  <div class="col-span-3">
    <article class="article_post">
      <h1>{title}</h1>
      <p><strong>Publié le:</strong> {date}</p>

      <slot />
    </article>
  </div>
  <aside class="aside_post"></aside>
</div>


