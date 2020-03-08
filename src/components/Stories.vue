<template>
  <div class="home-block" id="stories">
    <div class="container">
        <prismic-rich-text class="title" v-if="fields.title" :field="fields.title"/>
        <prismic-rich-text class="text desc" v-if="fields.description" :field="fields.description"/>
        <div class="stories-grid">
            <router-link
                v-for="item in stories"
                :to="`/stories/${item.uid}`"
            >
                <Card 
                    :isLink="true"
                    :primary="item.name"
                    :secondary="item.business_name"
                    :description="item.short_description"
                    :imageURL="item.thumbnail_image.url"
                />
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'Stories',
  props: {
    fields: Object,
    stories: Array
  },
  components: {
      Card
  }
}
</script>

<style scoped lang="scss">
    .stories-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 32px;
        column-gap: 24px;
        @include mobile{
          grid-template-columns: 1fr;
        }
    }
</style>