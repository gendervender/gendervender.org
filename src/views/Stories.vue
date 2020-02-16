<template>
    <section>
        <div class="center container" id="stories">
            <div class="banner">
                <div class="background" :style="{'background-image': `url(${data.main_image.url})`}"/>
            </div>
            <div class="content">
                <h1>{{data.name}}</h1>
                <h2>{{data.business_name}}</h2>
                <h2>{{data.location}}</h2>
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
                <component
                    v-for="slice in data.body"
                    v-if="slicesData[slice.slice_type]"
                    :is="slicesData[slice.slice_type]"
                    v-bind="slice.primary"
                />
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    #stories{
        flex-direction: column;
        .banner{
            width: 100%;
            height: 70vh;
            position: relative;
        }
        .links{
            margin: 24px 0;
            .underline{
                margin-right: 12px;
            }
        }
        .content{
            margin: 12vh 0 24vh 0;
            width: 64%;
            h1{
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            h2{
                font-size: 1.2rem;
                margin-bottom: 0.6rem;
                font-weight: 400;
            }
        }
        .stories-block{
            margin: 44px 0;
            display: inline-block;
        }
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
                console.log(found)
            }else{
                this.$router.push('/404')
            }
        }
    },
    created(){
        this.init();
    }
}
</script>