<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { fly } from "svelte/transition";
  export let x: number = 0;
  export let y: number = 0;
  export let delay: number = 0;
  export let duration: number = 1000;
  export let opacity: number = 1;
  let showBlock: boolean = false;
  let timer = null;
  onMount(() => {
    timer = setTimeout(() => {
      showBlock = true;
    }, 1200);
  });
  onDestroy(() => {
    clearTimeout(timer);
  });
</script>

{#if showBlock}
  <div class="name" transition:fly={{ x, y, delay, duration, opacity }}>
    <slot />
  </div>
{/if}
