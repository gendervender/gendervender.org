<template>
  <div id="app">
    <LoadScreen :isLoading="isLoading"/>
    <Navigation :handleClick="this.handleClick" :donateLink="donateLink" :disableScroll="disableScroll"/>
    <transition name="fade" mode="out-in">
    <router-view 
      :key="$route.path"
      v-if="stories !== null"
      :stories="stories"
      :handleClick="this.handleClick"
      :donateLink="donateLink"
      :setVideoRef="setVideoRef"
    />
    </transition>
    <Footer/>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';
  import Footer     from '@/components/Footer.vue';
  import LoadScreen from '@/components/LoadScreen.vue';

  export default {
    name: 'App',
    components: {
      Navigation,
      Footer,
      LoadScreen
    },
    data() {
      return{
        stories: null,
        donateLink: "",
        isLoading: true,
        removeLoading: false,
        videoRef: null
      }
    },
    methods: {
      handleClick(e){
        let id = e.target.dataset.id;
        if(this.$route.name !== 'home'){
          this.$router.push('/#'+ id);
        }else{
          let selector = document.querySelector('#'+ id);
          if (selector) {
            let top =  id !== 'landing' ? selector.offsetTop : 0;
            window.scrollTo({top, behavior: 'smooth' })
          }
        }
      },
      getContent(){ 
        this.$prismic.client.query(
          this.$prismic.Predicates.at('document.type', 'stories'),
          { orderings: '[my.stories.partnership_status, my.stories.name]' }
        ).then((res) => {
          let parsed = res.results.map(doc => {
            return {
              ...doc.data,
              uid: doc.uid
            }
          });
          this.stories = parsed;
        });
      },
      async getDonateLink(){
        const content = await this.$prismic.client.getSingle('donate');
        this.donateLink = content.data.donate_source.url;
      },
      disableScroll(status){
        if(status){
          document.body.style.overflow = "hidden";
        }
        else{
          document.body.style.overflow = "auto";
        }
      },
      setVideoRef(ref){
        this.videoRef = ref;
      },
      setLoadStatus(){
        setTimeout(()=>{
          this.isLoading = false;
          this.disableScroll(false);
        }, 1250)
        setTimeout(()=>{
          this.removeLoading = true;
        }, 1750);
      }
    },
    created(){
      this.getContent();
      this.getDonateLink();
    },
    mounted(){
      if(this.$route.name == 'home'){
          var checkVidState = setInterval(()=>{
          if(this.videoRef && this.videoRef.readyState == 4){
              this.setLoadStatus();
              clearInterval(checkVidState);
          }                   
        },500);
      }else{
        this.setLoadStatus();
      }
    }
  }
