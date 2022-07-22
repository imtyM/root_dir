<script lang="ts">
  import Prompt from "$lib/Components/Prompt.svelte"

  let value = ""
  let history = ""

  const submit = () => {
    history = history + '\n' + value
    value = ''
  }
</script>

<form on:submit|preventDefault={submit}>
  <textarea readonly bind:value={history}/>
  <Prompt bind:value />
  <input type="submit" hidden/>
</form>
