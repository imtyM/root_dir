<script lang="ts">
  export let elements
  $: console.log({elements})
</script>

{#each elements as element}
  <svelte:component this={element?.component} {...element.props}/>
{/each}

