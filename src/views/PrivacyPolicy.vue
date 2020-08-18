<template>
    <section id="privacy-policy">
      <div class="container">
          <prismic-rich-text v-if="header" :field="header"/>
          <prismic-rich-text v-if="description" :field="description"/>
          <br/>
          <prismic-rich-text v-if="content" :field="content"/>
      </div>
    </section>
</template>
<script>
export default {
  name: 'PrivacyPolicy',
  data(){
    return{
        header: null,
        description: null,
        content: null
    }
  },
  methods: {
    assignContent(){
      const data = this.$store.state.privacyPolicy;
      Object.assign(this, data);
    }
  },
  created(){
    this.assignContent();
  }
}
</script>
<style lang="scss">
</style>