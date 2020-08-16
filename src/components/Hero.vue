<template>
  <div class="center" id="hero">
    <div v-if="hero_image" class="background" :style="`background-image: url(${hero_image.url})`">
      <div class="overlay"/>
    </div>
    <div class="container">
     <prismic-rich-text class="text mainTitle" v-if="headline" :field="headline"/>
     <prismic-rich-text class="description" v-if="subheadline" :field="subheadline"/>
      <div class="row">
        <a class="button" style="margin-right: 20px">Get Started</a>
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
    .background{
      background-size: cover;
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
    @include mobile{
      .container{
        padding-bottom: 12vh;
      }
      .mainTitle, .description{
        width: 100%;
      }
    }
    @include tablet{
      .mainTitle, .description{
        width: 100%;
      }
   }
  }
</style>
