<template>
    <img :src="image.url" class="image container" alt="stories_image"/>
</template>
<style lang="scss" scoped>
    .image{ 
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