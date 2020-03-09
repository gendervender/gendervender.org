<template>
    <div id="mobile-menu" :style="showMenu ? 'opacity: 1; top: 12vh; pointer-events: all' : 'opacity: 0; top: 50vh; pointer-events: none'">
        <div class="container">
            <h3>Menu</h3>
            <div id="mobile-menu-items">
                <template v-for="item in navItems">
                    <a 
                        v-if="item.routerLink == false"
                        @click="handleClickMobile"
                        :data-id="item.ref"
                    >
                        <h1 :data-id="item.ref">{{item.name}}</h1>
                    </a>
                    <router-link
                        v-else
                        :to="item.ref"
                        @click.native="toggleMenu"
                    >
                        <h1>{{item.name}}</h1>
                    </router-link>
                </template>
                <a class="button" 
                    target="_blank"
                    :href="donateLink">
                    <h2>Donate</h2>
                </a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    h3{
        font-weight: 400;
        margin-bottom: 24px;
    }
    #mobile-menu-items{
        display: flex;
        flex-direction: column;
        a{
            margin-bottom: 16px;
            color: $text!important;
        }
        .button{
            margin-top: 20px;
            color: white!important;
        }
    }
    #mobile-menu{
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
    }
</style>
<script>
export default {
  name: "MobileNav",
    props: {
        handleClick: Function,
        navItems: Array,
        donateLink: String,
        toggleMenu: Function,
        showMenu: Boolean
    },
    methods: {
        handleClickMobile(e){
            this.handleClick(e);
            this.toggleMenu();
        }
    }
}
</script>