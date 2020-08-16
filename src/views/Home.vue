<template>
  <section id="home">
    <Hero v-bind="heroFields" />
    <Statement v-bind="statementFields"/>
  <!--
    <Landing :fields="landingFields" :handleClick="handleClick" :donateLink="donateLink" :setVideoRef="setVideoRef"/>
    <How :fields="howFields" />
    <Stories :fields="storiesFields" :stories="stories"/>
    <Partners :fields="partnersFields"/>
    -->
  </section>
</template>
<style lang="scss">
#home{
  margin: 0%;
  padding: 0%;
}
.home-block{
  padding: 12vh 0;
  .title{
      margin-bottom: 12px;
  }
  .desc{
      margin-bottom: 3rem;
  }
  @include mobile{
    padding: 8vh 0;
  }
}
</style>

<script>
import Landing       from '@/components/Landing.vue';
import Hero          from '@/components/Hero.vue';
import Statement     from '@/components/Statement.vue';
import How           from '@/components/How.vue';
import Partners      from '@/components/Partners.vue';

export default {
  name: 'home',
  components: {
    Landing,
    Statement,
    Hero,
    How,
    Partners
  },
  props: {
    handleClick: Function,
    donateLink: String,
    setVideoRef: Function
  },
  data() {
    return{
      heroFields: null,
      statementFields: null,
      hiwFields: null,
      partnersFields: null
    }
  },
  methods: {
    assignData() {
      const data = this.$store.state.homePage;
      const {headline, subheadline, hero_image, hero_video, hiw_cta, 
      hiw_header, hiw_content, hiw_items, mission_content, mission_header,
      note_content, note_header, partners_content, partners_header, partners_items} = data;
      this.heroFields = {headline, subheadline, hero_image, hero_video};
      this.statementFields = {mission_header, mission_content, note_header, note_content};
    }
  },
  created(){
    this.assignData();
  }
}
</script>