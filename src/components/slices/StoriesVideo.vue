<template>
    <div class="video">
        <iframe :src="link.url" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
<style lang="scss" scoped>
.video{
	position: relative;
	padding-bottom: 37.5%; /* 16:9 */
	height: 0;
    width: 100%;
    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    @include mobile{
        width: 100%!important;
        padding-bottom: 56.25%;
    }
}
</style>
<script>
export default {
    name: "StoriesVideo",
    props: {
       link: Object
    }
}
</script>