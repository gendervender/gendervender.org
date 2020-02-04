<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1,h2,h3,h4,h5{
  margin: 0%;
  letter-spacing: 0.02rem;
}
p, a, b, span{
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.02rem;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--text);

    &.router-link-exact-active {
        color: var(--primary);
    }
  }
}
</style>
