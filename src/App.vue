<template>
  <div id="app">
    <LoadScreen :isLoading="isLoading"/>
    <Navigation  v-if="!isLoading" />
    <transition  v-if="!isLoading" name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer v-if="!isLoading" />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import LoadScreen from '@/components/LoadScreen.vue';

const DOC_TYPES = {
  homePage: "home_page_v2",
  aboutPage: "about",
  teamPage: "team",
  contactPage: "contact",
  shopPage: "shop_v2",
  footer: "footer",
  products: "products",
  stories: "stories",
  privacyPolicy: "privacy_policy"
}

export default {
  name: 'App',
    components: {
      Navigation,
      Footer,
      LoadScreen
    },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    enableScroll() {
      document.body.style.overflow = "auto";
    },
    finishLoading(){
      Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
        this.isLoading = false;
        this.enableScroll();
      });
    }
  },
  created() {
    this.$prismic.client.query('').then(response => {
      let data = {}
      Object.keys(DOC_TYPES).forEach(item => {
        data[item] = response.results.filter(doc => doc.type === DOC_TYPES[item]);
        if (item === 'stories') {
          data[item] = data[item].map(i => ({
            ...i.data, 
            uid: i.uid
          }));
        } else {
          data[item] = data[item].map(i => i.data);
        }
        if (data[item].length === 1) {
          data[item] = data[item][0]
        }
      })
      this.$store.dispatch('setData', data);
      this.finishLoading();
    });
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
    transition: all 0.4s
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
body{
  margin: 0%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  background-color: $site-bg;
}
body.home{
  background-color: white;
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
  overflow-x: hidden!important;
}
h1,h2,h3,h4,h5,h6{
  margin: 0%;
  line-height: 1.4;
  letter-spacing: 0.015rem;
}
h1{font-size: $font-size-xxl};
h2{font-size: $font-size-xl};
h3{font-size: $font-size-l};
h4{font-size: $font-size-m};
h5{font-size: $font-size-s};
h6{font-size: $font-size-s; font-weight: 400};

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
  font-size: $font-size-xs;
  font-weight: 400;
  letter-spacing: 0.01rem;
}
p a{
  @extend .underline;
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
  padding: 8vh 0;
  box-sizing: border-box;
  min-height: 100vh;
  @include tablet{
    padding: 32px 0;
  }
  @include mobile{
    margin-top: 8vh;
  }
}
.row{
  display: flex;
  flex-direction: row;
}
.column{
  display: flex;
  flex-direction: column;
}
.card{
  border-radius: 5px;
  overflow: hidden;
}
.underline{
  text-decoration: none;
  background-image: linear-gradient($primary, $primary);
  background-position: 100% 95%;
  background-repeat: no-repeat;
  background-size: 100% 1px;
  color: $primary;
  font-weight: 600;
  font-size: 100%;
  cursor: pointer;
  line-height: 1.05;
  &:visited{
    color: $primary;
  }
  &:hover, &:focus{
    color: $primary-hover;
    background-size: 0% 1px;
  }
  @include mobile{
    background-size: 100% 1px!important;
    background-image: linear-gradient($primary-hover, $primary-hover);
  }
}
.container{
  box-sizing: border-box;
  margin: 0% auto;
  position: relative;
  width: 64em;
  flex-direction: column;
  @include desktop{
    width: 86em;
  }
  @include tablet{
    width: 90%;
  }
  @include mobile{
    width: 88%;
  }
}
.background{
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .overlay{
    z-index: -1;
  }
  img{
    z-index: -2;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
  opacity: 0.7;
}
@include tablet{
  h1{font-size: 2rem};
  h2{font-size: 1.8rem};
  h3{font-size: 1.6rem};
  h4{font-size: 1.4rem};
  h5{font-size: 1rem};
  h6{font-size: 1rem};
}
@include mobile{
  h1{font-size: 32px};
  h2{font-size: 24px};
  h3{font-size: 20px};
  h4{font-size: 18px};
  h5{font-size: 16px};
  h6{font-size: 16px};
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
  strong{
    font-size: 100%;
  }
}
.form{
  width: 60%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  @include mobile{
    width: 100%;
  }

  @include tablet{
    width: 100%;
  }
}
.form-message{
  width: 100%;
  text-align: left;
  color: $secondary;
}
.form-message-error{
  color: $primary;
}
.field {
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
}
.field-half{
  width: 49%;
}
.field-third{
  width: 23.5%;
}
label{
  font-size: $font-size-xxs;
}
input, textarea, select{
  outline: none;
  width: 100%;
  margin-top: 4px;
  padding: 8px 12px;
  font-size: $font-size-xs;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  border: 1px solid $border;
  font-family: inherit;
  &:focus{
      border-color: $primary;
  }
  -webkit-appearance: none;
}
textarea{
  resize: none;
  height: 240px;
  line-height: 1.8;
}
.button{
  width: auto;
  cursor: pointer;
  border: 1px transparent solid;
  outline: 0;
  letter-spacing: 0.05rem;
  padding: 10px 20px;
  position: relative;
  background-color: transparent;
  border-radius: 24px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: $font-size-xxs;
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
  padding-top: 12px;
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
input[type=submit]{
  @extend .button;
  -webkit-appearance: none;
}
.banner {
  width: 100%;
  height: 50vh;
  margin-top: 12vh;
  background-size: cover;
  background-position: center;
  margin-bottom: 8vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @include mobile {
    height: 32vh;
    margin-bottom: 4vh;
    margin-top: 8vh;
  }
  @include desktop{
    height: 22vw;
  }
}
</style>
