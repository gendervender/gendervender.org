<template>
  <section id="stories">
    <div class="container">
      <h2>Stories</h2>
      <div class="stories-grid">
        <router-link v-for="item in stories" :to="`/stories/${item.uid}`">
          <Card :primary="item.name" :secondary="item.business_name"
            :description="item.short_description" :image="item.thumbnail_image" />
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
  name: 'StoriesGrid',
  components: {
      Card
  },
  props: {
      stories: Array
  }
}
</script>

<style scoped lang="scss">
  .stories-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 32px;
      column-gap: 24px;
      margin-top: 1rem;
      @include tablet{
        grid-template-columns: 1fr 1fr;
      }
      @include mobile{
        grid-template-columns: 1fr;
      }
  }
</style>