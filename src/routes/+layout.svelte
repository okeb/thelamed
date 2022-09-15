<script>
  import Header from "$lib/components/_header.svelte";
  import Footer from "$lib/components/_footer.svelte";
  import '$lib/styles/fonts.css';
  import "$lib/styles/app.css";
  import "$lib/styles/app.scss";
  import "$lib/styles/global.css";

  import { fade } from 'svelte/transition'

  export let data
</script>
<Header />
{#key data.currentRoute}
<main id="root" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot><!-- optional fallback --></slot>
</main>
{/key}
<Footer />

