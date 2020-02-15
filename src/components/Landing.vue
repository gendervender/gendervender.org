<template>
  <div class="center" id="landing">
    <div class="background" :style="{ 'background-image': `url(${landingFields.landing_image})` }"/>
    <div class="overlay"/>
    <prismic-rich-text class="text mainTitle" v-if="landingFields.mainTitle" :field="landingFields.mainTitle"/>
    <prismic-rich-text class="description" v-if="landingFields.description" :field="landingFields.description"/>
    <div class="row">
      <a data-id="" class="button button-inversed" style="margin-right: 20px">View Stories</a>
      <router-link class="button button-light" to="/donate">Donate</router-link>
    </div>
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
    width: 100%;
    padding: 24vh 6vw;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .mainTitle, .subtitle, .description{
    color: white;
  }
  .mainTitle{
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 2rem;
  }
  .subtitle{
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
  .description{
    margin-bottom: 0.8rem;
    font-size: 1rem;
    width: 28vw;
  }
</style>
