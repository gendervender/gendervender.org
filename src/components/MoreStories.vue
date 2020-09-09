<template>
  <div class="more-stories container">
    <h3>More Stories</h3>
    <div class="stories-grid">
        <router-link
            v-for="item in data"
            :to="`/stories/${item.uid}`"
        >
        <Card 
          :primary="item.name"
          :secondary="item.business_name"
          :description="item.short_description"
          :image="item.thumbnail_image"
        />
        </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .more-stories{
        border-top: 1px $border solid;
        padding: 10vh 0 20vh 0;
    }
    .stories-grid{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 32px;
        column-gap: 24px;
        @include tablet{
            grid-template-columns: 1fr 1fr;
        }
        @include mobile{
            grid-template-columns: 1fr;
        }
    }
</style>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'MoreStories',
  components: {
    Card
  },
  props: {
      data: Array
  }
}
</script>
