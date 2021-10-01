<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { fly } from "svelte/transition";
  export let x: number = 0;
  export let y: number = 0;
  export let delay: number = 1200;
  export let duration: number = 1000;
  export let opacity: number = 1;
  let showBlock: boolean = false;
  export let height: string = "auto";
  let timer = null;
  onMount(() => {
    timer = setTimeout(() => {
      showBlock = true;
    }, delay);
  });
  onDestroy(() => {
    clearTimeout(timer);
  });
</script>

<div style={`min-height:${height}`}>
  {#if showBlock}
    <div class="name" transition:fly={{ x, y, duration, opacity }}>
      <slot />
    </div>
  {/if}
</div>
