<!-- <script context="module">
  import "dayjs/esm/locale/fr";
  import dayjs from "dayjs/esm";

  dayjs.locale("fr"); // french locale
</script> -->

<script>
  import Time from "svelte-time";
  export let data
</script>

<div class="grid md:grid-cols-4 grid-cols-1 lg:px-40  px-8 gap-7 mt-24" id="enseignement">
  <div class="col-span-4">
    <p class="pl-0 ml-0 text-left font-sans text-lg font-bold tracking-tight">Bonjour, Bonsoir à vous&nbsp;!</p>
    <h2 class="mt-0 ml-0 text-left font-sans text-3xl font-bold tracking-tight" style="margin-left:0px !important;">Nos différentes rubriques</h2>
    <div class="md:flex justify-between -mt-2 py-0">
      <p class="text-[25px] font-lato px-0 tracking-normal font-light" style="margin-left:0px !important;">Choisissez la thématique qui vous interèsse</p>
      <a href="/" id="list-rubrique-button" class="text-lg font-normal font-lato px-0" style="margin-right:0px !important; text-decoration:none !important;">Voir la liste</a>
    </div>
  </div>

  <div class="col-span-4">
    {#if data.rubriques.length }
      <div class="pb-6 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7">
        {#each data.rubriques as rubrique }
          <a href="/enseignements/rubrique/{rubrique}" class="flex w-[23rem] group mr-6 justify-start"  style="text-decoration:none !important">
            {#if (rubrique === 'La Doctrine Apostolique') }
               <div class="rounded-md h-16 w-28 bg-light-700 group-hover:border-2 group-hover:border-yellow-400 bg-origin-border bg-no-repeat bg-cover bg-center mr-5" style="background-image:url('https://images.unsplash.com/photo-1618754581039-cb18405446f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"></div>
            {:else if  (rubrique === 'Les Fondamentaux') }
              <div class="rounded-sm h-16 w-28 bg-light-700 group-hover:border-2 group-hover:border-yellow-400 bg-origin-border bg-no-repeat bg-cover bg-center mr-5" style="background-image:url('https://images.unsplash.com/photo-1554322662-5b660295377d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"></div>
            {:else if  (rubrique === "L'Historique") }
              <div class="rounded-sm h-16 w-28 bg-light-700 group-hover:border-2 group-hover:border-yellow-400 bg-origin-border bg-no-repeat bg-cover bg-center mr-5" style="background-image:url('https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"></div>
            {:else}
               <div class="rounded-sm h-20 w-28 bg-light-700 group-hover:border-2 group-hover:border-yellow-400 bg-origin-border bg-no-repeat bg-cover bg-center"></div>
            {/if}
            <div>
              <div class="underline-opacity-100"><h4 class="font-lato font-extrabold tracking-tight text-[24px] leading-6 group-hover:underline" style=" margin-left:0 !important">
                {rubrique}
              </h4></div>
              <p class="text-md font-lato font-normal px-0 opacity-70" style="text-decoration-line: none !important; margin-left:0 !important; margin-top:-5px !important">{data.rubriques_json[rubrique]} enseignement{ data.rubriques_json[rubrique] > 1 ? 's' : ''}</p>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </div>

  <!-- titre des derniers enseignements -->
  <div class="col-span-4 px-0">
    <h2 class="mt-0 ml-0 text-left font-sans text-3xl font-bold tracking-tight" style="margin-left:0 !important;">Nos derniers enseignements</h2>
    <div class="flex justify-between -mt-2 py-0">
      <p class="text-[25px] font-lato px-0 tracking-normal font-light" style="margin-left:0px !important;">Découvrez nos dernières parutions toutes rubriques confondues</p>
    </div>
  </div>

  {#each data.posts as post, index}
    {#if post.meta.published == true && index == 0 }
      <div class="p-0 relative lg:h-[625px] h-[495px] lg:col-span-2 col-span-4 lg:row-span-2 row-span-1 last-post">
        <div class="p-0">
          <div class="h-[20rem] w-full rounded-sm bg-light-700 border-2 border-yellow-500 bg-origin-border bg-no-repeat bg-cover bg-center" style="background-image:url('{post.meta.image}')"></div>
          <a href="{post.path}" style="text-decoration:none !important">
            <h5 class="-ml-10 mt-3 text-left font-sans text-4xl pt-2 font-bold tracking-tight" style="margin-left:0px !important; text-decoration:none !important">{post.meta.title}</h5>
          </a>
          <p class="inline-block text-sm font-lato font-normal px-0 text-gray-400" style="margin:0px !important">
            <a href="/enseignements/rubrique/{post.meta.rubriques}" style="text-decoration:none !important">
              { post.meta.rubriques }
            </a>
          </p>
          <p class="text-sm inline-block" style="margin:0px !important;  opacity:.3 !important;">
            &nbsp;&bull;
          </p>
          <p class="inline-block text-sm font-lato px-0 text-gray-400" style="margin-left:0px !important; opacity:.3">
            <Time relative timestamp="{post.meta.date}" format="D MMM YYYY" />
          </p>
        </div>
        <p class=" absolute bottom-0 left-0 font-lato text-left leading-3 font-bold flex items-center justify-start px-0 mx-0 mt-4 cursor-pointer">
          <svg width="28" height="28" viewBox="0 0 24 24" class="inline-block"><path fill="lightseagreen" d="M8 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 12H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.29.29 0 0 0-.1 0a1.1 1.1 0 0 0-.31-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2Zm0-14.59L15.59 8H14a1 1 0 0 1-1-1ZM14 12H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6.71 6.29a1 1 0 0 0-1.42 0l-.29.3V16a1 1 0 0 0-2 0v2.59l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2-2a1 1 0 0 0 0-1.42ZM12 18a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Z"/></svg>
          <span class="select-none ml-2" style="opacity:.5">Télécharger en PDF</span>
        </p>
      </div>
    {:else if post.meta.published == true && index > 0 && index < 5 }
      <div class="pb-10 relative row-span-1 col-span-4 md:col-span-2 lg:col-span-1">
        <div class="md:h-[9rem] h-[15rem] w-full rounded-sm bg-light-700 border-2 border-yellow-500 bg-origin-border bg-no-repeat bg-cover bg-center" style="background-image:url('{post.meta.image}')">
        </div>
        <a href="{post.path}" style="text-decoration:none !important">
          <h5 class="-ml-10 mt-4 text-left font-sans text-2xl font-bold tracking-tight leading-6" style="margin-left:0px !important">{post.meta.title}</h5>
        </a>
        <p class="inline-block text-sm font-lato px-0 text-gray-400 inline-block pb-4" style="margin-left:0px !important;">
          <a href="/enseignements/rubrique/{post.meta.rubriques}" class="text-sm font-lato px-0 text-gray-400 font-normal inline-block inline-block" style="text-decoration:none !important; margin-left:0px !important">
            { post.meta.rubriques }
          </a>
          <span class="text-sm inline-block inline-block" style="margin:0px !important; font-size:9px; opacity:.2">&nbsp;&bull;</span>
          <Time style="font-size:xx-small; margin-left:0px !important; opacity:.3" timestamp="{post.meta.date}" format="D&nbsp;MMM" />
        </p>
        <p class="lg:absolute lg:bottom-0 lg:left-0 font-lato text-left leading-3 font-bold flex items-center justify-start px-0 mx-0 mt-4 cursor-pointer">
          <svg width="28" height="28" viewBox="0 0 24 24" class="inline-block"><path fill="lightseagreen" d="M8 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 12H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.29.29 0 0 0-.1 0a1.1 1.1 0 0 0-.31-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2Zm0-14.59L15.59 8H14a1 1 0 0 1-1-1ZM14 12H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6.71 6.29a1 1 0 0 0-1.42 0l-.29.3V16a1 1 0 0 0-2 0v2.59l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2-2a1 1 0 0 0 0-1.42ZM12 18a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Z"/></svg>
          <span class="select-none ml-2" style="opacity:.5">Télécharger en PDF</span>
        </p>
      </div>
    {/if}
  {/each}

  <div class="col-span-4 h-48"></div>

  <!-- titre du reste des enseignements -->
  <!-- <div class="col-span-4 mt-16 px-0 mb-4">
    <h2 class="mt-0 ml-0 text-left font-sans text-3xl font-bold tracking-tight" style="margin-left:0 !important;">À ne pas manquer</h2>
    <div class="flex justify-between -mt-2 py-0">
      <p class="text-[25px] font-lato px-0 tracking-normal font-light" style="margin-left:0px !important;">Les enseignements indispensables, sélectionnées par nos soins</p>
    </div>
  </div>

  <div class="md:col-span-3 col-span-4">
    <div class="p-0 grid md:grid-cols-3 grid-cols-1 gap-7 mb-40">
      <div class="h-[10rem] col-span-1 rounded-md bg-light-700 border-2 border-yellow-500 bg-origin-border bg-no-repeat bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1593526613712-7b4b9a707330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')">
      </div>
      <div class="col-span-2">
        <h5 class="-ml-10 text-left font-sans text-xl font-bold tracking-tight leading-6" style="margin-left:0px !important">How Did Adult Friendships Get So Complicated?</h5>
        <p class="text-md font-lato px-0 text-gray-700 mb-3"  style="margin-left:0px !important">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem rerum placeat aut voluptatibus fugiat quibusdam similique harum quidem? </p>
        <p class="inline-block text-sm font-lato px-0 text-gray-400 inline-block" style="margin-left:0px !important;">
          <a href="/enseignements/rubrique/lol" class="text-sm font-lato px-0 text-gray-400 font-normal inline-block inline-block" style="text-decoration:none !important; margin-left:0px !important; opacity:.5">
            { 'La Doctrine Apostolique' }
          </a>
          <span class="text-sm inline-block inline-block px-2" style="margin:0px !important; font-size:9px; opacity:.3">&nbsp;&bull;</span>
          <Time style="font-size:x-small; margin-left:0px !important; opacity:.2" timestamp="{ '2022-12-12' }" format="D&nbsp;MMM" />
        </p>
        <div class="mt-6 font-lato text-left leading-3 font-bold flex items-center justify-start px-0 mx-0 mt-4 cursor-pointer">
          <svg width="28" height="28" viewBox="0 0 24 24" class="inline-block"><path fill="lightseagreen" d="M8 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 12H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.29.29 0 0 0-.1 0a1.1 1.1 0 0 0-.31-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2Zm0-14.59L15.59 8H14a1 1 0 0 1-1-1ZM14 12H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6.71 6.29a1 1 0 0 0-1.42 0l-.29.3V16a1 1 0 0 0-2 0v2.59l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2-2a1 1 0 0 0 0-1.42ZM12 18a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Z"/></svg>
          <span class="select-none ml-2" style="opacity:.5">Télécharger en PDF</span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-span-1 hidden md:block">
  </div> -->

</div>
