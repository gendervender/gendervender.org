<template>
<iframe :src="url.url" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
</template>
<style lang="scss" scoped>
iframe{
    width: 100%;
    height: 80vh;
}
</style>
<script>
export default {
    name: "TextBlock",
    props: {
       url: Object
    }
}
</script>