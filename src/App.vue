<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>
<script>
  import Navigation from '@/components/Navigation.vue';
  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>
<style lang="scss">
:root{
  --primary: #FF4085!important;
  --secondary: #00CEE5!important;
  --tertiary: #FFE819!important;
  --text: #000000!important;
}
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
  }
}
p, a, b, span{
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.01rem;
}
a{
  text-decoration: none;
  &:visited{
    color: inherit;
  }
}
.button{
  color: white!important;
  padding: 4px 12px;
  position: relative;
  &:before, &:after{
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  &:before{
    height: 0%;
    z-index: -1;
    background-color: var(--primary);
  }
  &:after{
    height: 100%;
    z-index: -2;
    background-color: var(--text);
  }
  &:hover{
    &:before{
      height: 100%;
    }
  }
}
.underline{
  font-weight: 600;
  position: relative;
  &:after{
    content: '';
    background: var(--text);
    position: absolute;
    bottom: 2px;
    left: 0;
    height: 1px;
    width: 100%;
  }
  &:hover{
    color: var(--primary);
    &:after{
      background: var(--primary);
    }
  }
}
.text{
  box-sizing: border-box;
}
.container{
  margin: 0% 4vw;
  position: relative;
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
  background-color: var(--primary);
  opacity: 0.8;
}

</style>
