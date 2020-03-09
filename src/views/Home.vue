<template>
  <section id="home" v-if="stories.length > 0">
    <Landing :fields="landingFields" :handleClick="handleClick" :donateLink="donateLink" :setVideoRef="setVideoRef"/>
    <Statement :fields="statementFields"/>
    <PageDivider :imageUrl="homeFields.dividerOne"/>
    <How :fields="howFields" />
    <Stories :fields="storiesFields" :stories="stories"/>
    <Partners :fields="partnersFields"/>
    <PageDivider :imageUrl="homeFields.dividerTwo"/>
  </section>
</template>
<style lang="scss">
#home{
  margin: 0%;
}
.home-block{
  padding: 12vh 0;
  .title{
      margin-bottom: 12px;
  }
  .desc{
      margin-bottom: 3rem;
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
    stories: Array,
    donateLink: String,
    setVideoRef: Function
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
        description: null,
        landing_image: null,
        landing_video: null
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
         description: data.description,
         landing_image: data.landing_image.url,
         landing_video: data.landing_video.url
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
      setTimeout(() => {
        let selector = document.querySelector(this.$route.hash);
        let top = selector.offsetTop;
        window.scrollTo({top, behavior: 'smooth'})
      }, 500)
    }
  }
}
</script>