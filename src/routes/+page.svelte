<script>
  export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
{#await data.promise}
  Loading tags...
{:then result}
  <ul>
    {#each result.tags as tag}
      <li>{tag.name}</li>
    {/each}
  </ul>
{:catch error}
  System error: {error.message}.
{/await}
