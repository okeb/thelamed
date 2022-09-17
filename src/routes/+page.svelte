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



<section>
    <section class="hero grid grid-cols-1 content-center h-screen <md:px-8 xl:px-48">
        <div>
            {#if start}
                 <h1 class="text-center font-lato font-semibold leading-13 md:leading-17 text-5xl md:text-7xl" transition:typewriter>Des enseignements bibliques qui bâtissent votre Foi.</h1>
            {/if}
        </div>
        <p class="mb-8 text-xl font-lato text-center text-gray-500 lg:text-2xl dark:text-gray-400">Retrouvez <span class="underline-blue-500 underline underline-offset-2 underline-2">gratuitement</span> des enseignements sur <span class="underline-green-500 underline underline-offset-2">diverses domaines de la marche du chrétien</span>, et à la lueur de la parole du Seigneur <span class="underline-yellow-500 underline underline-offset-2 underline-2">Yehowshuw'a Ha-Mashiyah</span>, selon l’excellence de sa grâce.</p>
        <div>
            <button class="bg-black shadow-lg text-white font-lato flex justify-center px-6 py-2 scale-z-75 hover:scale-z-90  text-base font-medium rounded-md whitespace-nowrap hover:bg-gray-600 dark:hover:bg-yellow-500 border-transparent mx-auto"><svg class="inline-block my-auto mr-2" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm5-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z" fill="currentColor"/></g></svg><span class="mb-1.5">Lisez votre 1<sup>er</sup> enseignement</span></button>

            <div class="flex justify-center hidden">
                <button class="pushable">
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front">
                        <svg class="inline-block -my-0.5 mr-2" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm5-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z" fill="currentColor"/></g></svg>Lisez votre 1<sup>er</sup> enseignement
                    </span>
                </button>
            </div>
        </div>
    </section>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">


 
    </div>
</section>

<style lang="scss">
    .hero button {
        color:#FFF;
        font-weight:bold;
    }

  .pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    font-family: lato;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 13px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 13px;
    // background-color:hsl(340deg 100% 32%);
    background-color:#000;
  }
  .front {
    display: block;
    position: relative;
    padding: 10px 42px;
    border-radius: 13px;
    font-size: 1rem;
    padding-bottom: 14px;
    color: white;
    background: #222;
    // background: hsl(345deg 100% 47%);
    will-change: transform;
    transform: translateY(-4px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .pushable:hover {
    filter: brightness(110%);
  }
  .pushable:hover .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .pushable:hover .shadow {
    transform: translateY(4px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  .pushable:focus:not(:focus-visible) {
    outline: none;
  }

</style>