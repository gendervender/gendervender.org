<template>
  <div id="statement" class="center">
    <prismic-rich-text class="text" v-if="fields.mission" :field="fields.mission"/>
    <div>
      <router-link class="underline" to="/">Learn more</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statement',
  props: {
    fields: Object
  }
}
</script>

<style scoped lang="scss">
  #statement{
    width: 100%;
    height: 100vh;
    flex-direction: column;
    div{
      margin-top: 32px;
      a{
        margin: 20px;
      }
    }
  }
  .text{
    text-align: center;
    font-weight: 500;
    font-size: 1.8rem;
    padding: 0 26vw;
  }
  .underline{
    font-size: 1.2rem;
  }
</style>
