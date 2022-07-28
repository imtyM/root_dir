<script context="module">
  export const meta = {
      name: 'Echo',
      cmd: 'echo'
    };
</script>

<script lang='ts'>
  export let cmd = 'echo'

  const echo = cmd.split(' ').slice(1).join(' ')
  console.log({cmd, echo})
</script>

<div>
  <p>{echo}</p>
</div>
