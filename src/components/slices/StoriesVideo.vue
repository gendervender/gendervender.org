<template>
    <div class="video">
        <iframe :src="video_link || link.url" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
<style lang="scss" scoped>
.video{
	position: relative;
	padding-bottom: 31.25%; /* 16:9 */
	height: 0;
    width: 100%;
    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    @include tablet{
        width: 100%!important;
        padding-bottom: 56.25%;
    }
}
</style>
<script>
export default {
    name: "StoriesVideo",
    props: {
       link: Object,
       video_link: String
    }
}
</script>