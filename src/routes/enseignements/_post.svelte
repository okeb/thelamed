<script>
  import Time from "svelte-time";
  export let title
  export let date
  export let rubriques
  export let rubriques_json


</script>
<div style="height:screen; background-color:rgb(245, 158, 11); font-family:'Merriweather'; padding-top:140px; text-align:center; padding-bottom:70px; margin-top:0px;">
  <h1>{title}</h1>
  <p><strong>Publié le:</strong> <Time timestamp="{date}" format="D MMM, YYYY" /></p>
</div>
<div id="main_box">
    <slot />
</div>



