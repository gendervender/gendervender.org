<template>
    <prismic-rich-text class="text" v-if="text" :field="text"/>
</template>
<script>
export default {
    name: "TextBlock",
    props: {
       text: Array
    }
}
</script>