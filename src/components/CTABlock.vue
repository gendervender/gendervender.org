<template>
  <div :class="stories ? 'container cta-block cta-block__stories' : 'container cta-block' ">
    <img src="../assets/founders.png" v-if="stories"/>
    <prismic-rich-text v-if="content" :field="content"/>
    <router-link class="button button-dark button-secondary" :to="cta.href">{{cta.text}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'CTABlock',
  props: {
    content: Array,
    stories: Boolean,
    cta: {
      text: String,
      href: String
    }
  }
}
</script>

<style lang="scss">
  .cta-block{
    background-color: $site-bg;
    padding: 8%;
    box-sizing: border-box;
    text-align: center;
    p {
      font-size: $font-size-s;
      margin-top: 0rem;
    }
    .button{
      display: inline-block;
    }
    @include mobile{
      width: 100%;
      p{
        font-size: $font-size-xs;
      }
    }
    &__stories{
      text-align: left!important;
      position: relative;
      p{
        width: 40%;
        z-index: 1;
      }
      img{
        position: absolute;
        z-index: 0;
        right: 0;
        top: 0;
        width: 60%;
        height: 100%;
        object-fit: contain;
      }
    }
  } 
</style>
