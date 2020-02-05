<template>
  <div class="home">
    <Landing v-bind:landingFields="landingFields"/>
    <Statement v-bind:statementFields="statementFields"/>
  </div>
</template>
<style lang="scss" scoped>
  .home{
    margin-top: 10vh;
  }
</style>

<script>
import Landing       from '@/components/Landing.vue';
import Statement     from '@/components/Statement.vue';
export default {
  name: 'home',
  components: {
    Landing,
    Statement
  },
  data() {
    return{
      landingFields:{
        mainTitle: null,
        subtitle: null,
        description: null,
        landing_image: null
      },
      statementFields: {
        mission: null
      }
    }
  },
  methods: {
    async getContent(){ 
       const content = await this.$prismic.client.getSingle('home_page');
       this.assignContent(content.data);
    },
    assignContent(data){
       console.log(data)
       this.landingFields = {
         mainTitle: data.main_title,
         subtitle: data.subtitle,
         description: data.description,
         landing_image: data.landing_image.url
       };
       this.statementFields = {
         mission: data.mission_statement
       };
    }
  },
  created(){
    this.getContent();
  },
  mounted(){
    if(this.$route.hash){
      let selector = document.querySelector(this.$route.hash);
      if (selector) {
        let top = selector.offsetTop
        window.scrollTo({top, behavior: 'smooth' })
      }
    }
  }
}
</script>
