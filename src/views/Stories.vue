<template>
    <section id="stories-view">
        <div class="banner">
            <div class="background" :style="{'background-image': `url(${data.main_image.url})`}"/>
        </div>
        <div class="content center">
            <div class="container">
                <h1>{{data.name}}</h1>
                <h4>{{data.business_name}}</h4>
                <h4>{{data.location}}</h4>
                <div class="links">
                    <a
                        class="underline"
                        v-for="link in data.links"
                        :href="link.link.url"
                        target="_blank"
                    >{{link.link_name}}</a>
                </div>
                <img :src="data.logo.url" :alt="data.uid + ' logo'" class="logo" v-if="data.logo.url"/>
            </div>
            <component
                v-for="slice in data.body"
                v-if="slicesData[slice.slice_type]"
                :is="slicesData[slice.slice_type]"
                v-bind="slice.primary"
                class="stories-block"
                :class="(slice.slice_type !== 'product' && slice.slice_type !== 'image') && 'container'"
            />
        </div>
        <MoreStories :data="moreData"/>
    </section>
</template>
<style lang="scss" scoped>
    .logo{
        position: absolute;
        top: 0;
        right: 0;
        width: 16%;
    }
    .banner{
        width: 100%;
        height: 72vh;
        position: relative;
        display: block;
    }
    .links{
        margin: 24px 0;
        display: flex;
        flex-wrap: wrap;
        .underline{
            margin-right: 12px;
            margin-bottom: 12px;
        }
    }
    .content{
        flex-direction: column;
        margin: 12vh 0 24vh 0;
        .container{
        width: 60%;
        }
        h1{
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        h4{
            margin-bottom: 0.6rem;
            font-weight: 400;
        }
    }
    .stories-block{
        margin-top: 32px;
        margin-bottom: 32px;
        display: inline-block;
    }
    @include mobile{
        .content{
            margin: 12vh 0;
            h1{
                font-size: 24px;
                margin-bottom: 4px;
            }
        }
        .banner{
            height: 40vh;
        }
        .content .container{
            width: 88%;
        }
    }
</style>
<script>
import TextBlock     from '@/components/slices/TextBlock';
import Quote         from '@/components/slices/Quote';
import Product       from '@/components/slices/Product';
import StoriesImage  from '@/components/slices/StoriesImage';
import StoriesVideo  from '@/components/slices/StoriesVideo';
import MoreStories   from '@/components/MoreStories';

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
        StoriesVideo,
        MoreStories
    },
    watch:{
      '$route' (to, from){
        this.init();
      }
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
            },
            moreData: []
        }
    },
    methods: {
        init(){
            //reset
            this.moreData = [];
            this.data = null;
            //find
            this.assignContent();
        },
        assignContent(){
            let found = this.stories.find(s => s.uid == this.$route.params.id);
            if(found){
                this.data = found;
                let index = this.stories.findIndex(s => s.uid == this.$route.params.id);
                let curIndex = index+1;
                while (this.moreData.length < 3){
                    if(curIndex >= this.stories.length){
                        curIndex = 0;
                    }
                    if (curIndex !== index){
                        this.moreData.push(this.stories[curIndex])
                    }
                    curIndex++;
                }
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