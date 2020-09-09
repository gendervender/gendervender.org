<template>
  <div class="center" id="hero">
    <div v-if="hero_image" class="background">
      <prismic-image :field="hero_image" />
    </div>
    <div class="container">
      <div class="hero__wrapper">
        <prismic-rich-text v-if="headline" :field="headline" />
        <prismic-rich-text v-if="subheadline" :field="subheadline" />
        <div class="row">
          <button @click="scrollDown" class="button" style="margin-right: 12px">Get Started</button>
          <router-link class="button button-secondary button-dark" to="/about">Learn more</router-link>
        </div>
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
    .background{
      margin-top: 12vh;
      height: 88vh;
      @include mobile{
        height: 92vh;
        margin-top: 8vh;
      }
    }
    .container{
      padding-bottom: 8vh;
    }
    .hero__wrapper{
      width: 45%;
      background: rgba(255,255,255, 0.95);
      padding: 3.2rem 2.4rem;
      border-radius: 8px;
      box-sizing: border-box;
    }
    h1 {
      font-size: $font-size-xl;
    }
    p {
      font-size: $font-size-xs;
    }
    video{
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      left: 0;
      top: 0;
    }
    @include desktop {
      .container{
        padding-bottom: 12vh;
      }
      h1 {
        font-size: $font-size-xxl;
      }

      p {
        font-size: $font-size-m;
      }
    }
    @include tablet {
      .hero__wrapper {
        width: 100%;
      }

      h1 {
        font-size: $font-size-l;
      }

      p {
        font-size: $font-size-xs;
      }
    }
    @include mobile{
      justify-content: center;
      .container{
        .row{
          flex-direction: column;
          .button{
            margin-right: 0%!important;
            margin-top: 0.8rem;
          }
        }
      }
    }
  }
</style>