</script>
<style lang="scss">
*{
  transition: all 0.16s;
  &:before, &:after{
    transition: inherit;
  }
}
.fade-enter-active, .fade-leave-active {
    transition: all 0.6s
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
body{
  margin: 0%;
  background-color: $site-bg;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
::selection {
  background: $tertiary;
}
::-moz-selection {
  background: $tertiary;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,h2,h3,h4,h5,h6{
  margin: 0%;
  line-height: 1.6;
  letter-spacing: 0.015rem;
}
h1{font-size: 2.8rem};
h2{font-size: 2rem};
h3{font-size: 1.5rem};
h4{font-size: 1.25rem};
h5{font-size: 1.15rem};
h6{font-size: 1.15rem; font-weight: 400};
.text{
  *{
    color: inherit;
    line-height: inherit;
    // font-size: inherit;
    // font-weight: inherit;
  }
  h6, p{
    line-height: 1.8
  }
  box-sizing: border-box;
  a{
    @extend .underline;
  }
  p{
    margin: 0 0 1.4rem 0;
    @include tablet{
      margin: 0 0 2rem 0;
    }
  }
  ul, ol{
    list-style: none;
    padding-left: 1rem;
    li{
      margin-bottom: 0.4rem;
    }
  }
}
p, a, b, span, button{
  line-height: 1.8;
  font-size: 0.96rem;
  font-weight: 400;
  letter-spacing: 0.01rem;
}
b, strong{
  font-weight: bold;
}
a{
  cursor: pointer;
  text-decoration: none;
  &:visited{
    color: inherit;
  }
}
section{
  margin-top: 12vh;
  box-sizing: border-box;
  min-height: 100vh;
}
.row{
  display: flex;
  flex-direction: row;
}
.card{
  border-radius: 5px;
  overflow: hidden;
}
.button{
  padding: 9px 20px 8px 20px;
  position: relative;
  background-color: transparent;
  border-radius: 5px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  color: white!important;
  background: $primary;
  &:hover{
    background: $primary-hover;
    -webkit-box-shadow: 0px 4px 8px 0px rgba($primary-hover,0.16);
    -moz-box-shadow: 0px 4px 8px 0px rgba($primary-hover,0.16);
    box-shadow: 0px 4px 8px 0px rgba($primary-hover,0.16);
  }
}
.button-secondary{
  color: white;
  border: 1px solid white;
  background: transparent;
  &:hover{
    color: $text!important;
    background-color: white;
  }
}
.button-light{
  color: white!important;
  &:hover{
    box-shadow: none;
  }
}
.button-dark{
  border-color: $primary;
  color: $primary!important;
  &:hover{
    background: $primary;
    color: white!important;
  }
}
button{
    width: auto;
    cursor: pointer;
    border: 0;
    outline: 0;
    background: none;
    font-weight: 600;
    letter-spacing: 0.08rem;
}
.underline{
  color: $primary;
  font-weight: 600;
  font-size: 100%;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  line-height: 1.05;
  display: inline-block;
  &:visited{
    color: $primary;
  }
  &:before{
    content: '';
    position: absolute;
    background: $primary;
    bottom: 0.05rem;
    right: 0;
    height: 1px;
    width: 100%;
  }
  &:before{
    z-index: 1;
  }
  &:hover{
    color: $primary-hover;
    &:before{
      width: 0%;
    }
  }
  @include mobile{
    text-decoration: underline;
    &:before{
      display: none;
    }
  }
  @include mobile{
    text-decoration: underline;
    &:before{
      display: none;
    }
  }
}
.container{
  box-sizing: border-box;
  margin: 0% auto;
  position: relative;
  width: 64em;
  @include desktop{
    width: 86em;
  }
  @include mobile{
    width: 88%;
  }
  @include tablet{
    width: 90%;
  }
}
.background{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.center{
    display: flex;
    align-items: center;
    justify-content: center;
};
.overlay{
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $text;
  opacity: 0.6;
}
@include mobile{
  h1{font-size: 32px};
  h2{font-size: 24px};
  h3{font-size: 20px};
  h4{font-size: 18px};
  h5{font-size: 16px};
  h6{font-size: 16px};
}
@include tablet{
  h1{font-size: 2rem};
  h2{font-size: 1.8rem};
  h3{font-size: 1.6rem};
  h4{font-size: 1.4rem};
  h5{font-size: 1rem};
  h6{font-size: 1rem};
}
@include desktop{
  h1{font-size: 3.2rem};
  h2{font-size: 2.2rem};
  h3{font-size: 2rem};
  h4{font-size: 1.75rem};
  h5{font-size: 1.25rem};
  h6{font-size: 1.25rem};
  p, a, b, span, button, li{
    line-height: 2;
    font-size: 1.1rem;
  }
  .button{
    padding: 13px 20px 12px 20px;
  }
}
.container{
  box-sizing: border-box;
  margin: 0% auto;
  position: relative;
  width: 64em;
  @include desktop{
    width: 86em;
  }
  @include mobile{
    width: 88%;
  }
  @include tablet{
    width: 90%;
  }
}
.background{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.center{
    display: flex;
    align-items: center;
    justify-content: center;
};
.overlay{
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $text;
  opacity: 0.6;
}
@include mobile{
  h1{font-size: 32px};
  h2{font-size: 24px};
  h3{font-size: 20px};
  h4{font-size: 18px};
  h5{font-size: 16px};
  h6{font-size: 16px};
}
@include tablet{
  h1{font-size: 2rem};
  h2{font-size: 1.8rem};
  h3{font-size: 1.6rem};
  h4{font-size: 1.4rem};
  h5{font-size: 1rem};
  h6{font-size: 1rem};
}

@include desktop{
  h1{font-size: 3.2rem};
  h2{font-size: 2.2rem};
  h3{font-size: 2rem};
  h4{font-size: 1.75rem};
  h5{font-size: 1.25rem};
  h6{font-size: 1.25rem};
  p, a, b, span, button, li{
    line-height: 2;
    font-size: 1.1rem;
  }
  .button{
    padding: 13px 20px 12px 20px;
  }
}

</style>
