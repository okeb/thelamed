<script>
    let start = false;

    setTimeout(() => {
        start = true
    }, 400);

    function typewriter(node, { speed = 1 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.016);

		return {
			duration,
			tick: t => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>


<div>
    <section class="hero grid grid-cols-1 content-center h-screen <md:px-10 <xl:px-24 xl:px-56 py-0">
        <div>
            {#if start}
                <h1 class="text-center font-lato font-semibold -mb-1 leading-13 md:leading-17 text-5xl md:text-7xl -mt-12" transition:typewriter>Des enseignements bibliques qui bâtissent votre Foi.</h1>
            {/if}
        </div>
        <p class="mb-8 text-xl font-lato text-center text-gray-500 lg:text-2xl dark:text-gray-400">Retrouvez <span class="underline-blue-500 underline underline-offset-2 underline-2">gratuitement</span> des enseignements sur <span class="underline-green-500 underline underline-offset-2">diverses domaines de la marche du chrétien</span>, et à la lumière de la parole du Seigneur <span class="underline-yellow-500 underline underline-offset-2 underline-2">Yehowshuw'a Ha-Mashiyah</span>, selon l’excellence de sa grâce.</p>

        <a href="/enseignements" class="home-button bg-dark-700 shadow-lg text-white font-lato flex justify-center items-center px-6 py-3 scale-z-75 hover:scale-z-90 text-base font-medium rounded-md whitespace-nowrap hover:bg-gray-600 dark:hover:bg-yellow-500 border-transparent mx-auto">
            <svg class="inline-block my-auto mr-2" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm5-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z" fill="currentColor"/></g></svg>
            <p class="my-0 mx-auto p-0">Découvrez les enseignements</p>
        </a>

            <div class="flex justify-center hidden">
                <button class="pushable">
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front">
                        <svg class="inline-block -my-0.5 mr-2" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm5-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z" fill="currentColor"/></g></svg>Lisez notre dernier enseignement
                    </span>
                </button>
            </div>
    </section>
</div>

<style>
    .home-button {

    }

    a.home-button p {
        color:#FFF;
    }
    a.home-button {
        color:#FFF;
        text-decoration: none;
    }
</style>