<script lang='ts'>
  import Prompt from "$lib/Components/Prompt.svelte";
  export let value: string
  export let readOnly: boolean = false
</script>

<Prompt>
  <input
    bind:value
    readonly={readOnly}
    class="w-full border-2 border-slate-100"
  >
</Prompt>

