<script lang="ts">
  import type { SvelteComponent } from "svelte"
  import Output from "$lib/Components/Output.svelte"
  import Input from "$lib/Components/Input.svelte"

  import { processCmd } from "$lib/processCmd"
  import { valueIsClear } from '$lib/valueIsClear'

  type Result = {
    component: typeof SvelteComponent|null,
    props?: {
      cmd?: string|null
    }
  }

  let value = ""
  let elements: Result[] = []

  const submit = () => {
    if (valueIsClear(value)) {
      elements = []
    } else {
      elements = [...elements, processCmd(value)]
    }
    value = ''
  }
</script>

<form on:submit|preventDefault={submit}>
  <Output elements={elements} />
  <Input bind:value />
  <input type="submit" hidden/>
</form>
