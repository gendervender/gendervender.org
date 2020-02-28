<template>
    <div class="product-wrapper">
    <div class="product">
        <div class="product-left">
            <img :src="product_image.url" :alt='product_name + " image"'/>
        </div>
        <div class="product-right">
            <prismic-rich-text v-if="product_name" :field="product_name"/>
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
    .product-wrapper{
        background-color: white;
        padding: 12vh 0;
    }
    .product{
        display: flex;
        width: 60%;
        margin: auto;
        flex-direction: row;
        .product-left{
            img{
                width: 100%;
            }
            flex: 1;
        }
        .product-right{
            flex: 1.2;
            box-sizing: border-box;
            padding: 0 52px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            .text{
                margin-top: 0.4rem;
            }
            .button{
                display: inline-block;
            }
        }
    }
    @include mobile{
        .product-wrapper{
            padding: 52px 0;
        }
        .product{
            width: 88%;
            flex-direction: column;
            .product-left, .product-right{
                flex: 1;
                padding: 0;
            }
            .product-right{
                margin-top: 24px;
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