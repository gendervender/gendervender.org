<template>
  <div id="footer" v-if="show">
    <div class="background center">
      <prismic-image :field="footer_image" />
    </div>
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
            <prismic-link
              :key="item.link_name"
              class="text underline"
              :field="item.connect_link"
              target="_blank"
              v-for="item in connect_links">
                {{item.connect_link_name}}
            </prismic-link>
        </div>
        <span class="text">&copy; 2021 Gender Vender</span>
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
      }, 500)
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
#footer {
  position: relative;
  width: 100%;
  height: 80vh;
  background: white;
  .background{
    img{
      z-index: 0;
    }
  }
  .container {
    padding: 12vh 0 24vh 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  span {
    position: absolute;
    bottom: 4vh;
    opacity: 0.8;
  }

  .footer-block {
    margin-bottom: 2rem;
    .title {
      font-size: $font-size-s;
      font-weight: 500;
    }

    flex-direction: column;
    display: flex;

    a {
      font-size: $font-size-m;
      align-self: flex-start;
      margin-top: 16px;
    }
  }
}
@include tablet {
  .background{
    img{
      object-fit: contain;
    }
  }
}
@include mobile{
  #footer{
    height: 50vh;
    .container {
      padding: 8vh 0;
    }
  }
}
@include desktop{
  #footer{
    height: 60vh;
    .container {
      padding: 12vh 0;
    }
  }
  .background{
    img{
      position: relative;
      width: 50%;
      height: 50%;
    }
  }
}
</style>
