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
    @include mobile{
        q{
            font-size: 1.4rem;
            line-height: 1.8;
        }
    }
    @include tablet{
        q{
            font-size: 1.4rem;
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