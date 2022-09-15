<script>
    export let data
</script>
<h1> Rubrique {data.rubrique}</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores vitae sed labore ipsum assumenda vero nesciunt facilis! Non laborum repellat aut quos itaque magnam ad quae repudiandae harum eos.</p>
<div class="pl-20 my-14 nav-link">
    <a href="/enseignements/">
        retour
    </a>
</div>

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
