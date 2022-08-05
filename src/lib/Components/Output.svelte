<script lang="ts">
import Input from "./Input.svelte";


  export let elements
</script>

<ul>
  {#each elements as element}
    <Input value={element.props?.cmd} readOnly/>
    <svelte:component this={element?.component} {...element.props}/>
  {/each}
</ul>

