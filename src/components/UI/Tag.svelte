<button
type="button"
id={tag.toLowerCase()}
on:click={() => {
  if(!window.document) return;
  
  window.document.location.href = `//${window.document.location.host}/tag/${tag.toLowerCase()}`
}}
  class={`isTag rounded-full select-none capitalize hover:brightness-125 transition bg-primary-dark/10 px-2.5 py-0.5 text-xs md:text-sm text-primary`}
>
  {tag}
</button>

<script>
  // props 
  export let tag = "Tag"
</script>