<template>
    <img :src="image.url" class="image container" alt="stories_image"/>
</template>
<style lang="scss" scoped>
    .image{ 
        height: auto;
        width: 100%;
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