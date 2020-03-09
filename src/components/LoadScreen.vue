<template>
    <div id="load-screen" :style="isLoading?'opacity: 1;':'opacity: 0; pointer-events: none;'">
        <img src="../assets/logo.png" alt="logo"/>
    </div>
</template>
<style lang="scss" scoped>
    #load-screen{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background: black;
        position: fixed;
        top: 0;
        left: 0;
        transition: opacity 0.5s;
        img{
            width: 5%;
            animation: 1.5s loading ease-in infinite;
            @include mobile{
                width: 52px;
            }
        }
    }
    @keyframes loading{
        0%{
            opacity: 1
        }
        50%{
            opacity: 0.2
        }
        100%{
            opacity: 1
        }
    }
</style>
<script>
    export default {
        name: 'LoadScreen',
        props: {
            isLoading: Boolean
        }
    }
</script>