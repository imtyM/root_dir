<script lang="ts">
  export let elements
</script>

{#each elements as element}
  <svelte:component this={element?.component}>
    {element?.children}
  </svelte:component>
{/each}

