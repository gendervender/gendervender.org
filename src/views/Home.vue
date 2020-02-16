<template>
  <div class="home">
    <Landing :fields="landingFields" :handleClick="handleClick"/>
    <Statement :fields="statementFields"/>
    <PageDivider :imageUrl="homeFields.dividerOne"/>
    <How :fields="howFields" />
    <Stories :fields="storiesFields" :stories="stories"/>
    <Partners :fields="partnersFields"/>
    <PageDivider :imageUrl="homeFields.dividerTwo"/>
  </div>
</template>
<style lang="scss">
.home-block{
  background-color: rgba($text, 0.05);
  padding: 12vh 0;
  .title{
      font-size: 1rem;
      margin-bottom: 12px;
  }
  .desc{
      margin-bottom: 80px;
  }
}
</style>

<script>
import Landing       from '@/components/Landing.vue';
import Statement     from '@/components/Statement.vue';
import PageDivider   from '@/components/PageDivider.vue';
import How           from '@/components/How.vue';
import Stories       from '@/components/Stories.vue';
import Partners      from '@/components/Partners.vue';

export default {
  name: 'home',
  components: {
    Landing,
    Statement,
    How,
    PageDivider,
    Stories,
    Partners
  },
  props: {
    handleClick: Function,
    stories: Array
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
      },
      storiesFields: {
        title: null,
        description: null
      },
      partnersFields: {
        title: null,
        description: null,
        directory: null
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
       };
       this.storiesFields = {
         title: data.stories_title,
         description: data.stories_description
       };
       this.partnersFields = {
         title: data.partners_title,
         description: data.partners_description,
         directory: data.partners_directory
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
