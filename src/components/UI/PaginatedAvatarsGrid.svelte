<script lang="ts">
  // props
  export let limit: number = 5;
  export let data: any = [];

  // imports
  import AvatarCard from "../Card/Avatar.svelte";

  // show more
  function showMore() {
    limit += limit;
  }
</script>

{#each data.slice(0, limit) as avatar}
  <AvatarCard data={avatar} />
{/each}

{#if limit < data.length}
  <div class="grid place-items-center">
    <button
      on:click={showMore}
      type="button"
      class="md:rounded-2xl rounded-lg btn btn-md mx-4 md:btn-lg bg-gradient-to-r shadow-md shadow-primary-dark from-primary to-primary-dark"
    >
      Show more
    </button>
  </div>
{/if}
