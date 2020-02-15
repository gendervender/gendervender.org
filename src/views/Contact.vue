<template>
  <section id="contact">
        <div class="banner" :style="{ 'background-image': `url(${fields.contact_image})` }"/>
        <prismic-rich-text class="text title" v-if="fields.contact_title" :field="fields.contact_title"/>
        <prismic-rich-text class="text body" v-if="fields.contact_description" :field="fields.contact_description"/>
        <div class="center container">
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
    async getContent(){ 
       const content = await this.$prismic.client.getSingle('contact');
       this.assignContent(content.data);
    },
    assignContent(data){
       this.fields = {
        contact_image: data.contact_image.url,
        contact_title: data.contact_title,
        contact_description: data.contact_description
       }
    }
  },
  created(){
    this.getContent();
  }
}
</script>
<style lang="scss" scoped>
    #contact{
        min-height: 100vh;
        padding-bottom: 20vh;
        text-align: center;
        form{
            width: 50%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            flex-direction: row;
            .form-message{
                width: 100%;
                text-align: left;
                color: $secondary;
            }
            .form-message-error{
                color: $primary;
            }
            input, textarea{
                outline: none;
                width: 100%;
                padding: 16px;
                font-size: 1rem;
                box-sizing: border-box;
                background-color: rgba($secondary, 0.12);
                border: 2px solid transparent;
                &:focus{
                    border-color: $secondary;
                }
            }
            textarea{
                resize: none;
                height: 240px;
                line-height: 1.8;
            }
            .form-full, .form-half{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 24px;
            }
            .form-full{
                width: 100%;
            }
            .form-half{
                width: 48%;
                &:first-of-type{
                    margin-right: 4%;
                }
            }
            label{
                margin-bottom: 4px;
                font-size: 0.9rem;
            }
        }
        .title{
            font-size: 2.4rem;
            font-weight: 600;
        }
        .body{
            font-size: 1.2rem;
            margin: 0px 0px 52px 0px;
        }
        .banner{
            width: 100%;
            height: 50vh;
            background-size: cover;
            background-position: center;
            margin-bottom: 20vh;
        }
    }
</style>