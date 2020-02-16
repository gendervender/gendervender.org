<template>
    <div class="stories-block">
    <div class="product">
        <div class="product-left">
            <img :src="product_image.url" :alt='product_name + " image"'/>
        </div>
        <div class="product-right">
            <prismic-rich-text class="title" v-if="product_name" :field="product_name"/>
            <prismic-rich-text class="text" v-if="product_description" :field="product_description"/>
            <a
                v-if="product_link && product_link_name"
                :href="product_link.url"
                target="_blank"
                class="button"
            >
                {{product_link_name}}
            </a>
        </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .product{
        display: flex;
        .product-left, .product-right{
            flex: 1
        }
        .product-left{
            img{
                width: 100%;
            }
        }
        .product-right{
            box-sizing: border-box;
            padding: 0 40px;
            .title{
                font-size: 0.9rem;
                margin-bottom: 12px;
            }
            .text{
                font-size: 0.96rem;
            }
            .button{
                margin-top: 12px;
                display: inline-block;
            }
        }
    }
</style>
<script>
export default {
    name: "Product",
    props: {
        product_image: Object,
        product_name: Array,
        product_description: Array,
        product_link_name: String,
        product_link: Object
    }
}
</script>