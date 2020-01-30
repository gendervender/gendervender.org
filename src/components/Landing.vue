<template>
  <div class="hello">
    <prismic-rich-text class="mainTitle" v-if="landingFields.mainTitle" :field="landingFields.mainTitle"/>
    <prismic-rich-text class="subtitle" v-if="landingFields.subtitle" :field="landingFields.subtitle"/>
    <prismic-rich-text class="description" v-if="landingFields.description" :field="landingFields.description"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    landingFields: Object
  }
}
</script>

<style scoped lang="scss">
  .mainTitle{
    font-size: 1.2rem;
    color: var(--primary);
  }
  .subtitle{
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
</style>
