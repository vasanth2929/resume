<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import { fly } from "svelte/transition";
  import Container from "./Container.svelte";
  import Profile from "./Profile.svelte";
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

<main class="main">
  {#if showBlock}
    <div class="name" transition:fly={{ x: 0, y: -100 }}>
      <h3>VASANTH</h3>
      <p>FRONTEND DEVELOPER</p>
    </div>
  {/if}
</main>

<Container>
  <Profile />
</Container>

<style>
  .main {
    background-color: rgb(131, 131, 131);
    height: 120px;
  }
  .name {
    background-color: white;
    position: relative;
    top: 50px;
    width: 600px;
    margin: auto;
    padding: 20px;
    text-align: center;
    border: 2px solid var(--primaryColor);
    border-radius: 2px;
  }
  .name h3 {
    font-size: 60px;
    letter-spacing: 5px;
  }
  .name p {
    font-size: 16px;
    letter-spacing: 2px;
  }
</style>
