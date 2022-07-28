import Error from '$lib/Components/Error.svelte'
import type { SvelteComponent } from "svelte"

const outputs = import.meta.glob('$lib/Components/Outputs/*.svelte', {
  eager: true
})

export const processCmd = (value: string) => {
  if (!value) return CR()

  const cmd = value?.split(' ')[0]
  let OutputComponent: typeof SvelteComponent | null = null;

  for (const path in outputs) {
    const program: typeof SvelteComponent = outputs[path]?.default
    const meta = outputs[path]?.meta

    const moduleCmd = meta?.cmd
    moduleCmd === cmd && (OutputComponent = program)
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
})
