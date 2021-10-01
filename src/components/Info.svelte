<script lang="ts">
  import Skill from "./shared/Skill.svelte";
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

      <div class="degree">
        <h5>BACHELOR DEGREE</h5>
        <p class="college">Karunya University | 2016-2019</p>
        <p class="description">I have completed my BSC.IT degree with 83%.</p>
      </div>
    </div>
    <div class="info-section-skills info-section-item">
      <h3>SKILLS</h3>
      <div class="skill-container">
        <Skill skillname="HTML" skillRate={100} />
        <Skill skillname="CSS" skillRate={100} />
        <Skill skillname="JS" skillRate={100} />
        <Skill skillname="REACT" skillRate={70} />
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
  }
  .info-section-item {
    flex: 1;
    padding: 20px;
  }
  .info-section-contact {
    padding-left: 0px;
  }
  .info-section-skills {
    padding-right: 0px;
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
</style>
