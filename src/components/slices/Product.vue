<template>
    <div class="product-wrapper">
    <div class="product container">
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
        width: 100%;
    }
    .product{
        display: flex;
        flex-direction: row;
        width: 50%;
        .product-left{
            img{
                width: 100%;
            }
            flex: 1;
        }
        .product-right{
            flex: 1.2;
            box-sizing: border-box;
            padding-left: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            .text{
                margin: 0.4rem 0;
            }
            .button{
                display: inline-block;
                padding-top: 12px;
                padding-bottom: 12px;
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
    @include tablet{
        .product{
            width: 90%;
            flex-direction: column;
            .product-left, .product-right{
                flex: 1;
                padding: 0;
            }
            .product-right{
                margin-top: 1.2rem;
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