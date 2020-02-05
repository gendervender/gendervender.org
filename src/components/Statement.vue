<template>
  <div id="statement" class="center">
    <prismic-rich-text class="text" v-if="statementFields.mission" :field="statementFields.mission"/>
    <div>
      <router-link class="underline" to="/donate">Watch Stories &rarr;</router-link>
      <router-link class="underline" to="/donate">Donate &rarr;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statement',
  props: {
    statementFields: Object
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
    font-weight: 500;
    font-size: 1.8rem;
    padding: 0 26vw;
  }
</style>
