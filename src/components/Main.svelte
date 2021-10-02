<script lang="ts">
  import Container from "./Container.svelte";
  import Profile from "./Profile.svelte";
  import Info from "./Info.svelte";
  import Transition from "./shared/Transition.svelte";
  import { store } from "../store";
</script>

<main class="main">
  <Transition y={-100} delay={200}>
    <div class="name">
      <h3>{$store.name}</h3>
      <p>{$store.role}</p>
    </div>
  </Transition>
</main>
<Container>
  <Profile />
  <Info />
</Container>

<style>
  .main {
    background-color: rgb(131, 131, 131);
    height: 120px;
    text-transform: uppercase;
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

  @media screen and (max-width: 720px) {
    .name {
      width: 90%;
    }
    .name h3 {
      font-size: 42px;
    }
  }
</style>
