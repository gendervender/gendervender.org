<template>
  <div class="center" id="landing">
    <div class="background">
      <video v-if="fields.landing_video" autoPlay muted loop playsInline :src="fields.landing_video"/>
    </div>
    <div class="overlay"/>
    <prismic-rich-text class="text mainTitle" v-if="fields.mainTitle" :field="fields.mainTitle"/>
    <prismic-rich-text class="description" v-if="fields.description" :field="fields.description"/>
    <div class="row">
      <a @click="handleClick" data-id="stories" class="button button-inversed" style="margin-right: 20px">View Stories</a>
      <router-link class="button button-light" to="/donate">Donate</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    fields: Object,
    handleClick: Function
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
    margin-bottom: 1.4rem;
    width: 28vw;
  }
  video{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
</style>
