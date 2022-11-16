<script>
  // import Time from "svelte-time";
  export let title
  // export let date
  export let ref
</script>
<div style="height:screen; background-color:rgb(245, 158, 11); font-family:'Merriweather'; padding-top:140px; text-align:center; padding-bottom:70px; margin-top:0px;">
  <h1>{title}</h1>
  <!-- <p><strong>Publié le:</strong> <Time timestamp="{date}" format="D MMM, YYYY" /></p> -->
  <p><strong>Référence:</strong> {ref}</p>
</div>
<div id="main_box">
    <slot />
</div>



