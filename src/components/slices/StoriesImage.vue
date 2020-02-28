<template>
    <img :src="image.url" class="image" alt="stories_image"/>
</template>
<style lang="scss" scoped>
    .image{ 
        width: 100%;
        height: auto;
        display: block;
    }
</style>
<script>
export default {
    name: "StoriesImage",
    props: {
       image: Object
    }
}
</script>