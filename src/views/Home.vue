<template>
  <div class="home">
    <Landing :landingFields="landingFields"/>
    <Statement :statementFields="statementFields"/>
    <PageDivider :imageUrl="homeFields.dividerOne"/>
    <How :howFields="howFields" />
    <PageDivider :imageUrl="homeFields.dividerTwo"/>
  </div>
</template>
<style lang="scss" scoped>
</style>

<script>
import Landing       from '@/components/Landing.vue';
import Statement     from '@/components/Statement.vue';
import PageDivider   from '@/components/PageDivider.vue';
import How           from '@/components/How.vue';

export default {
  name: 'home',
  components: {
    Landing,
    Statement,
    How,
    PageDivider
  },
  data() {
    return{
      homeFields:{
        dividerOne: "",
        dividerTwo: ""
      },
      howFields: {
        title: null,
        description: null,
        blocks: []
      },
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
       this.homeFields = {
         dividerOne: data.page_divider_one.url,
         dividerTwo: data.page_divider_two.url
       }
       this.landingFields = {
         mainTitle: data.main_title,
         subtitle: data.subtitle,
         description: data.description,
         landing_image: data.landing_image.url
       };
       this.statementFields = {
         mission: data.mission_statement
       };
       this.howFields = {
        title: data.about_title,
        description: data.about_description,
        blocks: data.about_block
       }
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
