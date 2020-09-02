<template>
  <div class="center" id="hero">
    <div v-if="hero_image" class="background">
      <prismic-image :field="hero_image"/>
      <div class="overlay"/>
    </div>
    <div class="container">
     <prismic-rich-text class="text mainTitle" v-if="headline" :field="headline"/>
     <prismic-rich-text class="description" v-if="subheadline" :field="subheadline"/>
      <div class="row">
        <button @click="scrollDown" class="button" style="margin-right: 20px">Get Started</button>
        <router-link class="button button-secondary button-light" to="/about">Learn more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    headline: Array,
    subheadline: Array,
    hero_image: Object,
    hero_video: Object
  },
  methods: {
    scrollDown(e){
      let selector = document.querySelector('#hiw');
      window.scrollTo({top: selector.offsetTop, behavior: 'smooth' });
    }
  }
}
</script>

<style lang="scss">
  #hero{
    height: 100vh;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    .container{
      padding-bottom: 20vh;
    }
    .mainTitle, .subtitle, .description{
      color: white;
    }
    .mainTitle{
      font-weight: 500;
      margin-bottom: 1rem;
      line-height: 1.2;
      width: 60%;
    }
    .description{
      margin-bottom: 2rem;
      width: 60%;
      p{
        font-size: $font-size-m;
      }
    }
    video{
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      left: 0;
      top: 0;
    }
    @include tablet{
      .mainTitle, .description{
        width: 100%;
      }
   }
    @include mobile{
      .container{
        padding-bottom: 12vh;
      }
    }
  }
</style>
