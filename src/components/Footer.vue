<template>
  <div id="footer">
    <div class="background" :style="{ 'background-image': `url(${fields.footer_image})` }"/>
    <div class="container">
        <div class="footer-block">
            <prismic-rich-text class="text title" v-if="fields.contact_title" :field="fields.contact_title"/>
            <router-link
                class="text underline"
                to="/contact"
            >
                {{fields.contact_link_name}}
            </router-link>
        </div>
        <div class="footer-block">
            <prismic-rich-text class="text title" v-if="fields.connect_title" :field="fields.connect_title"/>
            <a 
                class="text underline"
                :href="item.connect_link.url"
                target="_blank"
                v-for="item in fields.connect_links">
                {{item.connect_link_name}}
            </a>
        </div>
        <span class="text">&copy; 2020 Gender Vender</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return{
        fields: {
            footer_image: null,
            contact_title: null,
            contact_link_name: null,
            connect_title: null,
            connect_links: null
        }
    }
  },
  methods: {
    async getContent(){ 
       const content = await this.$prismic.client.getSingle('footer');
       this.assignContent(content.data);
    },
    assignContent(data){
       this.fields = {
        footer_image: data.footer_image.url,
        contact_title: data.contact_title,
        contact_link_name: data.contact_link_name,
        connect_title: data.connect_title,
        connect_links: data.connect_links
       }
    }
  },
  created(){
    this.getContent();
  }
}
</script>

<style scoped lang="scss">
    #footer{
        position: relative;
        width: 100%;
        height: 80vh;
        .container{
            padding: 12vh 4vw 24vh 4vw;
            text-align: left;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: 100%;
        }
        span{
            position: absolute;
            bottom: 4vh;
            opacity: 0.8;
        }
        .footer-block{
            .title{
              font-size: 1.2rem;
              font-weight: 500;
            }
            flex-direction: column;
            display: flex;
            a{
                font-size: 1.6rem;
                align-self: flex-start;
                margin-top: 4px;
                &:after{
                    bottom: 0.6rem;
                }
            }
        }
    }
</style>
