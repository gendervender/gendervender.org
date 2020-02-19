<template>
    <section id="stories-view">
        <div class="banner">
            <div class="background" :style="{'background-image': `url(${data.main_image.url})`}"/>
        </div>
        <div class="content center">
            <div class="stories-block container">
                <h1>{{data.name}}</h1>
                <h4>{{data.business_name}}</h4>
                <h4>{{data.location}}</h4>
                <div class="links">
                    <a
                        class="underline"
                        v-for="link in data.links"
                        :href="link.link.url"
                        target="_blank"
                    >
                        {{link.link_name}}
                    </a>
                </div>
            </div>
            <component
                v-for="slice in data.body"
                v-if="slicesData[slice.slice_type]"
                :is="slicesData[slice.slice_type]"
                v-bind="slice.primary"
                class="stories-block"
                :class="slice.slice_type !== 'product' && 'container'"
            />
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .banner{
        width: 100%;
        height: 88vh;
        position: relative;
        display: block;
    }
    .links{
        margin: 24px 0;
        .underline{
            margin-right: 12px;
        }
    }
    .content{
        flex-direction: column;
        margin: 12vh 0 24vh 0;
        .container{
        width: 60%;
        }
        h1{
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        h4{
            margin-bottom: 0.6rem;
            font-weight: 400;
        }
    }
    .stories-block{
        margin: 32px 0;
        display: inline-block;
    }
</style>
<script>
import TextBlock     from '@/components/slices/TextBlock';
import Quote         from '@/components/slices/Quote';
import Product       from '@/components/slices/Product';
import StoriesImage  from '@/components/slices/StoriesImage';
import StoriesVideo  from '@/components/slices/StoriesVideo';

export default {
    name: "StoriesView",
    props: {
        stories: Array
    },
    components:{
        TextBlock,
        Quote,
        Product,
        StoriesImage,
        StoriesVideo
    },
    data(){
        return {
            data: null,
            slicesData: {
                text_block: "TextBlock",
                quote: "Quote",
                product: "Product",
                image: "StoriesImage",
                video: "StoriesVideo"
            }
        }
    },
    methods: {
        init(){
            let found = this.stories.find(s => s.uid == this.$route.params.id);
            if(found){
                this.data = found;
            }else{
                this.$router.push('/404');
            }
        }
    },
    created(){
        this.init();
    }
}
</script>