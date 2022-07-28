import Line from "$lib/Components/Line.svelte"

export const processCmd = (value: string) => {
  return {
    component: Line,
    children: value
  }
}
