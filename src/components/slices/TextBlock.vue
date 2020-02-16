<template>
    <div class="stories-block">
        <prismic-rich-text class="text" v-if="text" :field="text"/>
    </div>
</template>
<style lang="scss" scoped>
    .text{
        font-size: 0.96rem;
    }
</style>
<script>
export default {
    name: "TextBlock",
    props: {
       text: Array
    }
}
</script>