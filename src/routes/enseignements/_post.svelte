<script>
export let title
export let date
export let rubriques
</script>

<article>
  <h1>{title}</h1>
  
  <p><strong>Publié le:</strong> {date}</p>

  <slot />
</article>