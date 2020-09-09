<template>
  <div id="mobile-menu"
    :style="showMenu ? 'opacity: 1; top: 8vh; pointer-events: all' : 'opacity: 0; top: 28vh; pointer-events: none'">
    <div class="container">
      <h1>Menu</h1>
      <div id="mobile-menu-items">
        <template v-for="item in navItems">
          <router-link :to="item.ref" @click.native="toggleMenu">
            <h2>{{item.name}}</h2>
          </router-link>
        </template>
        <router-link class="button" aria-role="button" @click.native="toggleMenu" to="/shop">
          SHOP NOW
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  font-weight: 400;
  font-size: $font-size-m;
  margin-bottom: 2rem;
}
h2{
  font-size: 1.8rem;
}

#mobile-menu-items {
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 1.6rem;
    color: $text !important;
  }

  .button {
    margin-top: 20px;
    color: white !important;
  }
}

#mobile-menu {
  width: 100%;
  height: 88vh;
  background: $site-bg;
  position: fixed;
  -webkit-transform: translateZ(0);
  z-index: 5;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 40px 0;
  transition: all 0.4s;
  @include mobile{
    height: 92vh!important;
  }
}
</style>
<script>
export default {
  name: "MobileNav",
    props: {
        navItems: Array,
        toggleMenu: Function,
        showMenu: Boolean
    }
}
</script>