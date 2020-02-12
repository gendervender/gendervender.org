<template>
  <div class="center" id="landing">
    <div class="background" v-bind:style="{ 'background-image': `url(${landingFields.landing_image})` }"/>
    <div class="overlay"/>
    <prismic-rich-text class="mainTitle" v-if="landingFields.mainTitle" :field="landingFields.mainTitle"/>
    <prismic-rich-text class="description" v-if="landingFields.description" :field="landingFields.description"/>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    landingFields: Object
  }
}
</script>

<style scoped lang="scss">
  #landing{
    height: 100vh;
    // width: 100%;
    flex-direction: column;
  }
  .mainTitle, .subtitle, .description{
    color: white;
  }
  .mainTitle{
    font-size: 1.2rem;
  }
  .subtitle{
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
  .description{
    font-size: 1rem;
    width: 28vw;
  }
</style>
