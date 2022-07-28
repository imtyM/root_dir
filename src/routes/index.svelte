<script lang="ts">
  import type { SvelteComponent } from "svelte"
  import History from "$lib/Components/History.svelte"
  import Prompt from "$lib/Components/Prompt.svelte"

  import { processCmd } from "$lib/processCmd"

  type Result = {
    component: typeof SvelteComponent,
    children: typeof SvelteComponent[] | typeof SvelteComponent | string
  }

  let value = ""
  let elements: Result[] = []

  const submit = () => {
    elements = [...elements, processCmd(value)]
    value = ''
  }
</script>

<form on:submit|preventDefault={submit}>
  <History elements={elements} />
  <Prompt bind:value />
  <input type="submit" hidden/>
</form>
