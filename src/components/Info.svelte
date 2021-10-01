<script lang="ts">
  import Transition from "./shared/Transition.svelte";
</script>

<Transition x={-500}>
  <section class="info-section">Sample</section>
</Transition>

<style>
  .info-section {
    border: 2px solid var(--textColor);
  }
</style>
