<script>
    export let data
</script>
<h1> Rubrique {data.rubrique}</h1>
{#if data.posts.length}
     {#each data.posts as post}
          {#if post.meta.published == true}
            <li  class="lg:px-12 <lg:px-8 list-none">
                <h2>
                <a href={post.path} class="text-2xl">
                    {post.meta.title}
                </a>
                </h2>
                Published {post.meta.date}
            </li>
        {/if}
     {/each}
{/if}
