<script lang="ts">
  import { onMount } from "svelte";
  import { store } from "./store";
  let loading = true;
  onMount(async () => {
    const res = await fetch(
      "https://gist.githubusercontent.com/vasanth2929/c9b48dd0ea6da69f1238a9e776f2de17/raw/946406bd6e383887c20f2ef8fce02c927cc83772/profile.json"
    );
    const data = await res.text();
    store.set(JSON.parse(data) as Data);
    loading = false;
  });
  import Main from "./components/Main.svelte";
  import type { Data } from "./types/data.type";
</script>

{#if loading}
  <div class="loader">
    <lottie-player
      src="https://assets10.lottiefiles.com/packages/lf20_8y9IYf.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px;"
      loop
      autoplay
    />
  </div>
{:else}
  <Main />
{/if}

<style>
  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
