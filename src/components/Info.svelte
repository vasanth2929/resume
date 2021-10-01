<script lang="ts">
  import Transition from "./shared/Transition.svelte";
</script>

<Transition x={-500}>
  <section class="info-section">
    <div class="info-section-contact info-section-item">
      <h3>CONTACT</h3>
      <div class="contact-container">
        <span class="material-icons-outlined icon"> call </span>
        <a href="tel:9791586271" class="link">9791586271</a>
      </div>
      <div class="contact-container">
        <span class="material-icons-outlined icon"> email </span>
        <a href="mailto:vasanth10098@gmail.com" class="link"
          >vasanth10098@gmail.com</a
        >
      </div>

      <div class="address-container">
        <h3>ADDRESS:</h3>
        <address class="address">
          3/14 Ayyasami street, Perur, Chettipalam, Coimbatore, Tamilnadu, India
        </address>
      </div>
    </div>
    <div class="info-section-education info-section-item">
      <h3>EDUCATIONS</h3>
    </div>
    <div class="info-section-skills info-section-item">
      <h3>SKILLS</h3>
    </div>
  </section>
</Transition>

<style>
  .info-section {
    border: 1px solid var(--textColor);
    display: flex;
    border-left: 0;
    border-right: 0;
    margin-top: 40px;
    color: var(--textColor);
  }
  .info-section-item {
    flex: 1;
    padding: 20px;
  }
  .info-section-contact {
    padding-left: 0px;
  }
  .info-section-contact,
  .info-section-education {
    border-right: 1px solid var(--textColor);
  }
  .contact-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--textColor);
    padding-bottom: 5px;
  }
  .contact-container:first-child {
    margin-top: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--textColor);
  }
  .icon {
    margin-right: 10px;
  }

  .address-container {
    margin-top: 20px;
  }
  .address {
    margin-top: 10px;
  }
</style>
