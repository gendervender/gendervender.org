<template>
    <section id="about" v-if="body.length>0">
      <div class="container">
          <prismic-rich-text v-if="page_title" :field="page_title"/>
          <prismic-rich-text class="page_description" v-if="page_description" :field="page_description"/>
      </div>
      <div class="banner">
        <div class="background" :style="{ 'background-image': `url(${banner.url})` }" />
      </div>
      <div class="container">
        <component
            v-for="slice in body"
            v-if="slicesData[slice.slice_type]"
            :is="slicesData[slice.slice_type]"
            v-bind="slice.primary"
            class="about-block"
        />
      </div>
    </section>
</template>
<style lang="scss">
  #about{
    .banner{
        width: 100%;
        height: 88vh;
        margin: 10vh 0;
        position: relative;
    }
    .page_description{
      width: 60%
    }
    .text{
      width: 60%;
      margin: 0rem 0 2rem 0;
    }
    .about-block{
      margin: 32px 0;
      display: inline-flex;
    }
    @include mobile{
      .banner{
        height: 50vh;
      }
      .text{
        width: 100%;
        margin: 0;
      }
    }
    @include tablet{
     .text{
        width: 100%;
        margin: 0;
      }
    }
  }
</style>
<script>
import ImageItem from '@/components/slices/StoriesImage.vue';
import TextBlock from '@/components/slices/AboutTextBlock.vue';
import Timeline from '@/components/slices/Timeline.vue';


export default {
  name: 'Team',
  components: {
    ImageItem,
    TextBlock,
    Timeline
  },
  data(){
    return{
      page_title: null,
      page_description: null,
      banner: null,
      body: [],
      slicesData: {
        image: "ImageItem",
        text_block: "TextBlock",
        timeline: "Timeline"
      }
    }
  },
  methods: {
    assignContent(){
      const data = this.$store.state.aboutPage;
      Object.assign(this, data);
    }
  },
  created(){
    this.assignContent();
  }
}
</script>