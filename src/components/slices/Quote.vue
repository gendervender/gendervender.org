<template>
    <q>{{quote}}</q>
</template>
<style lang="scss" scoped>
    q{
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2;
        padding: 4vh 0;
    }
    @include desktop{
        q{
            font-size: 2rem;
        }
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