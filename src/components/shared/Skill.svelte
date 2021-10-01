<script>
  import { onMount, onDestroy } from "svelte";

  import { tweened } from "svelte/motion";
  export let skillname = "HTML";
  export let skillRate = 0;
  let width = tweened(0);
  let id = null;
  onMount(() => {
    id = setTimeout(() => {
      width.set(skillRate);
    }, 800);
  });
  onDestroy(() => {
    clearTimeout(id);
  });
</script>

<div class="skill">
  <p>{skillname}</p>
  <div class="bg">
    <div class="percent" style={`width:${$width}%`} />
  </div>
</div>

<style>
  .skill {
    margin-bottom: 20px;
  }
  .bg {
    position: relative;
    width: 100%;
    height: 5px;
    background-color: var(--bgColor);
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid grey;
  }
  .percent {
    position: absolute;
    background: rgba(206, 126, 126, 0.685);
    left: 0px;
    top: 0px;
    height: 100%;
    border-radius: 5px;
  }
</style>
