<template>
    <section id="about">
      <div class="container">
          <prismic-rich-text v-if="title" :field="title"/>
          <prismic-rich-text class="text" v-if="description" :field="description"/>
      </div>
      <div class="banner">
        <div class="background" :style="{ 'background-image': `url(${bannerURL})` }" />
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
    padding: 16vh 0;
    .banner{
        width: 100%;
        height: 88vh;
        margin: 10vh 0;
        position: relative;
    }
    .text{
      width: 60%;
      margin: 0rem 0 2rem 0;
      h6{
        margin-top: 1.2rem;
      }
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
      title: null,
      description: null,
      bannerURL: null,
      body: [],
      slicesData: {
        image: "ImageItem",
        text_block: "TextBlock",
        timeline: "Timeline"
      }
    }
  },
  methods: {
    async getContent(){ 
       const content = await this.$prismic.client.getSingle('about');
       this.assignContent(content.data);
    },
    assignContent(data){
      this.title = data.page_title;
      this.description = data.page_description;
      this.bannerURL = data.banner.url;
      this.body = data.body;
    }
  },
  created(){
    this.getContent();
  }
}
</script>