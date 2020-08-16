<template>
  <div class="center container cta-block">
    <prismic-rich-text v-if="content" :field="content"/>
    <router-link class="button button-dark button-secondary" :to="cta.href">{{cta.text}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'CTABlock',
  props: {
    content: Array,
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
      font-size: $font-size-m;
      margin-top: 0rem;
    }
    .button{
      margin-top: 0.4rem;
    }
    @include mobile{
      p{
        font-size: $font-size-xs;
      }
    }
  } 
</style>
