<script>
    import Time from "svelte-time";
    export let data
</script>

<div class="bg-red-600 dark:bg-pink-800 grid py-20 md:grid-cols-3 grid-cols-1 lg:px-24 <lg:px-1  bg-origin-border bg-no-repeat bg-cover bg-center" style="background-image:url('')">
    <div class="col-span-2">
        <h1 class="font-lato font-extrabold tracking-tight text-left lg:px-20 @md:px-12 px-7 pb-0" style="color:white">{data.rubrique}</h1>
        <p class="font-lato text-left md:px-10 pb-10 text-xl text-white" style="color:white">
            {#if data.rubrique == "Les Fondamentaux"}
                Cette partie traite des sujets qui viennent affermir la foi des chrétiens. Ils sont nécessaires pour la croissance spirituelle et l’affermissement des croyant en Rabbi Yehowshuw‘a -Mashiyah. A l’exemple de la doctrine sur le Salut : <span class="italic font-merri text-sm font-light">C’est pourquoi, il nous faut prendre garde de plus près aux choses que nous avons entendues, de peur que nous les laissions s’échapper. Car, si la Parole prononcée par leur moyen des anges a été ferme, et si toute transgression et toute désobéissance ont reçu une juste rémunération, comment échapperons-nous si nous négligeons un si grand salut, qui a commencé à être annoncé d’abord par le Seigneur et qui nous a été confirmé par ceux qui l’avaient entendu ?</span> (Hébreux 2:1-3_BYM).
            {/if}
            {#if data.rubrique == "La Doctrine Apostolique"}
                Cette section aborde les questions d’ordre doctrinal qu’il est nécessaire de connaître pour défendre la Parole dans le cadre de l’assemblée du Seigneur : <span class="italic font-merri text-sm">Quiconque va au-delà et ne demeure pas dans la doctrine du Mashiah n’a pas Elohîm. Celui qui demeure dans la doctrine du Mashiah a le Père et le Fils. Si quelqu’un vient vers et n’apporte pas cette doctrine, ne le recevez pas dans votre maison et ne lui dites pas : Salut ! Car celui qui lui dit : Salut, participe à ses mauvaises œuvres.</span> (2 Yohanan [Jean] 1:9-11_BYM).
            {/if}
            {#if data.rubrique == "L'Eschatologie"}
                Tous les sujets enseignés de cette rubrique seront en relation directe avec la Fin des temps : <span class="italic font-merri text-sm">Mais s’étant assis sur la Montagne des Oliviers, ses disciples vinrent à lui en particulier et lui dirent : Dis-nous quand ces choses arriveront-elles, et quel sera le signe de ton avènement et de l’achèvement de l’âge ?</span>  (Matthaios [Matthieu] 24:3_BYM).
            {/if}
            {#if data.rubrique == "L'Historique"}
                Dans cette rubrique, tous les sujets enseignés seront en relation directe avec la Fin des temps : <span class="italic font-merri text-sm">Car si ces choses sont en vous et y abondent, elles ne vous laisseront pas paresseux ni stériles pour la connaissance précise et correctes de notre Seigneur Yéhoshoua Mashiah</span> (2 Petros [2 Pierre] 1:8_BYM).
            {/if}
            {#if data.rubrique == "Les Réligions"}
                Dans cette section, nous aborderons les religions et leurs fausses doctrines : <span class="italic font-merri text-sm">Et participez pas aux œuvres stérile de la ténèbre, mais plutôt condamnez-les en effet !</span>   (Ephésiens 5:11_BYM).
            {/if}
            {#if data.rubrique == "Les Audios"}
                Cette rubrique permettra de publier des exhortations, des enseignements via des audios afin d’édifier le maximum des frères et les sœurs.
            {/if}
            {#if data.rubrique == "Les Livres"}
                Dans cette dernière partie, nous mettrons des livres à la disposition des frères et des sœurs pour leurs édifications.
            {/if}
        </p>
    </div>
    <div  class="col-span-1 <md:px-8">
        <!-- <img src="/abstract-brainstorm.gif" alt="" srcset=""> -->
    </div>
</div>
<!-- <div class="pl-20 my-14 nav-link">
    <a href="/enseignements/">
        retour
    </a>
</div> -->
<div class="lg:px-48 @md:px-12 px-8">
    <div class="col-span-4 mt-16 mb-16">
        <h2 class="mt-0 ml-0 text-left font-sans text-3xl font-bold tracking-tight" style="margin-left:0 !important;">Les enseignements</h2>
        <div class="flex justify-between -mt-2 py-0">
            <p class="text-[25px] font-lato px-0 tracking-normal font-light" style="margin-left:0px !important;">Découvrez nos enseignements sur {data.rubrique }</p>
        </div>
    </div>
    {#if data.posts.length}
         <div class="grid md:grid-cols-2 grid-cols-1 gap-7">
             {#each data.posts as post}
              {#if post.meta.published == true }
                <div class="col-span-1">
                    <div class="p-0 grid md:grid-cols-3 grid-cols-1 gap-7 lg:mb-24 @md:mb-12 mb-6">
                    <div class="h-[10rem] col-span-1 rounded-md bg-light-700 border-2 border-yellow-500 bg-origin-border bg-no-repeat bg-cover bg-center" style="background-image:url('{post.meta.image}')">
                    </div>
                    <div class="col-span-2">
                        <h5 class="-ml-10 text-left font-sans text-xl font-bold tracking-tight leading-6" style="margin-left:0px !important"><a class="underline-transparent text-black hover:text-black hover:underline" href="{post.path}">{post.meta.title}</a></h5>
                        <!-- <p class="text-md font-lato px-0 text-gray-700 mb-3"  style="margin-left:0px !important">{ post.meta.summary }</p> -->
                        <p class="text-md font-lato px-0 text-gray-700 mb-3"  style="margin-left:0px !important">
                            {#if post.meta.summary }
                                { post.meta.summary.slice(0, 198) }
                                {#if post.meta.summary.length > 198 }...{/if}
                            {/if}
                        </p>
                        <div class="">
                        <p class="inline-block text-sm font-lato px-0 text-gray-400 inline-block" style="margin-left:0px !important;">
                            <a href="/enseignements/rubrique/lol" class="text-sm font-lato px-0 text-gray-400 font-normal inline-block inline-block" style="text-decoration:none !important; margin-left:0px !important; opacity:.5">
                                { post.meta.rubriques }
                            </a>
                            <span class="text-sm inline-block inline-block px-2" style="margin:0px !important; font-size:9px; opacity:.3">&nbsp;&bull;</span>
                            <Time style="font-size:x-small; margin-left:0px !important; opacity:.2" timestamp="{ post.meta.date }" format="D&nbsp;MMM" />
                        </p>
                        <a href="{ post.meta.download }" target="_blank" rel="noopener noreferrer" class="underline-transparent  -mt-6">
                            <div class="mt-6 font-lato text-left leading-3 font-bold flex items-center justify-start px-0 mx-0 mt-4 cursor-pointer">
                            <svg width="28" height="28" viewBox="0 0 24 24" class="inline-block"><path fill="lightseagreen" d="M8 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 12H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.29.29 0 0 0-.1 0a1.1 1.1 0 0 0-.31-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2Zm0-14.59L15.59 8H14a1 1 0 0 1-1-1ZM14 12H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6.71 6.29a1 1 0 0 0-1.42 0l-.29.3V16a1 1 0 0 0-2 0v2.59l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2-2a1 1 0 0 0 0-1.42ZM12 18a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Z"/></svg>
                            <span class="select-none ml-2" style="opacity:.5">Télécharger en PDF</span>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            {/if}
         {/each}
         </div>
    {/if}
</div>
<div class="h-20 w-full"></div>
