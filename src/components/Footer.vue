<template>
  <div id="footer" v-if="show">
    <div class="background" :style="{ 'background-image': `url(${footer_image.url})` }"/>
    <div class="container">
        <div class="footer-block">
            <prismic-rich-text class="text title" v-if="contact_title" :field="contact_title"/>
            <router-link
                class="text underline"
                to="/contact"
            >
                {{contact_link_name}}
            </router-link>
        </div>
        <div class="footer-block">
            <prismic-rich-text class="text title" v-if="connect_title" :field="connect_title"/>
            <a 
                class="text underline"
                :href="item.connect_link.url"
                target="_blank"
                v-for="item in connect_links">
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
  watch:{
    '$route' (to, from){
      this.show = false;
      setTimeout(() => {
        this.show = true
      }, 2000)
    }
  },
  data() {
    return{
        show: false,
        footer_image: null,
        contact_title: null,
        contact_link_name: null,
        connect_title: null,
        connect_links: null
    }
  },
  methods: {
    assignContent(){
       const data = this.$store.state.footer;
       Object.assign(this, data);
    }
  },
  created(){
    this.assignContent();
  },
  mounted(){
    setTimeout(() => {
      this.show = true
    }, 2000)
  }
}
</script>

<style scoped lang="scss">
    #footer{
        position: relative;
        width: 100%;
        height: 80vh;
        .container{
            padding: 12vh 0 24vh 0;
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
              font-size: $font-size-s;
              font-weight: 500;
            }
            flex-direction: column;
            display: flex;
            a{
                font-size: $font-size-m;
                align-self: flex-start;
                margin-top: 16px;
            }
        }
    }
    @include mobile{
      #footer{
        background-color: white;
        .background{
          z-index: 0;
          background-size: 130%;
          background-position: 0vw 50%;
          background-color: white;
        }
      }
    }
    @include tablet{
      #footer{
        background-color: white;
        .background{
          z-index: 0;
          background-size: 130%;
          background-position: 0vw 50%;
        }
      }
    }
</style>
