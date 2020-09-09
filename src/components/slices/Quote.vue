<template>
    <q>{{quote}}</q>
</template>
<style lang="scss" scoped>
    q{
        font-size: $font-size-l;
        font-weight: 500;
        line-height: 2;
        padding: 4vh 0;
    }
    @include desktop{
        q{
            font-size: $font-size-xl;
        }
    }
    @include tablet{
        q{
            font-size: $font-size-l;
            line-height: 1.8;
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