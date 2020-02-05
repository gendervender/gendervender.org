<template>
    <div id="nav">
        <div id="nav-left"> 
        <img src="../assets/logo.png"/>
        <router-link to="/" v-on:click.native="handleScroll" data-id="landing">Gender Vender</router-link>
        </div>
        <div id="nav-right">
        <a 
          v-for="item in navItems"
          v-on:click="handleScroll"
          :data-id="item.ref"
        >
          {{item.name}}
        </a>
        <router-link class="button" to="/donate">Donate</router-link>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Navigation',
    data() {
      return{
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
      }
    }
  }
</script>
<style lang="scss" scoped>
#nav {
  z-index: 10;
  background-color: white;
  top: 0;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 10vh;
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
    color: var(--text);
    &:hover{
      color: var(--primary);
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
</style>
