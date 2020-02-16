<template>
    <div class="stories-block video">
    <iframe :src="link.url" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
<style lang="scss" scoped>
.video{
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
    width: 100%;
    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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