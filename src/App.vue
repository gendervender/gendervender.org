<template>
  <div id="app">
    <Navigation :handleClick="this.handleClick"/>
    <router-view v-if="stories !== null" :stories="stories" :handleClick="this.handleClick"/>
    <Footer/>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';
  import Footer     from '@/components/Footer.vue';
  export default {
    name: 'App',
    components: {
      Navigation,
      Footer
    },
    data() {
      return{
        stories: null
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
          { orderings: '[my.stories.partnership_status]' }
        ).then((res) => {
          let parsed = res.results.map(doc => {
            return {
              ...doc.data,
              uid: doc.uid
            }
          });
          this.stories = parsed;
        });
      }
    },
    created(){
      this.getContent();
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
body{
  margin: 0%;
  background-color: rgba($text, 0.03);
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
h1{font-size: 3rem};
h2{font-size: 2rem};
h3{font-size: 1.5rem};
h4{font-size: 1.25rem};
h5{font-size: 1.15rem};
h6{font-size: 1.15rem; font-weight: 400};

.text{
  *{
    color: inherit;
    // font-weight: inherit;
    // font-size: inherit;
  }
  box-sizing: border-box;
  a{
    @extend .underline;
  }
  p{
    margin: 0 0 1.4rem 0;
  }
  ul{
    list-style: none;
  }
}
p, a, b, span, button{
  line-height: 1.6;
  font-size: 0.94rem;
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
  padding: 4px 24px;
  position: relative;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  border-radius: 360px;
  font-weight: bold;
  line-height: 1.8;
  &:hover{
    border-color: $primary;
    color: white!important;
    background-color: $primary;
    -webkit-box-shadow: 0px 4px 12px 0px rgba($primary,0.25);
    -moz-box-shadow: 0px 4px 12px 0px rgba($primary,0.25);
    box-shadow: 0px 4px 12px 0px rgba($primary,0.25);
  }
}
.button-inversed{
  border-color: transparent;
  color: white;
  background-color: $primary;
  &:hover{
    border-color: white;
    background-color: transparent;
    box-shadow: none;
  }
}
.button-light{
  color: white!important;
  border-color: white;
}
.button-dark{
  color: $text;
  border-color: $text;
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
  line-height: 1;
  &:visited{
    color: $primary;
  }
  &:before{
    content: '';
    position: absolute;
    background: $primary;
    bottom: 0.12rem;
    left: 0;
    height: 1px;
    width: 100%;
  }
  &:before{
    z-index: 1;
  }
  &:hover{
    color: $secondary;
    &:before{
      background: $secondary;
    }
  }
}
.container{
  box-sizing: border-box;
  margin: 0% 6vw;
  position: relative;
  width: auto;
}
.background{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
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
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: $text;
  opacity: 0.6;
}

</style>
