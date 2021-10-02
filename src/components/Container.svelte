<div class="container">
  <slot />
</div>

<style>
  .container {
    margin: 120px;
  }

  @media screen and (max-width: 720px) {
    .container {
      margin: 120px 20px;
    }
  }
</style>
