<template>
  <section class="hero is-fullheight is-dark">
    <blocks ref="blocks" @openPage="$refs[`page-${$event}`].open()"/>
    <block-content-about ref="page-1" @close="$refs.blocks.close()"/>
    <block-content-experience ref="page-2" @close="$refs.blocks.close()"/>
    <block-content-portfolio ref="page-3" @close="$refs.blocks.close()"/>
    <block-content-contact ref="page-4" @close="$refs.blocks.close()"/>
      <p class="copyright">Copyright ©2019 Susanna Lepola.<br> All Rights Reserved.</p>
  </section>
</template>

<script>
import Blocks from '~/components/site_contents/Blocks.vue'
import BlockContentAbout from '~/components/site_contents/Block-content-about.vue'
import BlockContentExperience from '~/components/site_contents/Block-content-experience.vue'
import BlockContentPortfolio from '~/components/site_contents/Block-content-portfolio.vue'
import BlockContentContact from '~/components/site_contents/Block-content-contact.vue'


export default {
  components: {
    Blocks,
    BlockContentAbout,
    BlockContentExperience,
    BlockContentPortfolio,
    BlockContentContact
  },
  layout: 'blank'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:500|Roboto+Mono');

.hero {
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  &:before {
  background: 
  linear-gradient(
  rgba(0, 0, 0, 0.73), 
  rgba(0, 0, 0, 0.1)
  ),
  url("~/static/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  content: "";
  filter: blur(3px);
  height: 100%;
  position: absolute;
  width: 100%;
  }
  h1 {
  font-size: 2em;
  font-family: 'Poppins', sans-serif;
  }
  .copyright {
    position: absolute;
    color: #9e9e9e;
    bottom: 2rem;
    right: 2rem;
    font-size: 0.8em;
  }
}
@media (max-width: 800px) {
  .hero {
    .copyright {
      position: absolute;
      color: #9e9e9e;
      bottom: 1rem;
      right: unset;
      text-align: center;
      font-size: 0.8em;
    }
  }
}
</style>