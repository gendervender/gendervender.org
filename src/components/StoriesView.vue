<template>
    <div id="stories-view" v-if="data">
        <div class="banner background">
          <prismic-image :field="data.main_image" />
        </div>
        <div class="content center">
            <div class="container">
                <h1>{{data.name}}</h1>
                <h4>{{data.business_name}}</h4>
                <h4>{{data.location}}</h4>
                <div class="links">
                    <prismic-link class="underline" v-for="item in data.links" :field="item.link">
                        {{item.link_name}}
                    </prismic-link>
                </div>
                <img :src="data.logo.url" :alt="data.uid + ' logo'" class="logo" v-if="data.logo.url"/>
            </div>
            <component
                v-for="slice in data.body"
                v-if="slicesData[slice.slice_type]"
                :is="slicesData[slice.slice_type]"
                v-bind="slice.primary"
                class="stories-block"
                :class="(slice.slice_type !== 'product' && slice.slice_type !== 'image') && 'container'"
            />
        </div>
        <MoreStories :data="moreStories"/>
    </div>
</template>
<style lang="scss" scoped>
    .logo {
      position: absolute;
      top: 0;
      right: 0;
      width: 16%;
    }

    .banner {
      position: relative;
      display: block;
    }

    .links {
      margin: 24px 0;
      display: flex;
      flex-wrap: wrap;

      .underline {
        margin-right: 12px;
        margin-bottom: 12px;
      }
    }

    .content {
      flex-direction: column;
      margin: 12vh 0 24vh 0;

      .container {
        width: 50%;
      }

      h1 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      h4 {
        margin-bottom: 0.6rem;
        font-weight: 400;
      }
    }

    .stories-block {
      margin-top: 32px;
      margin-bottom: 32px;
      display: inline-block;
    }

    @include desktop {
      .content {
        h1 {
          font-size: 2.4rem;
          margin-bottom: 0.25rem;
        }
      }
    }

    @include tablet {
      .content {
        h1 {
          font-size: 1.6rem;
          width: 60%;
        }

        h4 {
          font-size: 1.2rem;
        }
      }
      .logo {
        width: 20%;
      }

      .content .container {
        width: 90%;
      }

      .stories-block {
        margin: 20px 0;
      }
    }

    @include mobile {
      .content {
        margin: 32px 0;
        h1 {
          font-size: 22px;
          width: 60%;
        }
      }

      .logo {
        width: 4rem;
      }
      .content .container {
        width: 88%;
      }
    }
</style>
<script>
import TextBlock     from '@/components/slices/TextBlock';
import Quote         from '@/components/slices/Quote';
import Product       from '@/components/slices/Product';
import StoriesImage  from '@/components/slices/StoriesImage';
import StoriesVideo  from '@/components/slices/StoriesVideo';
import MoreStories   from '@/components/MoreStories';

export default {
  name: "StoriesView",
  components: {
    TextBlock,
    Quote,
    Product,
    StoriesImage,
    StoriesVideo,
    MoreStories
  },
  props: {
    data: Object,
    moreStories: Array
  },
  data() {
    return {
      slicesData: {
        text_block: "TextBlock",
        quote: "Quote",
        product: "Product",
        image: "StoriesImage",
        video: "StoriesVideo"
      }
    }
  }
}
</script>