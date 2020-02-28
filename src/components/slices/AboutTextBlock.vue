<template>
    <div class="about-txt-block">
        <prismic-rich-text class="header" v-if="header" :field="header"/>
        <prismic-rich-text class="text" v-if="text" :field="text"/>
    </div>
</template>
<style lang="scss" scoped>
    .about-txt-block{
        flex-direction: row;
        padding-right: 20vw;
        .header{
            flex: 1
        }
        .text{
            flex: 2
        }
        @include mobile{
            flex-direction: column;
            padding: 0;
            .header{
                margin-bottom: 12px;
            }
        }
    }
</style>
<script>
export default {
    name: "AboutTextBlock",
    props: {
       header: Array,
       text: Array
    }
}
</script>