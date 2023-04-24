<script>
  export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
{#await data.promise}
  Loading planet...
{:then result}
  <ul>
    {#each result.tags as tag}
      <li>{tag.name}</li>
    {/each}
  </ul>
{:catch someError}
  System error: {someError.message}.
{/await}
