<template>
  <section id="home">
    <Hero v-bind="heroFields" />
    <div class="center container home-block" v-if="noteFields" >
      <prismic-rich-text class="title" :field="noteFields.note_header"/>
      <prismic-rich-text class="description" :field="noteFields.note_content"/>
    </div>
    <CTABlock
      v-if="products_cta"
      :content="products_cta"
      :cta="{text: 'Shop now', href: '/shop'}"
    />
    <How v-bind="hiwFields" />
    <Partners v-bind="partnersFields"/>
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
      .description{
        text-align: left;
      }
    }
  }
</style>

<script>
import Hero             from '@/components/Hero';
import CTABlock         from '@/components/CTABlock';
import How              from '@/components/How';
import Partners         from '@/components/Partners';

export default {
  name: 'home',
  components: {
    Hero,
    CTABlock,
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
      noteFields: null,
      hiwFields: null,
      partnersFields: null,
      products_cta: null
    }
  },
  methods: {
    assignData() {
      const data = this.$store.state.homePage;
      const {headline, subheadline, hero_image, hero_video,
      hiw_header, hiw_content, hiw_items, mission_content, mission_header,
      note_content, note_header, stories_cta, products_cta,
      partners_header, partners_content, partners_items} = data;
      this.heroFields = {headline, subheadline, hero_image, hero_video};
      this.noteFields = {note_header, note_content};
      this.hiwFields = {hiw_header, hiw_content, hiw_items};
      this.partnersFields = {partners_header, partners_content, partners_items}
      this.products_cta = products_cta;
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