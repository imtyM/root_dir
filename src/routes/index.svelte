<script lang="ts">
  import type { SvelteComponent } from "svelte"
  import Output from "$lib/Components/Output.svelte"
  import Prompt from "$lib/Components/Prompt.svelte"

  import { processCmd } from "$lib/processCmd"

  type Result = {
    component: typeof SvelteComponent|null,
    props?: {
      cmd?: string
    }
  }

  let value = ""
  let elements: Result[] = []

  const submit = () => {
    elements = [...elements, processCmd(value)]
    value = ''
  }
</script>

<form on:submit|preventDefault={submit}>
  <Output elements={elements} />
  <Prompt bind:value />
  <input type="submit" hidden/>
</form>
