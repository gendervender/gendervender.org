<template>
  <section id="home">
    <Hero v-bind="heroFields" />
    <div class="center container home-block" v-if="noteFields" >
        <prismic-rich-text class="title" :field="noteFields.note_header"/>
        <prismic-rich-text class="description" :field="noteFields.note_content"/>
    </div>
    <CTABlock
      v-if="missionFields"
      :content="[].concat(...Object.values(missionFields))"
      :cta="{text: 'Learn more', href: '/about'}"
    />
    <ProductsDiscover/>
    <CTABlock
      v-if="storiesCtaFields"
      :content="storiesCtaFields"
      :cta="{text: 'Learn more', href: '/stories'}"
    />
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
    .description{
        text-align: center;
    }
    @include mobile{
      padding: 8vh 0;
    }
  }
</style>

<script>
import Hero          from '@/components/Hero';
import CTABlock      from '@/components/CTABlock';
import ProductsDiscover from '@/components/ProductsDiscover';
import How           from '@/components/How';
import Partners      from '@/components/Partners';

export default {
  name: 'home',
  components: {
    Hero,
    CTABlock,
    ProductsDiscover,
    How,
    Partners
  },
  props: {
    handleClick: Function,
    setVideoRef: Function
  },
  data() {
    return{
      heroFields: null,
      missionFields: null,
      noteFields: null,
      storiesCtaFields: null,
      hiwFields: null,
      partnersFields: null
    }
  },
  methods: {
    assignData() {
      const data = this.$store.state.homePage;
      const {headline, subheadline, hero_image, hero_video, hiw_cta, 
      hiw_header, hiw_content, hiw_items, mission_content, mission_header,
      note_content, note_header, partners_content, stories_cta,
      partners_header, partners_items} = data;
      this.heroFields = {headline, subheadline, hero_image, hero_video};
      this.missionFields = {mission_header, mission_content};
      this.noteFields = {note_header, note_content};
      this.storiesCtaFields = stories_cta;
      this.hiwFields = {hiw_header, hiw_content, hiw_items, hiw_cta}
    }
  },
  created(){
    this.assignData();
  },
  mounted(){
    document.body.classList.add("home");
  },
  destroyed(){
    document.body.classList.remove("home");
  }
}
</script>