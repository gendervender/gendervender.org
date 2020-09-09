<template>
  <section id="home">
    <Hero v-bind="heroFields" />
    <div class="home-block home-row home__note" v-if="noteFields">
      <div class="container">
        <div class="home-row-text">
          <prismic-rich-text class="title" :field="noteFields.note_header" />
          <prismic-rich-text class="description" :field="noteFields.note_content" />
        </div>
        <div class="home-row-image">
          <prismic-image :field="noteFields.note_image" />
        </div>
      </div>
    </div>
    <How v-bind="hiwFields" />
    <div class="home-block home-row" v-if="noteFields">
      <div class="container">
        <div class="home-row-text center column">
          <prismic-rich-text :field="products_cta.products_cta" />
          <router-link class="button" to="/shop">SHOP NOW</router-link>
        </div>
        <div class="home-row-image">
          <prismic-image :field="products_cta.products_cta_image" />
        </div>
      </div>
    </div>
    <Partners v-bind="partnersFields" />
  </section>
</template>
<style lang="scss">
  #home{
    margin: 0%;
    padding: 0%;
  }
  .home-block{
    padding: 12vh 0;
    @include mobile{
      padding: 8vh 0;
      .description{
        text-align: left;
      }
    }
  }
  .home__note{
    background: $text;
    h2, p {
      color: white;
    }
  }
  .home-row{
    .container{
      display: flex;
      flex-direction: row;
    }
    &-text, &-image{
      flex: 1;
      box-sizing: border-box;
    }
    &-text{
      align-items: flex-start;
      padding-right: 8%;
    }
    &-image img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: red;
    }
    @include tablet{
      &-text{
        padding: 0%;
      }
      &-image{
        margin-top: 2rem;
      }
      .container{
        flex-direction: column;
      }
    }
  }
</style>

<script>
import Hero             from '@/components/Hero';
import How              from '@/components/How';
import Partners         from '@/components/Partners';

export default {
  name: 'home',
  components: {
    Hero,
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
      note_content, note_header, note_image, products_cta, products_cta_image,
      partners_header, partners_content, partners_items} = data;
      this.heroFields = {headline, subheadline, hero_image, hero_video};
      this.noteFields = {note_header, note_content, note_image};
      this.hiwFields = {hiw_header, hiw_content, hiw_items};
      this.partnersFields = {partners_header, partners_content, partners_items}
      this.products_cta = {products_cta, products_cta_image};
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