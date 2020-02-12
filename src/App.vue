<template>
  <div id="app">
    <Navigation/>
    <router-view/>
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
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1,h2,h3,h4,h5{
  margin: 0%;
  letter-spacing: 0.015rem;
}
.text{
  *{
    font-weight: inherit;
    color: inherit;
    font-size: inherit;
    margin: 0;
    padding: 0;
  }
}
p, a, b, span, button{
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.01rem;
}
a{
  cursor: pointer;
  text-decoration: none;
  &:visited{
    color: inherit;
  }
}
.button{
  padding: 4px 20px;
  position: relative;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  border-radius: 5px;
  &:hover{
    border-color: $primary;
    color: white!important;
    background-color: $primary;
    -webkit-box-shadow: 0px 4px 12px 0px rgba($primary,0.6);
    -moz-box-shadow: 0px 4px 12px 0px rgba($primary,0.6);
    box-shadow: 0px 4px 12px 0px rgba($primary,0.6);
  }
}
.button-light{
  color: white;
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
  font-weight: 600;
  padding: 0;
  position: relative;
  &:after{
    content: '';
    background: $text;
    position: absolute;
    bottom: 2px;
    left: 0;
    height: 1px;
    width: 100%;
  }
  &:hover{
    color: $primary;
    &:after{
      background: $primary;
    }
  }
}
.text{
  box-sizing: border-box;
}
.container{
  box-sizing: border-box;
  margin: 0% 4vw;
  position: relative;
  width: auto;
}
.background{
  position: absolute;
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
  z-index: -1;
  background-color: $text;
  opacity: 0.6;
}

</style>
