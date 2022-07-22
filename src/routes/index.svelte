<script lang="ts">
  import History from "$lib/Components/History.svelte"
  import Prompt from "$lib/Components/Prompt.svelte"

  let value = ""
  let history = ""

  const submit = () => {
    history = history + '\n' + value
    value = ''
  }
</script>

<form on:submit|preventDefault={submit}>
  <History history={history} />
  <Prompt bind:value />
  <input type="submit" hidden/>
</form>
