<template>
  <div id="products-discover" class="container center home-block products">
    <prismic-rich-text :field="title"/>
    <prismic-rich-text :field="content"/>
    <div class="products__wrapper">
        <div class="products__info center">
            <prismic-image :field="items[selected].image_product"/>
            <div class="products__info-text">
                <h3>{{items[selected].business_name}}</h3>
                <prismic-rich-text :field="items[selected].product_description" />
            </div>
        </div>
        <div class="products__selection row center">
            <div
                v-for="(item, key) in items" @click="selectProduct(key)"
                v-bind:class="{
                    'products__selection-logo products__selection-logo-selected center': selected === key,
                    'products__selection-logo center': selected !== key
                }"
            >
                <img v-if="item.image_logo.url" :src="item.image_logo.url"/>
                <span v-else>{{item.business_name}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsDiscover',
  data() {
      return{
          title: [],
          content: [],
          items: [],
          selected: 0
      }
  },
  methods: {
      selectProduct(index){
          this.selected = index;
      }
  },
  created(){
      const data = this.$store.state.products;
      this.title = data.products_title;
      this.content = data.products_content;
      this.items = data.product_items;
  }
}
</script>

<style lang="scss">
  .cta-block{
    background-color: $site-bg;
    padding: 8%;
    box-sizing: border-box;
    text-align: center;
    p {
      font-size: $font-size-m;
      margin-top: 0rem;
    }
    .button{
      margin-top: 0.4rem;
    }
    @include mobile{
      p{
        font-size: $font-size-xs;
      }
    }
  } 
  .products{
    &__wrapper{
        margin: 4% 0%;
        width: 100%;
    }
    &__info{
        width: 75%;
        margin: auto;
        height: 60vh;
        img{
            width: 40%;
            height: 100%;
            object-fit: cover;
        }
        &-text{
            height: 100%;
            width: 60%;
            box-sizing: border-box;
            padding: 8%;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
    }
    &__selection{
        margin-top: 32px;
    }
    &__selection-logo{
        cursor: pointer;
        width: 60px;
        height: 60px;
        margin: 0% 12px;
        border: 2px transparent solid;
        padding: 12px;
        span{
            text-align: center;
            display: block;
            font-weight: 600;
            line-height: 1.4;
            font-size: $font-size-xs;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        &:hover, &:focus{
            border-color: $secondary;
        }
    }
    &__selection-logo-selected{
        border-color: $secondary;
    }
  }
</style>
