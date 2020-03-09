<template>
  <div id="statement" class="center">
    <prismic-rich-text class="title" v-if="fields.mission" :field="fields.mission"/>
    <div>
      <router-link class="underline" to="/about">Learn more</router-link>
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
  .title{
    text-align: center;
    padding: 0 20vw;
  }
  .underline{
    font-size: 1.2rem;
  }
  @include mobile{
    .title{
      padding: 0 10vw;
      h2{
        font-size: 16px;
      }
    }
  }
  @include tablet{
    .title{
      padding: 0 8vw;
    }
  }
</style>
