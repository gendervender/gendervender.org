<template>
    <div class="stories-image">
        <img :src="image.url" alt="stories_image"/>
    </div>
</template>
<style lang="scss" scoped>
    .stories-image{
        margin: 16px 0;
       img{ 
           width: 100%
       }
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