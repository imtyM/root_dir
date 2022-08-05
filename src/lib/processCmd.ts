import Error from '$lib/Components/Error.svelte'
import type { SvelteComponent } from "svelte"

const outputs = import.meta.glob('$lib/Components/Commands/*.svelte', {
  eager: true
})

export const processCmd = (value: string) => {
  if (!value) return CR()

  const cmd = value?.split(' ')[0]
  let OutputComponent: typeof SvelteComponent | null = null;

  for (const path in outputs) {
    const program: typeof SvelteComponent = outputs[path]?.default
    const meta = outputs[path]?.meta

    const moduleCmds = meta?.cmd
    moduleCmds && moduleCmds.some((moduleCmd: string) => moduleCmd === cmd)
      && (OutputComponent = program)
  }

  return {
    component: (OutputComponent || Error),
    props: {
      cmd: value
    }
  }
}

const CR = () => ({
  component: Error,
  props: {
    cmd: null
  }
})
