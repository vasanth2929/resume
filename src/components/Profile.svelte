<script>
  import Transition from "./shared/Transition.svelte";
  import { store } from "../store";
</script>

<Transition x={500} delay={600}>
  <section class="profile-section">
    <div class="wrapper">
      <div class="line" />
      <h5>Profile</h5>
      <div class="line" />
    </div>
    <div class="description">
      {$store.profileDescription}
    </div>
  </section>
</Transition>

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
