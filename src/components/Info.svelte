<script lang="ts">
  import Skill from "./shared/Skill.svelte";
  import Transition from "./shared/Transition.svelte";
  import { store } from "../store";
</script>

<Transition x={-500} delay={900}>
  <section class="info-section">
    <div class="info-section-contact info-section-item">
      <h3>CONTACT</h3>
      <div class="contact-container">
        <span class="material-icons-outlined icon"> call </span>
        <a href="tel:{$store.contact.phone}" class="link"
          >{$store.contact.phone}</a
        >
      </div>
      <div class="contact-container">
        <span class="material-icons-outlined icon"> email </span>
        <a href="mailto:{$store.contact.email}" class="link"
          >{$store.contact.email}</a
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

      <div class="degree">
        <h5>BACHELOR DEGREE</h5>
        <p class="college">Karunya University | 2016-2019</p>
        <p class="description">I have completed my BSC.IT degree with 83%.</p>
      </div>
    </div>
    <div class="info-section-skills info-section-item">
      <h3>SKILLS</h3>
      <div class="skill-container">
        {#each $store.skills as skill}
          <Skill skillname={skill.name} skillRate={skill.skillRate} />
        {/each}
      </div>
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
    max-height: 280px;
  }
  .info-section-item {
    flex: 1;
    padding: 20px;
  }
  .info-section-contact {
    padding-left: 0px;
  }
  .info-section-skills {
    /* padding-right: 0px; */
    overflow-y: auto;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
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

  .degree {
    margin-top: 20px;
  }

  .degree h5 {
    font-size: 16px;
    padding-bottom: 5px;
  }

  .degree .college {
    font-style: italic;
  }

  .degree .description {
    padding-top: 10px;
  }
  .skill-container {
    margin-top: 10px;
  }

  @media screen and (max-width: 1000px) {
    .info-section {
      display: block;
      border: none;
      max-height: max-content !important;
    }
    .info-section-education,
    .info-section-skills,
    .info-section-contact {
      border: 0px;
      padding: 20px;
      border: 1px solid var(--textColor);
    }
    .info-section-education,
    .info-section-skills {
      margin-top: 20px;
    }
  }
</style>
