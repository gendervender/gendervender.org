<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Landing msg="Welcome to Your Vue.js App" v-bind:landingFields="landingFields"/>
  </div>
</template>
<style lang="scss">
  img{
    width: 50px;
  }
</style>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'

export default {
  name: 'home',
  components: {
    Landing
  },
  data() {
    return{
      landingFields:{
        mainTitle: null,
        subtitle: null,
        description: null
      }
    }
  },
  methods: {
    async getContent(){  	
       const content = await this.$prismic.client.getSingle('home_page');
       this.landingFields.mainTitle = content.data.main_title;
       this.landingFields.subtitle = content.data.subtitle;
       this.landingFields.description = content.data.description;
    }
  },
  created(){
    this.getContent();
  }
}
</script>
