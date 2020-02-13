<template>
    <div id="nav" :class="this.navClass">
        <div id="nav-left"> 
        <img src="../assets/logo.png"/>
        <router-link to="/" v-on:click.native="handleClick" data-id="landing">Gender Vender</router-link>
        </div>
        <div id="nav-right">
        <a 
          v-for="item in navItems"
          v-on:click="handleClick"
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
            ref: "statement",
            name: "Stories"
          },
          {
            ref: "statement",
            name: "Location"
          }
        ]
      }
    },
    methods: {
      handleScroll(e){
        if(this.$route.name == 'home'){
          if(window.scrollY <= this.windowHeight && this.navClass == "nav-dark"){
            this.setNavStyles("light");
          }else if(window.scrollY > this.windowHeight && this.navClass == "nav-light"){
            this.setNavStyles("dark");
          }
        }
      },
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
  padding: 0px 4vw;
  box-sizing: border-box;
  #nav-left, #nav-right{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 1;
  }
  a {
    font-weight: bold;
    &:hover{
      color: $primary;
    }
  }
  #nav-left{
    img{
      width: 20px;
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
