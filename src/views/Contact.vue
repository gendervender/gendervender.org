<template>
  <section id="contact">
    <div class="banner">
      <prismic-image :field="contact_image" />
    </div>
    <div class="center container">
    <prismic-rich-text class="text title" v-if="page_title" :field="page_title"/>
    <prismic-rich-text class="text body" v-if="page_description" :field="page_description"/>
        <ContactForm />
    </div>
  </section>
</template>
<script>
import ContactForm from '@/components/ContactForm'

export default {
  name: 'Contact',
  components: {
    ContactForm
  },
  data() {
    return{
        contact_image: null,
        page_title: null,
        page_description: null
    }
  },
  methods: {
    assignContent(){
       const data = this.$store.state.contactPage;
        Object.assign(this, data);
    }
  },
  created(){
    this.assignContent();
  }
}
</script>
<style lang="scss" scoped>
  #contact {
    min-height: 100vh;
    padding-bottom: 20vh;
    margin-top: 0;
    text-align: center;

    .container {
      flex-direction: column;
    }

    .title {
      font-weight: 600;
    }

    .body {
      margin: 0px 0px 52px 0px;
    }
  }
</style>