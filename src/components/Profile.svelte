<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import { fly } from "svelte/transition";
  let timer = null;
  let showBlock = false;
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
  <section class="profile-section" transition:fly={{ duration: 1000, x: 500 }}>
    <div class="wrapper">
      <div class="line" />
      <h5>Profile</h5>
      <div class="line" />
    </div>
    <div class="description">
      I am passionate about Frontend Technologies & I enjoy learning new things.
    </div>
  </section>
{/if}

<style>
  .profile-section {
    text-align: center;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper h5 {
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0px 20px;
    color: var(--textColor);
  }
  .wrapper .line {
    width: 70px;
    height: 2px;
    background: var(--textColor);
  }
  .description {
    margin-top: 20px;
  }
</style>
