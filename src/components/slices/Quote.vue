<template>
    <div class="stories-block">
        <q>{{quote}}</q>
    </div>
</template>
<style lang="scss" scoped>
    q{
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.6;
    }
</style>
<script>
export default {
    name: "Quote",
    props: {
       quote: String
    }
}
</script>