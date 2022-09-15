<script>
  export let data
</script>

<h1>Nos enseignements</h1>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, harum architecto minus tempore, ex consequuntur ipsam, mollitia repudiandae blanditiis ullam facilis a amet consequatur eius quis deserunt temporibus aut molestiae.</p>
{#if data.rubriques.length }
  <aside>
    <ul class="list-none flex gap-8">
    {#each data.rubriques as rubrique }
      <li>
        <a href="/enseignements/rubrique/{rubrique}">
          {rubrique} ({data.rubriques_json[rubrique]})
        </a>
      </li>
    {/each}
    </ul>
  </aside>
{/if}
<ul class="lg:px-12 <lg:px-8 list-none">
  {#each data.posts as post}
    {#if post.meta.published == true}
      <li>
        <h2>
          <a href={post.path} class="text-2xl">
            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/if}
  {/each}
</ul>