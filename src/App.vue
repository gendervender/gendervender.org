<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
:root{
  --primary: #FF4085!important;
  --secondary: #00CEE5!important;
  --tertiary: #FFE819!important;
  --text: #000000!important;
}
body{
  margin: 0%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
}
h1,h2,h3,h4,h5{
  margin: 0%;
  letter-spacing: 0.02rem;
}
p, a, b, span{
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 400;
  letter-spacing: 0.02rem;
}
</style>
