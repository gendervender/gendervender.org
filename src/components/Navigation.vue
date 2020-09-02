<template>
    <div id="nav" :class="this.navClass">
      <div class="container">
        <div id="nav-left"> 
          <img src="../assets/logo.png"/>
          <router-link to="/">Gender Vender</router-link>
        </div>
        <div id="nav-right" v-if="windowWidth >= 1200">
          <template v-for="item in navItems">
              <router-link
                v-if="!item.mobile"
                :to="item.ref"
              >
                {{item.name}}
              </router-link>
          </template>
          <router-link class="button button-secondary" 
            aria-role="button"
            :class="this.buttonClass"
            to="/shop">
            SHOP NOW
          </router-link>
        </div>
        <div id="nav-right" v-if="windowWidth < 1200">
          <img :src="getImgUrl(showMenu ? menuIcon.close : menuIcon.open)" @click="toggleMenu"/>
          <MobileNav :navItems="navItems" :showMenu="showMenu" :toggleMenu="toggleMenu"/>
        </div>
      </div>
    </div>
</template>
<script>
import MobileNav  from '@/components/NavigationMobile';

export default {
  name: 'Navigation',
  components: {
    MobileNav
  },
  watch:{
    '$route' (to, from){
      if(this.$route.name == 'home'){
        setTimeout(() => {
          //delay to match route transition
          this.setNavStyles("light");
        }, 400)
      }else{
        this.setNavStyles("dark");
      }
    }
  },
  data() {
    return{
      windowHeight: 0,
      windowWidth: 0,
      navClass: "nav-light",
      buttonClass: "button-light",
      menuIcon: {
        open: "menu-light",
        close: "menu-close-light"
      },
      showMenu: false,
      navItems: [
        {
          ref: "/",
          name: "Home",
        },
        {
          ref: "/about",
          name: "About",
        },
        {
          ref: "/stories",
          name: "Stories",
        },
        {
          ref: "/products",
          name: "Products",
        },
        {
          ref: "/team",
          name: "Team",
        },
        {
          ref: "/contact",
          name: "Contact",
          mobile: true
        }
      ]
    }
  },
  methods: {
    toggleMenu(){
      this.showMenu = !this.showMenu;
    },
    preventScroll(e){
      e.preventDefault()
    },
    toggleScrollStatus(status){
      if(true){
        document.ontouchmove = function(e){ 
          return true; 
        }
      }else{
        document.ontouchmove = function(e){ 
          e.preventDefault(); 
        }
      }
    },
    getImgUrl(url) {  
      var images = require.context('@/assets/', false, /\.svg$/);
      return images('./icon-' + url + ".svg");
    },
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
        this.menuIcon.open = "menu-light";
        this.menuIcon.close = "menu-close-light";
      }else if(type == "dark"){
        this.navClass = "nav-dark";
        this.buttonClass = "button-dark";
        this.menuIcon.open = "menu";
        this.menuIcon.close = "menu-close";
      }
    },
    handleResize(e){
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    }
  },
  created () {
    this.handleResize();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleResize);
  },
  mounted(){
    if(this.$route.name !== 'home'){
      this.setNavStyles('dark');
    }
  }
}
</script>
<style lang="scss" scoped>
.container, #nav-left, #nav-right, #nav{
  display: flex;
  align-items: center;
  flex-direction: row;
}
#nav {
  z-index: 10;
  top: 0;
  left: 0;
  -webkit-transform: translateZ(0);
  position: fixed;
  height: 12vh;
  width: 100vw;
  a:not(.button) {
    font-weight: bold;
    font-size: $font-size-xs;
    &:hover{
      color: $primary;
    }
  }
  #nav-left{
    flex: 1;
    img{
      width: 20px;
      margin-right: 12px;
    }
  }
  #nav-right{
    flex: 2;
    justify-content: flex-end;
    a {
      margin-left: 28px;
    }
    img{
      width: 28px;
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
@include desktop{
  #nav-left{
    img{
      width: 32px!important;
      margin-right: 12px!important;
    }
  }
  a{
    font-size: 1.1rem!important;
  }
}
@include tablet{
  #nav-right, #nav-left{ flex: 1!important}
  .nav-dark a:hover{
    color: $text!important;
  }
  .nav-light a:hover{
    color: white!important;
  }
}
</style>
