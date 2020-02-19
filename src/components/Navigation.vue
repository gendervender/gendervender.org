<template>
    <div id="nav" :class="this.navClass">
        <div id="nav-left"> 
        <img src="../assets/logo.png"/>
        <router-link to="/" @click.native="handleClick" data-id="landing">Gender Vender</router-link>
        </div>
        <div id="nav-right">
        <a 
          v-for="item in navItems"
          @click="handleClick"
          :data-id="item.ref"
        >
          {{item.name}}
        </a>
        <router-link class="button" :class="this.buttonClass" to="/donate">Donate</router-link>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Navigation',
    props: {
      handleClick: Function
    },
    watch:{
      '$route' (to, from){
        if(this.$route.name == 'home'){
          this.setNavStyles("light");
        }else{
          this.setNavStyles("dark");
        }
      }
    },
    data() {
      return{
        windowHeight: 0,
        navClass: "nav-light",
        buttonClass: "button-light",
        navItems: [
          {
            ref: "statement",
            name: "About"
          },
          {
            ref: "how",
            name: "How it Works"
          },
          {
            ref: "stories",
            name: "Stories"
          },
          {
            ref: "statement",
            name: "Team"
          }
        ]
      }
    },
    methods: {
      handleScroll(e){
        if(this.$route.name == 'home'){
          if(window.scrollY <= (this.windowHeight + 20) && this.navClass == "nav-dark"){
            this.setNavStyles("light");
          }else if(window.scrollY > (this.windowHeight - 20) && this.navClass == "nav-light"){
            this.setNavStyles("dark");
          }
        }
      },
      setNavStyles(type){
        if(type == "light"){
          this.navClass = "nav-light";
          this.buttonClass = "button-light";
        }else if(type == "dark"){
          this.navClass = "nav-dark";
          this.buttonClass = "button-dark";
        }
      }
    },
    created () {
      this.windowHeight = window.innerHeight;
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    mounted(){
      if(this.$route.name !== 'home'){
        this.setNavStyles('dark');
      }
    }
  }
</script>
<style lang="scss" scoped>
#nav {
  z-index: 10;
  top: 0;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 12vh;
  padding: 0px 6vw;
  box-sizing: border-box;
  #nav-left, #nav-right{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 1;
  }
  a {
    font-weight: bold;
    font-size: 0.96rem;
    &:hover{
      color: $primary;
    }
  }
  #nav-left{
    img{
      width: 24px;
      margin-right: 8px;
    }
  }
  #nav-right{
    justify-content: flex-end;
    a {
      margin-left: 32px;
    }
  }
}
.nav-dark{
  //nav styles with dark text
  background-color: white;
  a{
    color: $text;
  }
}
.nav-light{
  //nav styles with white text on dark background
  background-color: transparent;
  a{
    color: white;
  }
}
</style>
