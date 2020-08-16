<template>
  <div id="statement" class="center container home-block">
    <div id="statement__mission">
      <prismic-rich-text class="title" v-if="mission_header" :field="mission_header"/>
      <prismic-rich-text class="description" v-if="mission_content" :field="mission_content"/>
    </div>
    <div id="statement__note">
      <prismic-rich-text class="title" v-if="note_header" :field="note_header"/>
      <prismic-rich-text class="description" v-if="note_content" :field="note_content"/>
    </div>
    <!-- 
    <prismic-rich-text class="title" v-if="fields.mission" :field="fields.mission"/>
    <div>
      <router-link class="underline" to="/about">Learn more</router-link>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'Statement',
  props: {
    mission_header: Array,
    mission_content: Array,
    note_header: Array,
    note_content: Array
  }
}
</script>

<style scoped lang="scss">
  #statement{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8%;
    align-items: flex-start;
  } 
</style>
