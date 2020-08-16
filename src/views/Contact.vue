<template>
  <section id="contact">
        <div class="banner" :style="{ 'background-image': `url(${fields.contact_image})` }"/>
        <div class="center container">
        <prismic-rich-text class="text title" v-if="fields.contact_title" :field="fields.contact_title"/>
        <prismic-rich-text class="text body" v-if="fields.contact_description" :field="fields.contact_description"/>
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
        fields: {
            contact_image: null,
            contact_title: null,
            contact_description: null
        }
    }
  },
  methods: {
    assignContent(){
       const data = this.$store.state.contactPage;
       this.fields = {
        contact_image: data.contact_image.url,
        contact_title: data.page_title,
        contact_description: data.page_description
       }
    }
  },
  created(){
    this.assignContent();
  }
}
</script>
<style lang="scss" scoped>
    #contact{
        min-height: 100vh;
        padding-bottom: 20vh;
        text-align: center;
        .container{
            flex-direction: column;
        }
        .title{
            font-weight: 600;
        }
        .body{
            margin: 0px 0px 52px 0px;
        }
        .banner{
            width: 100%;
            height: 50vh;
            background-size: cover;
            background-position: center;
            margin-bottom: 8vh;
        }
        @include mobile{
            .banner{
                height: 25vh;
                margin-bottom: 4vh;
            }
        }
    }
</style>