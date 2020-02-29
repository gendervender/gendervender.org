<template>
    <div id="nav" :class="this.navClass">
        <div id="nav-left"> 
          <img src="../assets/logo.png"/>
          <router-link to="/" @click.native="handleClick" data-id="landing">Gender Vender</router-link>
        </div>
        <div id="nav-right" v-if="windowWidth >= 1200">
          <template v-for="item in navItems">
              <a 
                v-if="item.routerLink == false && !item.mobile"
                @click="handleClick"
                :data-id="item.ref"
              >
                {{item.name}}
              </a>
              <router-link
                v-else-if="item.routerLink == true && !item.mobile"
                :to="item.ref"
              >
                {{item.name}}
              </router-link>
          </template>
          <a class="button button-secondary" 
            :class="this.buttonClass"
            target="_blank"
            :href="donateLink">
            Donate
          </a>
        </div>
        <div id="nav-right" v-if="windowWidth < 1200">
          <img :src="getImgUrl(showMenu ? menuIcon.close : menuIcon.open)" @click="toggleMenu"/>
          <MobileNav :handleClick="handleClick" :navItems="navItems" :showMenu="showMenu" :toggleMenu="toggleMenu" :donateLink="donateLink"/>
        </div>
    </div>
</template>
<script>
  import MobileNav  from '@/components/NavigationMobile';

  export default {
    name: 'Navigation',
    props: {
      handleClick: Function,
      donateLink: String,
      disableScroll: Function
    },
    components: {
      MobileNav
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
        windowWidth: 0,
        navClass: "nav-light",
        buttonClass: "button-light",
        menuIcon: {
          open: "menu-light",
          close: "menu-light-close"
        },
        showMenu: false,
        navItems: [
          {
            ref: "/about",
            name: "About",
            routerLink: true
          },
          {
            ref: "how",
            name: "How It Works",
            routerLink: false
          },
          {
            ref: "stories",
            name: "Stories",
            routerLink: false
          },
          {
            ref: "/team",
            name: "Team",
            routerLink: true
          },
          {
            ref: "/contact",
            name: "Contact",
            routerLink: true,
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
        var images = require.context('../assets/', false, /\.svg$/)
        return images('./icon-' + url + ".svg")
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
#nav {
  z-index: 10;
  top: 0;
  left: 0;
  -webkit-transform: translateZ(0);
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
@include mobile{
  .nav-dark a:hover{
    color: $text!important;
  }
  .nav-light a:hover{
    color: white!important;
  }
}
</style>
